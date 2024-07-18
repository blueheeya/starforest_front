import React from "react";
import CampSelectCard from "../../components/Camp/CampSelectCard";

function CampReservationView() {
    return (
        <>
            <div style={{ paddingTop: "10px" }}>
                <div className="mycampReserWrap">
                    <h4>예약 캠핑장 정보</h4>
                    <div>
                        <CampSelectCard />
                    </div>
                </div>
                <div className="mycampReserWrap">
                    <h4>예약 날짜</h4>
                    <div></div>
                </div>
                <div className="mycampReserWrap">
                    <h4>이용 인원</h4>
                    <div></div>
                </div>
                <div className="mycampReserWrap">
                    <h4>할인 적용</h4>
                    <div></div>
                </div>
                <div className="mycampReserWrap">
                    <h4>결제 금액</h4>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default CampReservationView;
