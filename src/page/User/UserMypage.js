import React from "react";
import ContentWrap from "../../components/Layout/ContentWrap";
import { HeaderType } from "../../components/Layout/Header";
import EventSwiper from "../../components/Store/EventSwiper";

function UserMypage() {
    return (
        <>
            <ContentWrap>
                별숲기록
                <EventSwiper />
            </ContentWrap>
        </>
    );
}

export default UserMypage;
