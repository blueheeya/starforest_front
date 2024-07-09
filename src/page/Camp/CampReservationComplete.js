import React, { useEffect, useState } from "react";
import iconEdit from "../../assets/images/iconEdit.svg";
import PayComplete from "../../components/Camp/PayComplete";
import axios from "axios";

function CampReservationComplete() {

  const contents = {
    title: "결제가 완료 되었습니다.",
    btn1: "캠핑장 더 알아보기",
    btn2: "예약장보 확인하기",
  };

  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pgToken = urlParams.get('pg_token');
      console.log("pg토큰 : " + pgToken);
      try {
        const response = await axios.get(`http://localhost:8082/kakaoPaySuccess?pg_token=${pgToken}`);
        setPaymentInfo(response.data);
      } catch (error) {
        console.error('결제 정보 조회 중 오류 발생:', error);
      }
    };

    fetchPaymentInfo();
  }, []);

  return (
    <>
      <PayComplete contents={contents} />
    </>
  );
}

export default CampReservationComplete;
