import React, { useEffect, useState } from "react";
import "../../assets/css/kakaoMap.scss"
import mapClose from "../../assets/images/mapClose.svg"
import gps from "../../assets/images/gps.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mapPointerOn from '../../assets/images/mapPointer.svg'
import mapPointerOff from '../../assets/images/mapPointer1.svg'
import btnClose from "../../assets/images/btnClose.png"

const { kakao } = window;
var imageSrc = mapPointerOn;
var imageSize = new kakao.maps.Size(40, 40);
var imageOption = { offset: new kakao.maps.Point(20, 42) }; // 마커이미지의 옵션입니다.
function CampListMap() {
    const navigate = useNavigate()
    const [map, setMap] = useState(null); //카카오 map
    const [dragMapCenter, setDragMapCenter] = useState(); //드래그시 맵 중심 좌표
    const [circles, setCircles] = useState([
        { name: "힐링피아 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 1111 61-75", mapX: 127.4947241, mapY: 37.5978864 },
        { name: "1111 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 2222 61-75", mapX: 126.6806875, mapY: 37.3241008 },
        { name: "2222 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 3333 61-75", mapX: 127.455147, mapY: 37.50762979 },
        { name: "3333 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 4444 61-75", mapX: 127.4947099, mapY: 37.6012926 },
        { name: "4444 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 5555 61-75", mapX: 127.5124645, mapY: 37.7467558 },
        { name: "5555 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 6666 61-75", mapX: 126.9161565, mapY: 37.25773423 },
        { name: "6666 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 7777 61-75", mapX: 127.1889864, mapY: 37.9617314 },
        { name: "7777 카라반 글램핑 풀 캠핑장", "addr1": "경기 가평군 설악면 8888 61-75", mapX: 127.5140734, mapY: 37.8552141 },
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
        console.log("mapscript시작");
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
        console.log("드래그 위치 시작");

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
        console.log("초기 마커 추가");
        console.log(circles);

        clearMarkers();
        const newMarkers = [];
        console.log(circles);
        if (circles && circles.length > 0) {
            //기존 마커 배열 지도에 표시
            for (let i = 0; i < circles.length; i++) {
                let latlng = new kakao.maps.LatLng(
                    circles[i].mapY,
                    circles[i].mapX
                );
                console.log(latlng);
                const marker = addMarker(latlng, map, imageSrc, imageSize, imageOption, circles);
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
    const addMarker = (latlng, map, imageSrc, imageSize, imageOption, circles) => {
        if (!map) return;
        console.log("마커 생성(addMarker)");
        console.log(circles);
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

        var content = `
        <div className="wrap">
            <div className="info">
                <div className="title">
                    카카오 스페이스닷원
                    <div className="close" title="닫기">닫기</div>
                </div>
                <div className="body">
                    <div className="img">
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">
                    </div>
                    <div className="desc">
                        <div className="ellipsis">제주특별자치도 제주시 첨단로 242</div>
                        <div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
                        <div><a href="https://www.kakaocorp.com/main" target="_blank" className="link">홈페이지</a></div>
                    </div>
                </div>
            </div>
        </div>`;

        // 마커 위에 커스텀오버레이를 표시합니다
        var overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: map,//null
            position: marker.getPosition()
        });


        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
        function closeOverlay(overlay) {
            overlay.setMap(null);
        }



        // 마커를 클릭했을 때 커스텀 오버레이를 표시+ 지도가 이동
        kakao.maps.event.addListener(marker, 'click', function () {

            var position = marker.getPosition();
            var moveLatLon = new kakao.maps.LatLng(position.Ma, position.La);

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.panTo(moveLatLon);

            // 오버레이가 지도에 추가된 후 닫기 버튼에 이벤트 리스너를 추가합니다
            setTimeout(() => {
                const closeButton = document.querySelector(".close");
                if (closeButton) {
                    closeButton.addEventListener("click", function (event) {
                        event.stopPropagation(); // 이벤트 버블링 방지
                        overlay.setMap(null);  // 오버레이를 닫습니다
                    });
                }

                const customOverlay = document.querySelector(".wrap");
                if (customOverlay) {
                    customOverlay.style.opacity = 1;
                }
            }, 0);

        });

        console.log("마커 생성 완료");
        return marker; // 마커 객체 반환
    };

    //커스텀 오버레이 닫기 버튼
    const overlayClose = () => {
        document.querySelector(".customOverlay").style.opacity = 0
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
