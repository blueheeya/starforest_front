import React from "react";
import ContentWrap from "../components/Layout/ContentWrap";
import EventSwiper from "../components/Store/EventSwiper";
import { Link } from "react-router-dom";
import StoreTopTen from "../components/Store/StoreTopTen";

function Home() {
    const campCategory = [
        { name: "전체", img: "", link: "/camp/list" },
        { name: "오토캠핑장", img: "", link: "/camp/list" },
        { name: "글램핑", img: "", link: "/camp/list" },
        { name: "카라반", img: "", link: "/camp/list" },
    ];
    return (
        <div>
            <ContentWrap>
                <EventSwiper />
                <div>
                    <ul>
                        {campCategory.map((categore, index) => {
                            return (
                                <Link key={index} to={categore.link}>
                                    <li>
                                        <img src={categore.img} />
                                        <span>{categore.name}</span>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
                <StoreTopTen />
            </ContentWrap>
        </div>
    );
}

export default Home;
