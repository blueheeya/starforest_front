import React from "react";
import CampSelectCard from "../../components/Camp/CampSelectCard";

function CampReservationView() {
    return (
        <>
            <div style={{ paddingTop: "10px" }}>
                <div className="myCampCardWrap">
                    <h4>예약 캠핑장 정보</h4>
                </div>
                <CampSelectCard isCampCard={true} className="wrapCntBottom" />
                <div className="myCampReserWrap">
                    <h4>예약 날짜</h4>
                    <div>2024.06.21 ~ 2024.06.24</div>
                </div>
                <div className="myCampReserWrap">
                    <h4>예약자 정보</h4>
                    <div className="myCampReserInfo">
                        <div>
                            <span>이름</span> 최금쪽
                        </div>
                        <div>
                            <span>연락처</span> 010-1234-5678
                        </div>
                        <div>
                            <span>요구사항</span> 좋은말로 할때 내 요구사항을 다
                            들어라!
                        </div>
                        <div>
                            <span>차량번호</span> 1234
                        </div>
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>할인 적용</h4>
                    <div></div>
                </div>
                <div className="myCampReserWrap">
                    <h4>결제 금액</h4>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default CampReservationView;
