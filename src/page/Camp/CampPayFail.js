import React from "react";
import PayComplete from "../../components/Camp/PayComplete";

function CampPayFail() {
  const contents = {
    title: "결제가 완료되지 않았습니다.",
    btn1: "캠핑장 다시보기",
    btn2: "별숲 페이지로",
    url1: "/camp/list",
    url2: "/",
  };

  return (
    <>
      <PayComplete contents={contents} />
    </>
  );
}

export default CampPayFail;
