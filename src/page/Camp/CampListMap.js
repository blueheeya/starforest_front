import React, { useEffect, useState } from "react";
import "../../assets/css/kakaoMap.scss"
import gps from "../../assets/images/gps.svg"
import { useNavigate } from "react-router-dom";
import mapPointerOn from '../../assets/images/mapPointer.svg'
import btnClose from "../../assets/images/btnClose.png"
import noneImage from "../../assets/images/noneImage.png"
import axios from "axios";
const host = `${process.env.REACT_APP_SERVER_URL}`;
const { kakao } = window;

let currentOverlay = null; //커스텀 오버레이상태
var imageSrc = mapPointerOn;
var imageSize = new kakao.maps.Size(40, 40);
var imageOption = { offset: new kakao.maps.Point(20, 42) }; // 마커이미지의 옵션입니다.
function CampListMap() {
    const navigate = useNavigate();
    const [map, setMap] = useState(null); //카카오 map
    const [dragMapCenter, setDragMapCenter] = useState(); //드래그시 맵 중심 좌표
    const [circles, setCircles] = useState([]); //모임 배열
    const [markers, setMarkers] = useState([]); //마커들 표시
    const [markersInitialized, setMarkersInitialized] = useState(false);
    const [clusterer, setClusterer] = useState(null);


    useEffect(() => {
        if (!map) {
            mapscript();
        } else {
            getDragLocation();
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
            const res = await axios.post(`${host}camp/coordinates`, body)
            console.log(res.data);
            setCircles(res.data)
        } catch (error) {
            console.log("mapscript axios 에러");
        }

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 클러스터러 생성
        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 7, // 클러스터 할 최소 지도 레벨
            disableClickZoom: true // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정
        });

        // 마커 클러스터러에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(clusterer, 'clusterclick', function (cluster) {

            // 현재 지도 레벨에서 1레벨 확대한 레벨
            var level = map.getLevel() - 1;

            // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
            map.setLevel(level, { anchor: cluster.getCenter() });
        });

        setClusterer(clusterer);
        setMap(map);
    };
    //드래그위치 가져오는 함수
    const getDragLocation = () => {
        // console.log("드래그 위치 시작");

        //드래그 중심좌표 얻어오는 함수
        kakao.maps.event.addListener(map, "dragend", function () {
            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();

            setDragMapCenter({ mapx: latlng.La, mapy: latlng.Ma }); //드래그 중심좌표 저장

            document.querySelector(".serchLocal").style.display = "block";
        });
    };

    //현위치에서 검색 클릭
    const findRange = async () => {
        console.log("현위치에서 검색 클릭");
        const body = dragMapCenter
        console.log(body);

        try {
            const res = await axios.post(`${host}camp/coordinates`, body)
            console.log(res.data);
            setCircles(res.data)
        } catch (error) {
            console.log("현위치 검색 axios 에러");
        }
    };

    useEffect(() => {
        initializeMarkers(map, clusterer);
    }, [markersInitialized, circles, map, clusterer]);

    //모임 마커 추가
    const initializeMarkers = (map, clusterer) => {
        // console.log("초기 마커 추가");
        if (!map || !clusterer) return;

        clearMarkers();
        const newMarkers = [];
        // console.log(circles);
        if (circles && circles.length > 0) {
            //기존 마커 배열 지도에 표시
            for (let i = 0; i < circles.length; i++) {
                let latlng = new kakao.maps.LatLng(
                    circles[i].mapY,
                    circles[i].mapX
                );
                // console.log(latlng);
                const marker = addMarker(
                    latlng,
                    map,
                    imageSrc,
                    imageSize,
                    imageOption,
                    circles[i],
                    i
                );
                newMarkers.push(marker);
            }
            setMarkers(newMarkers);
            clusterer.clear(); // 기존 클러스터 초기화
            clusterer.addMarkers(newMarkers); // 새로운 마커들 추가

        }
    };

    // 마커 제거 함수
    const clearMarkers = () => {
        if (markers) {
            markers.forEach((marker) => {
                if (marker && marker.setMap) {
                    marker.setMap(null);
                }
            });
            setMarkers([]); // markers 배열 초기화
        }
    };

    //마커 생성
    const addMarker = (
        latlng,
        map,
        imageSrc,
        imageSize,
        imageOption,
        circleData,
        index
    ) => {
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

        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 7, // 클러스터 할 최소 지도 레벨
            disableClickZoom: true // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        });
        clusterer.addMarkers(marker);

        // 마커를 클릭했을 때 커스텀 오버레이를 표시+ 지도가 이동
        kakao.maps.event.addListener(marker, "click", function () {
            if (currentOverlay) {
                currentOverlay.setMap(null);
            }

            var position = marker.getPosition();
            var moveLatLon = new kakao.maps.LatLng(position.Ma, position.La);

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.panTo(moveLatLon);

            // 커스텀 오버레이 내용을 생성합니다
            const content = createOverlayContent(circleData);

            // 마커 위에 커스텀오버레이를 표시합니다

            var overlay = new kakao.maps.CustomOverlay({
                content: content,
                clickable: true,
                map: map, //null
                position: marker.getPosition(),
            });
            currentOverlay = overlay;

            // DOM이 업데이트될 시간을 준 후에 닫기 버튼에 이벤트 리스너를 추가합니다
            setTimeout(() => {
                const closeButton = document.querySelector(".btnCloseb");
                if (closeButton) {
                    closeButton.addEventListener("click", function (event) {
                        event.stopPropagation(); // 이벤트 버블링 방지
                        overlay.setMap(null); // 오버레이를 닫습니다
                        currentOverlay = null; // 현재 오버레이 참조를 제거합니다
                    });
                } else {
                    console.log("닫기 버튼을 찾을 수 없습니다.");
                }
            }, 0);
        });
        return marker; // 마커 객체 반환
    };

    //지도 닫기 버튼
    const pageclose = () => {
        navigate("/camp/list");
    };
    // 페이지 이동 함수
    const handleOverlayClick = (circleData) => {
        navigate(`/camp/view/${circleData.id}`);
    };

    //
    // 커스텀 오버레이 내용을 생성합니다
    function createOverlayContent(circleData) {

        const wrap = document.createElement("div");
        wrap.className = "customOverlay";
        // 클릭 이벤트 추가
        wrap.style.cursor = "pointer";
        wrap.addEventListener("click", (e) => {
            // 닫기 버튼 클릭 시 이벤트 전파 방지
            if (!e.target.closest(".contentCloseBtn")) {
                handleOverlayClick(circleData);
            }
        });

        const overlayImg = document.createElement("div");
        overlayImg.className = "overlayImg";
        wrap.appendChild(overlayImg);

        const image = document.createElement('img');
        image.src = `${circleData.first_image_url ? circleData.first_image_url : noneImage}`; // 이미지 경로 설정
        image.alt = '';
        overlayImg.appendChild(image);

        const overlayContent = document.createElement("div");
        overlayContent.className = "overlayContent";
        wrap.appendChild(overlayContent);

        const overContentWrap = document.createElement("ul");
        overContentWrap.className = "overContentWrap";
        overlayContent.appendChild(overContentWrap);

        const items = [`${circleData.is_auto ? "오픈 캠핑장" : ""}${circleData.is_carvan ? "카라반" : ""}${circleData.is_glamp ? "글램핑" : ""}`, circleData.name, circleData.add1, `${circleData.price.toLocaleString('ko-KR')}원 부터`];
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            overContentWrap.appendChild(li);
        });

        const contentCloseBtn = document.createElement("div");
        contentCloseBtn.className = "contentCloseBtn";
        overlayContent.appendChild(contentCloseBtn);

        const button = document.createElement("button");
        contentCloseBtn.appendChild(button);
        button.className = "btnCloseb";

        const closeButtonImage = document.createElement("img");
        closeButtonImage.src = btnClose;
        closeButtonImage.alt = "";
        button.appendChild(closeButtonImage);

        return wrap;
    }

    return (
        <div className="mapWrap">
            {/* <button className="mapClose" onClick={() => { pageclose() }}><img src={mapClose} alt="" /></button> */}
            <div id="map" className="map">
                <button
                    className="serchLocal"
                    onClick={() => {
                        findRange();
                    }}
                >
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
