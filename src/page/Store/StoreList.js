import React from "react";
import { Link } from "react-router-dom";
import EventSwiper from "../../components/Store/EventSwiper";

function StoreList() {
    return (
        <>
            <EventSwiper />
            <Link to={"/store/view"}>
                <div>
                    <h1>별숲 리스트</h1>
                    <p>별숲 스토어</p>
                </div>
            </Link>
        </>
    );
}

export default StoreList;
