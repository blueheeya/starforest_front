import React from "react";
import { Link } from "react-router-dom";
import EventSwiper from "../components/Store/EventSwiper";
import StoreTopTen from "../components/Store/StoreTopTen";

function Home() {
    const campCategory = [
        { name: "전체", img: "campClass1", link: "/camp/list" },
        { name: "오토캠핑장", img: "campClass2", link: "/camp/list" },
        { name: "글램핑", img: "campClass3", link: "/camp/list" },
        { name: "카라반", img: "campClass4", link: "/camp/list" },
    ];
    return (
        <div>
            {/* S : 이벤트 배너 */}
            <EventSwiper className="cntMarginBottom" />
            {/* E : 이벤트 배너 */}
            {/* S : 캠핑장 분류 */}
            <ul className="mainCampClass cntMarginBottom">
                {campCategory.map((categore, index) => {
                    return (
                        <Link key={index} to={categore.link}>
                            <li>
                                <i
                                    className={`campClassIcon ${categore.img}`}
                                ></i>
                                <span>{categore.name}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
            {/* E : 캠핑장 분류 */}
            {/* S : 별숲 기록 */}
            <div className="titleWrap cntWarpPadding wrapMarginBottom">
                <h3>별숲 기록</h3>
                <Link to={"/diary/list"}>전체보기</Link>
            </div>
            <div className="mainDiaryWrap cntMarginBottom">
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100022/thumb/thumb_1000_1951PqxoI4xcWV1H8S7ObIOI.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            오늘 무지하게 더운 폭염의 날씨로 다녀왔습니다
                            수영장이 있어 시원하게 열을 식힐 수 있어 살았습니다
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">청춘캠핑장</li>
                    </ul>
                </div>
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100037/thumb/thumb_1000_4141f8czHDvisxLFFm7tfQSi.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            시설 깨끗하고 아이들 놀거리가 많아요 ^^
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">캠프고일리</li>
                    </ul>
                </div>
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100071/thumb/thumb_1000_0316wW36oNqIOrZ7NzTj5tyU.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            시설 깨끗하고 아이들 놀거리가 많아요 ^^
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">민트 글램핑</li>
                    </ul>
                </div>
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100231/thumb/thumb_1000_0717a6jFX1ozzDcJDKOUS3Um.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            시설 깨끗하고 아이들 놀거리가 많아요 ^^
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">가평 리오카라반</li>
                    </ul>
                </div>
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100143/thumb/thumb_1000_0490bsfbyJIEE1TFPS7osURc.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            시설 깨끗하고 아이들 놀거리가 많아요 ^^
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">포천 라온글램핑&오토캠핑장</li>
                    </ul>
                </div>
                <div className="mainDiaryCard">
                    <div className="imgWrap">
                        <img src="https://gocamping.or.kr/upload/camp/100002/thumb/thumb_1000_0484mazXwrDEB6n2oVnMVsll.jpg" />
                    </div>
                    <ul className="textWrap">
                        <li className="textTitle">
                            시설 깨끗하고 아이들 놀거리가 많아요 ^^
                        </li>
                        <li className="textDate">오늘</li>
                        <li className="textCamp">
                            힐링피아 카라반 글램핑 풀 캠핑장
                        </li>
                    </ul>
                </div>
            </div>
            {/* E : 별숲 기록 */}
            {/* S : 스토어 TOP10 */}
            <StoreTopTen className="cntMarginBottom" />
            {/* E : 스토어 TOP10 */}
        </div>
    );
}

export default Home;
