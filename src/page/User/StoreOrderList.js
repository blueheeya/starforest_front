import React from "react";
import UserOrderCard from "../../components/User/UserOrderList";
import Icon from "../../components/Icon/Icon";
import UserOrderList from "../../components/User/UserOrderList";

function StoreOrderList() {
  return (
    <div className="userOrderListWrap">
      <div className="userOrderInfo">
        <div className="userOrderListWrap">
          <UserOrderList />
        </div>
        <div className="userOrderListWrap">
          <UserOrderList />
        </div>
      </div>
    </div>
  );
}

export default StoreOrderList;
