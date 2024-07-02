import React from "react";
import ContentWrap from "../../components/Layout/ContentWrap";
import EventSwiper from "../../components/Store/EventSwiper";
import { Link } from "react-router-dom";

function StoreList() {
    return (
        <>
            <ContentWrap>
                <EventSwiper />
                <Link to={"/store/view"}>
                    <div>
                        <h1>별숲 리스트</h1>
                        <p>별숲 스토어</p>
                    </div>
                </Link>
            </ContentWrap>
        </>
    );
}

export default StoreList;
