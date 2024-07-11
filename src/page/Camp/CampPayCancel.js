import React from "react";
import PayComplete from "../../components/Camp/PayComplete";

function CampPayCancel() {
  const contents = {
    title: "결제가 취소되었습니다.",
    btn1: "쇼핑 계속하기",
    btn2: "주문내역 확인하기",
  };
  return (
    <>
      <PayComplete contents={contents} />
    </>
  );
}

export default CampPayCancel;
