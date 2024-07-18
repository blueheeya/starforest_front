import React from "react";
import Calender from "../../components/Camp/Calendar";
import CampSelectCard from "../../components/Camp/CampSelectCard";

function CampReservation() {
    return (
        <>
            <CampSelectCard
                isCampCard={true}
                isLink={"/camp/view/1"}
                className="wrapCntBottom"
            />
            <Calender />
        </>
    );
}

export default CampReservation;
