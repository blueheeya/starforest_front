import React, { useEffect, useState } from "react";
import "../../assets/css/kakaoMap.scss"
import gps from "../../assets/images/gps.svg"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import mapPointerOn from '../../assets/images/mapPointer.svg'
import btnClose from "../../assets/images/btnClose.png"
import noneImage from "../../assets/images/noneImage.png"

const { kakao } = window;

let currentOverlay = null;//커스텀 오버레이상태
var imageSrc = mapPointerOn;
var imageSize = new kakao.maps.Size(40, 40);
var imageOption = { offset: new kakao.maps.Point(20, 42) }; // 마커이미지의 옵션입니다.
function CampViewMap() {
    const { id } = useParams()
    const [map, setMap] = useState(null); //카카오 map
    const [campItem, setCampItem] = useState()
    const [markers, setMarkers] = useState([]); //마커들 표시



    useEffect(() => {
        if (!map) {
            mapscript();
        }
    }, [map]);

    //초기 카카오 맵 설정
    const mapscript = async () => {
        // console.log("mapscript시작");
        const body = { mapx: 127.4947241, mapy: 37.5978864 }
        var mapContainer = document.getElementById("map"),
            mapOption = {
                center: new kakao.maps.LatLng(body.mapy, body.mapx), // 지도의 중심좌표
                level: 9, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
            };
        const map = new kakao.maps.Map(mapContainer, mapOption);

        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}camp/view/map/${id}`)
            console.log(res.data);
            setCampItem(res.data)
        } catch (error) {
            console.log("mapscript axios 에러");
        }

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        setMap(map);
    };

    useEffect(() => {
        initializeMarkers(map);
    }, [map]);

    //모임 마커 추가
    const initializeMarkers = (map) => {
        // console.log("초기 마커 추가");
        if (!map) return;

        if (campItem) {

            var mapContainer = document.getElementById("map"),
                mapOption = {
                    center: new kakao.maps.LatLng(campItem.mapy, campItem.mapx), // 지도의 중심좌표
                    level: 9, // 지도의 확대 레벨
                    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
                };
            const map = new kakao.maps.Map(mapContainer, mapOption);

            let latlng = new kakao.maps.LatLng(
                campItem.mapy,
                campItem.mapx
            )
            const marker = addMarker(latlng, map, imageSrc, imageSize, imageOption)
            //기존 마커 배열 지도에 표시

            setMarkers(marker);
        }
    };

    //마커 생성
    const addMarker = (latlng, map, imageSrc, imageSize, imageOption) => {
        if (!map) return;

        console.log("마커 생성(addMarker)");
        // console.log(i);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
        );
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: latlng, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
        });

        // 마커를 클릭했을 때 커스텀 오버레이를 표시+ 지도가 이동
        kakao.maps.event.addListener(marker, 'click', function () {

            if (currentOverlay) {
                currentOverlay.setMap(null);
            }

            var position = marker.getPosition();
            var moveLatLon = new kakao.maps.LatLng(position.Ma, position.La);

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.panTo(moveLatLon);

        });
        return marker; // 마커 객체 반환
    };

    return (
        <div className="mapWrap">
            <div id="map" className="map">

            </div>
        </div>
    );
}

export default CampViewMap;
