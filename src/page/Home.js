import React from "react";
import { Link } from "react-router-dom";
import EventSwiper from "../components/Store/EventSwiper";
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
        </div>
    );
}

export default Home;
