import React, { useEffect, useState } from "react";
import CampPayInput from "../../components/Camp/CampPayInput";
import CampPayMethod from "../../components/Camp/CampPayMethod";
import axios from "axios";
import { useParams } from "react-router-dom";

function CampReservationPay() {
  const [reservationInfo, setReservationInfo] = useState()
  const [campInfo, setCampInfo] = useState()
  const discount = campInfo?.price * 0.3
  const totalPrice = campInfo?.price - discount
  const { id, reservId } = useParams()
  const reservInfo = (body) => {
    setReservationInfo(body)
  }
  useEffect(() => {
    getReservation()
  }, [])

  const getReservation = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}camp/reservation/infos/${id}`)
      setCampInfo(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="campPayPage">
        <CampPayInput reservInfo={reservInfo} />

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
              <div className="campPrice">{campInfo?.price.toLocaleString()}원</div>
            </div>
            <div className="moneyContent">
              <div className="mContentName1">할인금액</div>
              <div className="disprice">-{discount.toLocaleString()}원</div>
            </div>
            <div className="moneyContent">
              <div className="mContentName2">총 결제금액</div>
              <div className="resultPrice">
                <div className="resultMainPirce">{totalPrice.toLocaleString()}원</div>
              </div>
            </div>
          </div>
        </div>

        <CampPayMethod reservationInfo={reservationInfo} campInfo={campInfo} totalPrice={totalPrice} reservId={reservId} />
      </div>
    </>
  );
}

export default CampReservationPay;
