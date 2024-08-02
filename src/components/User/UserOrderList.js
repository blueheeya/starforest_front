import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const host = `${process.env.REACT_APP_SERVER_URL}`;

function UserOrderList({ orderList }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "상품1", price: 10000, quantity: 1, selected: false },
    { id: 2, name: "상품2", price: 10000, quantity: 1, selected: false },
  ]);

  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const userOderViewMove = (productId) => {
    navigate(`/user/store/order/view/${productId}`);
  };
  const filteredOrderList = Array.isArray(orderList)
    ? orderList.filter((item) => item.product !== null)
    : [];
  console.log(filteredOrderList);
  return (
    <>
      {filteredOrderList.map((item, idx) => {
        return (
          <div key={idx} className="userOrderBox">
            <div className="userOrderInner">
              <div className="useOrderDateWrap">
                <div className="userOrderDate">
                  {item?.created_at[0]}.{item?.created_at[1]}.
                  {item?.created_at[2]}
                </div>
                <div className="OrderListMove">
                  <button
                    className="listMoveBtn"
                    onClick={() => {
                      userOderViewMove(item?.productId);
                    }}
                  >
                    리뷰 작성하기
                    <Icon iconName="iconGo" />
                  </button>
                </div>
              </div>
              <div className="userOrderTitle">
                <div className="userOrderProduct">
                  <span className="userOrderTitle ">[{item?.brandName}] </span>
                  <span className="userOrderinnerEx"> 배송상품</span>
                </div>
                <div className="userOrderinnerMain">
                  <img
                    className="userOrderinnerMainImg"
                    src={item?.imageUrl}
                    alt=""
                  />
                  <div className="userOrderinnerMainContent">
                    <div className="userOrdercontentName">
                      {item?.brandName}
                    </div>
                    <div className="userOrdercontentBrand">
                      {item?.productName}
                    </div>
                  </div>
                  <div className="userOrderStateBox">주문완료</div>
                </div>
                <div className="userOrderPriceWrap">
                  <div className="userOrderNum">
                    <div>총수량 :</div>
                    <div>{Math.floor(item?.totalPrice / item.price)}</div>
                  </div>
                  <div className="userOrderPrice">
                    <div className="userOrderpriceMain">
                      {item?.price?.toLocaleString()}원
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="userOrderTotalWrap">
              <div className="userOrderTotalcontent">
                <div className="userOrderTotalTitle">총 주문 금액</div>
                <div className="userOrderPrice">
                  {item?.totalPrice?.toLocaleString()}원
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserOrderList;
