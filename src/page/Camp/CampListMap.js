import React, { useEffect, useState } from "react";
import "../../assets/css/kakaoMap.scss"
import mapClose from "../../assets/images/mapClose.svg"
import gps from "../../assets/images/gps.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { kakao } = window;
function CampListMap() {
    const navigate = useNavigate()
    const [map, setMap] = useState(null); //카카오 map
    const [dragMapCenter, setDragMapCenter] = useState(); //드래그시 맵 중심 좌표


    useEffect(() => {
        if (!map) {
            mapscript();
        } else {
            getDragLocation()
        }
    }, [map]);

    //초기 카카오 맵 설정
    const mapscript = () => {
        console.log("mapscript시작");
        var mapContainer = document.getElementById("map"),
            mapOption = {
                center: new kakao.maps.LatLng(37.4800384, 126.8842496), // 지도의 중심좌표
                level: 5, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
            };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        setMap(map);
    };

    //드래그위치 가져오는 함수
    const getDragLocation = () => {
        console.log("드래그 위치 시작");

        //드래그 중심좌표 얻어오는 함수
        kakao.maps.event.addListener(map, "dragend", function () {

            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();

            setDragMapCenter([latlng.Ma, latlng.La]); //드래그 중심좌표 저장

            document.querySelector(".serchLocal").style.display = "block";
        });
    };

    const findRange = async () => {
        console.log("현위치에서 검색 클릭");
        const body = dragMapCenter

        try {
            // const res = await axios.post("/", body)
        } catch (error) {
            console.log("현위치 검색 axios 에러");
        }
    }

    //지도 닫기 버튼
    const pageclose = () => {
        navigate("/camp/list")
    }

    return (
        <div className="mapWrap">
            <button className="mapClose" onClick={() => { pageclose() }}><img src={mapClose} alt="" /></button>
            <div id="map" className="map">
                <button className="serchLocal" onClick={() => { findRange() }}>
                    <div className="localInner">
                        <img src={gps} alt="" />
                        <div>현위치에서 검색</div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default CampListMap;
