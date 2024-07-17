import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/kakaoMap.scss"
import mapClose from "../../assets/images/mapClose.svg"
import gps from "../../assets/images/gps.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mapPointerOn from '../../assets/images/mapPointer.svg'
import mapPointerOff from '../../assets/images/mapPointer1.svg'
import btnClose from "../../assets/images/btnClose.png"


const { kakao } = window;

let currentOverlay = null;//커스텀 오버레이상태
var imageSrc = mapPointerOn;
var imageSize = new kakao.maps.Size(40, 40);
var imageOption = { offset: new kakao.maps.Point(20, 42) }; // 마커이미지의 옵션입니다.
function CampListMap() {
    const navigate = useNavigate()
    const [map, setMap] = useState(null); //카카오 map
    const [dragMapCenter, setDragMapCenter] = useState(); //드래그시 맵 중심 좌표
    const [circles, setCircles] = useState([
        { name: "힐링피아 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 1111 61-75", mapX: 127.4947241, mapY: 37.5978864 },
        { name: "1111 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 2222 61-75", mapX: 126.6806875, mapY: 37.3241008 },
        { name: "2222 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 3333 61-75", mapX: 127.455147, mapY: 37.50762979 },
        { name: "3333 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 4444 61-75", mapX: 127.4947099, mapY: 37.6012926 },
        { name: "4444 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 5555 61-75", mapX: 127.5124645, mapY: 37.7467558 },
        { name: "5555 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 6666 61-75", mapX: 126.9161565, mapY: 37.25773423 },
        { name: "6666 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 7777 61-75", mapX: 127.1889864, mapY: 37.9617314 },
        { name: "7777 카라반 글램핑 풀 캠핑장", addr1: "경기 가평군 설악면 8888 61-75", mapX: 127.5140734, mapY: 37.8552141 },
    ]); //모임 배열
    const [markers, setMarkers] = useState([]); //마커들 표시
    const [markersInitialized, setMarkersInitialized] = useState(false);

    useEffect(() => {
        if (!map) {
            mapscript();
        } else {
            getDragLocation()
        }
    }, [map]);

    //초기 카카오 맵 설정
    const mapscript = () => {
        // console.log("mapscript시작");
        var mapContainer = document.getElementById("map"),
            mapOption = {
                center: new kakao.maps.LatLng(37.5978864, 127.4947241), // 지도의 중심좌표
                level: 4, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
            };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        setMap(map);
    };

    //드래그위치 가져오는 함수
    const getDragLocation = () => {
        // console.log("드래그 위치 시작");

        //드래그 중심좌표 얻어오는 함수
        kakao.maps.event.addListener(map, "dragend", function () {

            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();

            setDragMapCenter([latlng.Ma, latlng.La]); //드래그 중심좌표 저장

            document.querySelector(".serchLocal").style.display = "block";
        });
    };

    //현위치에서 검색 클릭
    const findRange = async () => {
        console.log("현위치에서 검색 클릭");
        const body = dragMapCenter

        try {
            // const res = await axios.post("/", body)
        } catch (error) {
            console.log("현위치 검색 axios 에러");
        }
    }

    useEffect(() => {
        initializeMarkers(map);
    }, [markersInitialized, circles, map]);

    //모임 마커 추가
    const initializeMarkers = (map) => {
        // console.log("초기 마커 추가");
        // console.log(circles);

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
                const marker = addMarker(latlng, map, imageSrc, imageSize, imageOption, circles[i], i);
                newMarkers.push(marker);
            }
            setMarkers(newMarkers);
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
    const addMarker = (latlng, map, imageSrc, imageSize, imageOption, circleData, index) => {
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
        // // 커스텀 오버레이 내용을 생성합니다
        // createOverlayContent(circleData)

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

            // 커스텀 오버레이 내용을 생성합니다
            const content = createOverlayContent(circleData);

            // 마커 위에 커스텀오버레이를 표시합니다

            var overlay = new kakao.maps.CustomOverlay({
                content: content,
                clickable: true,
                map: map,//null
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
        navigate("/camp/list")
    }
    // 페이지 이동 함수
    const handleOverlayClick = (circleData) => {
        navigate(`/detail/${circleData.name}`); // 적절한 url로 수정 필요
    };


    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // 커스텀 오버레이 내용을 생성합니다
    function createOverlayContent(circleData) {

        const wrap = document.createElement('div');
        wrap.className = 'customOverlay';
        // 클릭 이벤트 추가
        wrap.style.cursor = 'pointer';
        wrap.addEventListener('click', (e) => {
            // 닫기 버튼 클릭 시 이벤트 전파 방지
            if (!e.target.closest('.contentCloseBtn')) {
                handleOverlayClick(circleData);
            }
        });

        const overlayImg = document.createElement('div');
        overlayImg.className = 'overlayImg';
        wrap.appendChild(overlayImg);

        const image = document.createElement('img');
        image.src = ''; // 이미지 경로 설정
        image.alt = '';
        overlayImg.appendChild(image);

        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlayContent';
        wrap.appendChild(overlayContent);

        const overContentWrap = document.createElement('ul');
        overContentWrap.className = 'overContentWrap';
        overlayContent.appendChild(overContentWrap);

        const items = ['오픈 캠핑장', circleData.name, circleData.addr1, '50,000원 부터'];
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            overContentWrap.appendChild(li);
        });

        const contentCloseBtn = document.createElement('div');
        contentCloseBtn.className = 'contentCloseBtn';
        overlayContent.appendChild(contentCloseBtn);

        const button = document.createElement('button');
        contentCloseBtn.appendChild(button);
        button.className = 'btnCloseb'

        const closeButtonImage = document.createElement('img');
        closeButtonImage.src = btnClose;
        closeButtonImage.alt = '';
        button.appendChild(closeButtonImage);

        return wrap;
    }

    return (
        <div className="mapWrap">
            {/* <button className="mapClose" onClick={() => { pageclose() }}><img src={mapClose} alt="" /></button> */}
            <div id="map" className="map">
                <button className="serchLocal" onClick={() => { findRange() }}>
                    <div className="localInner">
                        <img src={gps} alt="" />
                        <div>현위치에서 검색</div>
                    </div>
                </button>
                {/* 커스텀 오버레이 */}
                {/* <div className="customOverlay">
                    <div className="overlayImg">
                        <img src="" alt="" />
                    </div>
                    <div className="overlayContent">
                        <ul className="overContentWrap">
                            <li>오픈 캠핑장</li>
                            <li>충북카누캠핑장</li>
                            <li>충북 충주시 동량면 지등로</li>
                            <li>50,000원 부터</li>
                        </ul>
                        <div className="contentCloseBtn">
                            <button>
                                <img src={btnClose} onClick={() => { overlayClose() }} alt="" />
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default CampListMap;
