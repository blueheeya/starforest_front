import React from "react";
import EventSwiper from "../../components/Store/EventSwiper";
import UserCard from "../../components/User/UserCard";

function UserMypage() {
    return (
        <>
            <UserCard className="cntMarginTop cntMarginBottom" />
            <EventSwiper />
        </>
    );
}

export default UserMypage;
