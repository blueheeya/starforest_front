import React, { useState } from "react";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";
const regions = {
    서울: [
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중량구",
    ],
    경기남부: [
        "수원시",
        "용인시",
        "성남시",
        "부천시",
        "화성시",
        "안산시",
        "안양시",
        "평택시",
        "시흥시",
        "김포시",
        "광주시",
        "광명시",
        "군포시",
        "하남시",
        "오산시",
        "이천시",
        "안성시",
        "의왕시",
        "양평군",
        "여주시",
        "과천시",
    ],
    경기북부: [
        "고양시",
        "남양주시",
        "파주시",
        "의정부시",
        "양주시",
        "구리시",
        "포천시",
        "동두천시",
        "가평군",
        "연천군",
    ],
    인천: [
        "강화군",
        "웅진군",
        "중구",
        "동구",
        "미추홀구",
        "연수구",
        "남동구",
        "부평구",
        "계양구",
        "서구",
    ],
    강원: [
        "춘천시",
        "원주시",
        "강릉시",
        "동해시",
        "태백시",
        "속초시",
        "삼척시",
        "홍천군",
        "횡성군",
        "영월군",
        "평창군",
        "정선군",
        "철원군",
        "화천군",
        "양구군",
        "인재군",
        "고성군",
        "양양군",
    ],
    대전: ["유성구", "대덕구", "서구", "중구", "동구"],
    세종: ["세종시"],
    충북: [
        "청주시",
        "흥덕구",
        "충주시",
        "상당구",
        "청원구",
        "서원구",
        "제천시",
        "음성군",
        "진천군",
        "옥천군",
        "영동군",
        "증평군",
        "괴산군",
        "보은군",
        "단양군",
    ],
    충남: [
        "천안시",
        "공주시",
        "보령시",
        "아산시",
        "서산시",
        "논산시",
        "계룡시",
        "당진시",
        "금산군",
        "부여군",
        "서천군",
        "청양군",
        "홍천군",
        "예산군",
        "태안군",
    ],
    경북: [
        "포항시",
        "경주시",
        "안동시",
        "김천시",
        "구미시",
        "영주시",
        "영천시",
        "상주시",
        "문경시",
        "경산시",
        "의성군",
        "청송군",
        "영양군",
        "영덕군",
        "청도군",
        "고령군",
        "성주군",
        "칠곡군",
        "예천군",
        "봉화군",
        "울진군",
        "울릉군",
    ],
    경남: [
        "창원시",
        "진주시",
        "김해시",
        "양산시",
        "거제시",
        "통영시",
        "사천시",
        "밀양시",
        "의령군",
        "함안군",
        "창녕군",
        "고성군",
        "남해군",
        "하동군",
        "산청군",
        "함양군",
        "거창군",
        "합천군",
    ],
    부산: [
        "강서구",
        "금정구",
        "기장군",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "북구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
    ],
    대구: [
        "중구",
        "동구",
        "서구",
        "남구",
        "북구",
        "수성구",
        "달서구",
        "달성군",
        "군위군",
    ],
    울산: ["중구", "남구", "동구", "북구", "울주군"],
    전남: [
        "목포시",
        "여수시",
        "순천시",
        "나주시",
        "광양시",
        "담양군",
        "곡성군",
        "구례군",
        "고흥군",
        "보성군",
        "화순군",
        "장흥군",
        "영암군",
        "무안군",
        "함평군",
        "영광군",
        "장성군",
        "완도군",
        "진도군",
        "신안군",
    ],
    전북: [
        "전주시",
        "익산시",
        "군산시",
        "정읍시",
        "김제시",
        "남원시",
        "완주군",
        "고창군",
        "부안군",
        "임실군",
        "순창군",
        "진안군",
        "무주군",
        "장수군",
    ],
    제주: ["제주시", "서귀포시"],
    // 필요한 만큼 더 추가할 수 있습니다.
};
function ModalResions({ onClick }) {
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleCityClick = (city) => {
        setSelectedCity(city);
        setSelectedDistrict("");
    };

    const handleDistrictClick = (district) => {
        setSelectedDistrict(district);
    };

    return (
        <div className="modalWrap">
            <div className="modal">
                <div className="modal_Content">
                    <h2>지역선택</h2>
                    <div className="regionSelector">
                        <div className="cityGroup">
                            {Object.keys(regions).map((city) => (
                                <button
                                    key={city}
                                    onClick={() => handleCityClick(city)}
                                    className={
                                        selectedCity === city ? "active" : ""
                                    }
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                        <div className="cityWrap">
                            {selectedCity && (
                                <div className="cityGroup2">
                                    {regions[selectedCity].map((district) => (
                                        <button
                                            key={district}
                                            onClick={() =>
                                                handleDistrictClick(district)
                                            }
                                            className={
                                                selectedDistrict === district
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {district}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="selectedRegion">
                        {selectedDistrict && (
                            <>
                                선택된 지역: {selectedCity} {selectedDistrict}
                            </>
                        )}
                    </div>
                    <Button defaultBtn={true}>확인</Button>
                </div>
                <button onClick={onClick} className="btnCloseType1">
                    <Icon iconName="iconCloseWhite" />
                </button>
            </div>
        </div>
    );
}

export default ModalResions;
