import React from "react";
import CampSite from "../../components/Camp/CampGavisDate";
import CampListCard from "../../components/Camp/CampListCard";

function CampList({ campItem }) {
    return (
        <>
            <div>
                <div className="campViewWrap">전체 :{CampSite.length}개</div>
                <CampListCard campItem={campItem} />
            </div>
        </>
    );
}

export default CampList;
