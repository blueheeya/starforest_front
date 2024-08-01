import React, { useEffect } from "react";
import PayComplete from "../../components/Camp/PayComplete";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function StorePayComplete() {
  const contents = {
    title: "결제가 완료 되었습니다.",
    btn1: "쇼핑 계속하기",
    btn2: "주문내역 확인하기",
  };
  const email = useSelector((state) => {
    return state.loginSlice.email
  })
  const { productId, orderId, totalPrice, tel, name, add, addDetail } = useParams()
  const body = { productId, orderId, totalPrice, tel, name, add, addDetail, email }
  console.log(body);
  useEffect(() => {
    saveOrderTable()
  }, [])

  const saveOrderTable = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pgToken = urlParams.get('pg_token');
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}store/kakaoPaySuccess/${pgToken}`, body)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <PayComplete contents={contents} />
    </>
  );
}

export default StorePayComplete;
