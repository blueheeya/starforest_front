import React, { useEffect, useState } from "react";
import UserOrderCard from "../../components/User/UserOrderList";
import Icon from "../../components/Icon/Icon";
import UserOrderList from "../../components/User/UserOrderList";
import axiosInstance from "../../utils/axios";
import axios from "axios";
import { useSelector } from "react-redux";
const host = `${process.env.REACT_APP_SERVER_URL}`;


function StoreOrderList() {
  const [orderList, setOrderList] = useState()
  const email = useSelector((state) => {
    return state.loginSlice.email
  })

  useEffect(() => {
    getAllOrderList();
  }, []);

  const getAllOrderList = async () => {
    try {
      const res = await axios.get(`${host}user/store/order/list/${email}`);
      setOrderList(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="userOrderListWrap">
      <div className="userOrderInfo">
        <div className="userOrderListWrap">
          <UserOrderList orderList={orderList} />
        </div>
      </div>
    </div>
  );
}

export default StoreOrderList;
