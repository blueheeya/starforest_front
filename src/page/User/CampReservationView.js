import CampSelectCard from "../../components/Camp/CampSelectCard";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoading from "../../components/Layout/PageLoading";
import Footer from "../../components/Layout/Footer";

function CampReservationView() {
    const host = `${process.env.REACT_APP_SERVER_URL}user/camp/view`;
    const email = useSelector((state) => state.loginSlice.email);
    const { reservationid } = useParams();
    const state = useSelector((state) => state.loginSlice);
    console.log(state);
    const [campData, setCampData] = useState(null);
    const [campPropsData, setCampPropsData] = useState(null);
    const [reservData, setReservData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 문자열을 배열로 변환
    const startDateParts = reservData?.start_date;
    const endDateParts = reservData?.end_date;

    const Syear = startDateParts ? startDateParts[0] : "";
    const Eyear = endDateParts ? endDateParts[0] : "";
    const Smonth = startDateParts ? startDateParts[1] : "";
    const Emonth = endDateParts ? endDateParts[1] : "";
    const Sday = startDateParts ? startDateParts[2] : "";
    const Eday = endDateParts ? endDateParts[2] : "";

    const SdataFomat = `${Syear}년 ${Smonth}월 ${Sday}일`;
    const EdataFomat = `${Eyear}년 ${Emonth}월 ${Eday}일`;
    console.log(SdataFomat);
    console.log(EdataFomat);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const url = `${host}?reservationid=${reservationid}&email=${email}`;
                console.log("Fetching data from:", url);
                const response = await axios.get(url);
                const newCamps = response.data;
                console.log("API Response:", newCamps);

                if (newCamps && newCamps.camp && newCamps.reservation) {
                    setCampPropsData(newCamps.camp);
                    setReservData(newCamps.reservation);
                    setCampData(newCamps);
                } else {
                    throw new Error(
                        "Invalid data structure received from server"
                    );
                }
            } catch (error) {
                console.error("Error fetching camp data:", error);
                setError(error.message || "An unknown error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        if (reservationid && email) {
            fetchData();
        }
    }, [reservationid, email, host]);

    if (isLoading) {
        return <PageLoading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!campData) {
        return (
            <div
                className="myCampReserWrap"
                style={{
                    paddingTop: "64px",
                    height: "100vh",
                }}
            >
                <div className="myCampCardWrap">
                    <h4>예약 정보를 불러오는데 실패했습니다.</h4>
                </div>
            </div>
        );
    }
    console.log("Rendering with data:", { campPropsData, reservData });
    return (
        <>
            <div
                style={{
                    paddingTop: "64px",
                    height: "100%",
                    background: "#f5f5f5",
                }}
            >
                <div className="myCampReserWrap">
                    <h4>캠핑장 예약 정보</h4>
                    <div
                        className={`campSelectCardWrap`}
                        style={{ padding: 0 }}
                    >
                        <Link to={`/camp/view/${campPropsData.id}`}>
                            <div className="campCardInfo">
                                <div className="campCardImg">
                                    <img
                                        src={campPropsData.first_image_url}
                                        alt="캠핑장 사진"
                                    />
                                </div>
                                <ul className="campCardText">
                                    <li>
                                        {campPropsData.is_auto
                                            ? "오토 캠핑장"
                                            : ""}
                                        {campPropsData.is_carvan
                                            ? "카라반"
                                            : ""}
                                        {campPropsData.is_glamp ? "글램핑" : ""}
                                    </li>
                                    <li>{campPropsData.name}</li>
                                    <li>{campPropsData.add1}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>예약 날짜</h4>
                    <div>
                        {SdataFomat || "정보 없음"} ~{" "}
                        {EdataFomat || "정보 없음"}
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>예약자 정보</h4>
                    <div className="myCampReserInfo">
                        <div>
                            <span>이름</span> 김서하
                        </div>
                        <div>
                            <span>연락처</span> 010-2234-9678
                        </div>
                        <div>
                            <span>요구사항</span> 고기 구워 먹을 수 있게 그릴
                            예약합니다.
                        </div>
                        <div>
                            <span>차량번호</span> 1467
                        </div>
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>할인 적용</h4>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "0.94em",
                        }}
                    >
                        <span>샛별등급</span>
                        <span style={{ fontSize: "1.25em", color: "#f24e1e" }}>
                            30%
                        </span>
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>결제 금액</h4>
                    {/* <div>
                        {reservData && reservData.totalAmount
                            ? `${reservData.totalAmount}원`
                            : "결제 정보 없음"}
                    </div> */}
                    <div className="myCampReserInfo">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "0.94em",
                            }}
                        >
                            <span>숙박 예약요금</span>
                            <span style={{ fontSize: "1.25em" }}>
                                170,000원
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "0.94em",
                            }}
                        >
                            <span>할인 금액</span>
                            <span style={{ fontSize: "1.25em" }}>
                                -51,000원
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "1.25em",
                            }}
                        >
                            <span>총 결제 금액</span>
                            <span
                                style={{ fontSize: "1.25em", color: "#f24e1e" }}
                            >
                                119,000원
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CampReservationView;
