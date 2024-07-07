import React from "react";
import CampPayInput from "../../components/Camp/CampPayInput";

function CampReservationPay() {
  return (
    <>
      <div className="campPayPage">
        <CampPayInput />

        <div className="campPaySale">
          <div className="saleTitle">할인 적용</div>
          <div className="saleContent">
            <div className="contentName">샛별 등급</div>
            <div className="contentSale">30% 할인</div>
          </div>
        </div>

        <div className="campPayMoney">
          <div className="payMoneyTitle">결제금액</div>
          <div className="payMoneyContent">
            <div className="moneyContent">
              <div className="mContentName1">숙박 예약요금</div>
              <div className="campPrice">10,000원</div>
            </div>
            <div className="moneyContent">
              <div className="mContentName1">할인금액</div>
              <div className="disprice">-10,000원</div>
            </div>
            <div className="moneyContent">
              <div className="mContentName2">총 결제금액</div>
              <div className="resultPrice">
                <div className="resultSpan">10,000원</div>
                <div className="resultMainPirce">10.000원</div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default CampReservationPay;
