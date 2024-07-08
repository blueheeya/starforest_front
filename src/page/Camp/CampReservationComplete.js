import React from "react";
import iconEdit from "../../assets/images/iconEdit.svg";

function CampReservationComplete() {
  return (
    <>
      <div>
        <div>
          <div className="completeContent">결제가 완료 되었습니다.</div>
          <div className="completeBtn">
            <div className="completeBtnAll">
              <button className="completeInner">
                <img src={iconEdit} alt="" />
                <div>캠핑장 더 알아보기</div>
              </button>
            </div>
            <div className="completeBtnAll">
              <button className="completeInner">
                <img src={iconEdit} alt="" />
                <div>예약장보 확인하기</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampReservationComplete;
