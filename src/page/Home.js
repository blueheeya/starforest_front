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
            <div className="titelWrap cntWarpPadding wrapMarginBottom">
                <h3>별숲 기록</h3>
                <Link to={"/store/view"}>전체보기</Link>
            </div>
            <div className="mainDiaryWrap"></div>
            {/* E : 별숲 기록 */}
            {/* S : 스토어 TOP10 */}
            <StoreTopTen className="cntMarginBottom" />
            {/* E : 스토어 TOP10 */}
        </div>
    );
}

export default Home;
