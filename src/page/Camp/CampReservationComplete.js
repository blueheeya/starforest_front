import React, { useEffect, useState } from "react";
import iconEdit from "../../assets/images/iconEdit.svg";
import PayComplete from "../../components/Camp/PayComplete";
import axios from "axios";
import { useParams } from "react-router-dom";

function CampReservationComplete() {
  const { reservNum, reservId, name, carNum, request, tel } = useParams()
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
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}camp/kakaoPaySuccess/${pgToken}/${reservNum}/${reservId}/${name}/${carNum}/${request}/${tel}`);
        setPaymentInfo(response.data);
        console.log(response.data);
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
