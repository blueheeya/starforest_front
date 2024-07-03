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
            <ul className="mainCampClass">
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
            <div className="campIcon  iconAnimal">adafsadfsdfads</div>
            <div className="campIcon  iconAround">adafsadfsdfads</div>
            {/* S : 스토어 TOP10 */}
            <StoreTopTen />
            {/* E : 스토어 TOP10 */}
        </div>
    );
}

export default Home;
