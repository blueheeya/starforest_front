import React, { useEffect } from "react";
import UserOrderCard from "../../components/User/UserOrderList";
import Icon from "../../components/Icon/Icon";
import UserOrderList from "../../components/User/UserOrderList";
import axiosInstance from "../../utils/axios";
import axios from "axios";
const host = `${process.env.REACT_APP_SERVER_URL}`;

function StoreOrderList() {
  useEffect(() => {
    getAllOrderList();
  }, []);

  const getAllOrderList = async () => {
    try {
      const res = await axios.get(`${host}user/store/order/list`);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="userOrderListWrap">
      <div className="userOrderInfo">
        <div className="userOrderListWrap">
          <UserOrderList />
        </div>
      </div>
    </div>
  );
}

export default StoreOrderList;
