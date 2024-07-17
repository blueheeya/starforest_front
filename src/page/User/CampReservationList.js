import React from "react";

function CampReservationList() {
    return (
        <>
            <div className="myCampNoteWrap">
                <h4>유의사항</h4>
                <p>&#8729; 예약번호 유출에 주의해 주세요.</p>
                <p>&#8729; 당일 예약 취소는 불가합니다.</p>
            </div>
            <div className="mycampReserWrap">
                <div className="myCampDate">
                    <span>2024.06.15</span>
                    <span>예약번호 akdlasdfjaskldkasd00</span>
                </div>
                <div className="myCampInfo">
                    <div className="myCampImg">이미지</div>
                    <div className="myCampInfoText">
                        <div>예약상황</div>
                        <ul>
                            <li>오토캠핑</li>
                            <li>캠프하다</li>
                            <li>24.06.28(수) ~ 24.06.29(목)</li>
                        </ul>
                        <div>별숲기록</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampReservationList;
