import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import axios from "axios";
import Cloud from "../../assets/images/cloud.svg";
import Sunny from "../../assets/images/sunny.svg";
import Sleety from "../../assets/images/sleety.svg";
import Snow from "../../assets/images/snow.svg";
import Windy from "../../assets/images/windy.svg";
import iconEdit from "../../assets/images/iconEdit.svg";
//css 적용
// import "./css/datepicker.css"
import "react-datepicker/dist/react-datepicker.css";

// 한글 적용
import { ko } from "date-fns/locale";
import { format, isWithinInterval } from "date-fns";

registerLocale("ko", ko);

//사용자 개인 예약 날짜를 볼수 있는 달력
//예약 완료시 이메일로 예약 확인 보냄
//예약하려는 날짜의 캠핑장 날씨 정보 제공

function Calender() {
  const API_KEY = "db5e9fc650822da7c6cc328c5ec59bdf";
  const lang = "kr";
  const [weatherData, setWeatherData] = useState();
  const [weathersData, setWeathersData] = useState();
  const [iconURL, setIconURL] = useState();
  const iconSection = document.querySelector(".weatherIcon");
  const iconsSection = document.querySelector(".weathersIcon");

  const [dateRange, setDataRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [reservations, setReservations] = useState([]);
  const [reservationed, setReservationed] = useState([]);

  var formattedStartDate;
  var formattedEndDate;

  if (startDate) {
    formattedStartDate = format(startDate, "yyyy년 MM월 dd일", { locale: ko });
  }
  if (endDate) {
    formattedEndDate = format(endDate, "yyyy년 MM월 dd일", { locale: ko });
  }

  useEffect(() => {
    fetchReservations();
    getPosition();
  }, []);

  //DB에서 예약 리스트 가져오기
  const fetchReservations = async () => {
    try {
      console.log("fetchReservations 시작");
      const response = await axios.get("http://localhost:8082/reservations");
      console.log(response.data);
      setReservationed(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //시작일, 마지막일 저장 <예약하기 버튼 클릭함수>
  const handleReservation = async () => {
    if (startDate && endDate) {
      if (isReservationOverlap(startDate, endDate)) {
        alert("선택한 날짜 범위에 이미 예약된 날짜가 포함되어 있습니다.");
        return;
      }

      const adjustedStartDate = new Date(
        startDate.setHours(23, 0, 0, 0)
      ).toISOString();
      const adjustedEndDate = new Date(
        endDate.setHours(23, 0, 0, 0)
      ).toISOString();

      console.log("시작일 = " + adjustedStartDate);
      console.log("마지막일 = " + adjustedEndDate);

      try {
        const response = await axios.post("http://localhost:8082/reservation", {
          startDate: adjustedStartDate,
          endDate: adjustedEndDate,
        });
        console.log(response);
        setReservations(response.data);
        fetchReservations();
        alert(
          "<캠핑 예약 선택일> \n" +
          response.data.startDate +
          " ~ " +
          response.data.endDate +
          "\n" +
          response.data.message
        );
      } catch (error) {
        alert('예약 중 오류가 발생했습니다.');
      }
    }
  };

  //예약 불가 날짜 지정
  const isDateDisabled = (date) => {
    return reservationed.some(
      (reservation) =>
        isWithinInterval(date, {
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate),
        }) ||
        date.toDateString() === new Date(reservation.startDate).toDateString()
    );
  };

  //예약 가능한지 확인
  const isReservationOverlap = (start, end) => {
    return reservationed.some(
      (reservation) =>
        isWithinInterval(start, {
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate),
        }) ||
        isWithinInterval(end, {
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate),
        }) ||
        (start <= new Date(reservation.startDate) &&
          end >= new Date(reservation.endDate))
    );
  };

  //초기화 함수
  const clearReservation = () => {
    setDataRange([null, null]);
  };

  //위치값 가져오기
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(success, fail);
  };

  //위치값 성공
  const success = (position) => {
    console.log(position);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(latitude, longitude);
    get5Position(latitude, longitude);
  };

  //위치값 실패
  const fail = () => {
    alert("좌표를 받아올 수 없음");
  };

  //날씨 가져오기
  const getWeather = async (lat, lon) => {
    try {
      const res = await axios.post(
        `https://api.openweathermap.org/data/2.5/weather?lang=${lang}&lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      //만들 아이콘일 경우
      const customIcon = res.data.weather[0].main;
      switch (customIcon) {
        case "Clear":
          setIconURL(Sunny);
          break;
        case "Wind":
          setIconURL(Windy);
          break;
        case "Clouds":
          setIconURL(Cloud);
          break;
        case "Rain":
          setIconURL(Sleety);
          break;
        case "Snow":
          setIconURL(Snow);
          break;
      }
      // iconSection.setAttribute('src', iconURL);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //5일치 날씨 가져오기
  const get5Position = async (lat, lon) => {
    console.log(lat);
    console.log(lon);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lang=${lang}&lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      console.log(res.data);
      //
      const weatherByDate = res.data.list.reduce((acc, currentValue) => {
        const date = format(new Date(currentValue.dt * 1000), "yyyy-MM-dd");
        if (!acc[date]) {
          acc[date] = currentValue.weather[0];
        }
        return acc;
      }, {});
      setWeathersData(weatherByDate);
      //
    } catch (error) {
      if (error.response) {
        // 서버가 2xx 범위를 벗어나는 상태 코드로 응답한 경우
        console.error("Error response:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        // 요청이 이루어졌으나 응답을 받지 못한 경우
        console.error("No response received:", error.request);
      } else {
        // 요청 설정 중에 오류가 발생한 경우
        console.error("Error:", error.message);
      }
    }
  };

  //달력의 cell에 데이터 넣기
  const renderDayContents = (day, date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    if (weathersData) {
      const dailyWeather = weathersData[formattedDate];

      let iconURLs;

      switch (dailyWeather?.main) {
        case "Clear":
          iconURLs = Sunny;
          break;
        case "Wind":
          iconURLs = Windy;
          break;
        case "Clouds":
          iconURLs = Cloud;
          break;
        case "Rain":
          iconURLs = Sleety;
          break;
        case "Snow":
          iconURLs = Snow;
          break;
      }
      return (
        <div>
          <span>{day}</span>
          {dailyWeather && (
            <img
              className="weathersIcon"
              src={iconURLs}
              alt={dailyWeather.description}
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="reservationWeatherInfo">
        <div className="infoContent">
          <div className="infoName">가산</div>
          <div className="weatherImg">
            <img className="weatherIcon" src={iconURL ? iconURL : ""} alt="" />
          </div>
          <ul className="weatherContent">
            <li>{weatherData?.weather[0].main}</li>
            <li>{weatherData?.main.temp}ºc</li>
            <li>체감온도 : {weatherData?.main.feels_like}ºc</li>
            <li>
              <span className="mintemp">{weatherData?.main.temp_min}ºc</span> ~{" "}
              <span className="maxtemp">{weatherData?.main.temp_max}ºc</span>
            </li>
            <li>{weatherData?.wind.speed} m/s</li>
          </ul>
        </div>
      </div>

      <div className="dateRangePick">
        <div>
          {startDate ? formattedStartDate : ""} {startDate ? "~" : ""}{" "}
          {endDate ? formattedEndDate : ""}
        </div>
        <div>
          <button className="clearReservation" onClick={clearReservation}>
            <img src={iconEdit} alt="" />
            <div>달력 초기화</div>
          </button>
        </div>
      </div>
      <div className="rangback">
        <div className="rangBox">
          <div className="rangStart">입실일</div>
          <div className="rangStartDate">
            {startDate ? formattedStartDate : ""}
          </div>
          <div className="rangEnd">퇴실일</div>
          <div className="rangEndDate">{endDate ? formattedEndDate : ""}</div>
        </div>
      </div>

      <form action="" onSubmit={handleReservation}>
        <DatePicker
          calendarClassName="custom-datepicker"
          selectsRange={true}
          dateFormat="yyyy년 MM월 dd일"
          dateFormatCalendar="yyyy년 MM월"
          locale="ko"
          selected={startDate}
          onChange={(update) => setDataRange(update)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={startDate ? startDate : new Date()}
          excludeDates={startDate ? [startDate] : []}
          filterDate={(date) => !isDateDisabled(date)}
          inline={true}
          isClearable={true}
          renderDayContents={renderDayContents}
        />

        <div className="reservationBox">
          <button className="reservationBtn">
            <div>
              <img src={iconEdit} alt="" />
            </div>
            <button className="btnFont" type="submit">
              예약하기
            </button>
          </button>
        </div>
      </form>

      {/* 사용자 예약 날짜 달력 */}
      {/* <h1>사용자 예약 달력s</h1>
            <div>
                <DatePicker
                    calendarClassName="disabled-datepicker"
                    dateFormat="yyyy년 MM월 dd일"
                    dateFormatCalendar="yyyy년 MM월"
                    locale="ko"
                    readOnly={true}
                    disabled={true}
                    filterDate={date => !isDateDisabled(date)}
                    inline={true}
                    isClearable={true}
                />
            </div> */}
    </div>
  );
}

export default Calender;
