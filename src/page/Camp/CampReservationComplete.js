import React from "react";
import iconEdit from "../../assets/images/iconEdit.svg";
import PayComplete from "../../components/Camp/PayComplete";

function CampReservationComplete() {
  const contents = {
    title: "결제가 완료 되었습니다.",
    btn1: "캠핑장 더 알아보기",
    btn2: "예약장보 확인하기",
  };

  return (
    <>
      <PayComplete contents={contents} />
    </>
  );
}

export default CampReservationComplete;
