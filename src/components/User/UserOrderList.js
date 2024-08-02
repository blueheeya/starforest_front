import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const host = `${process.env.REACT_APP_SERVER_URL}`;

function UserOrderList() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "상품1", price: 10000, quantity: 1, selected: false },
    { id: 2, name: "상품2", price: 10000, quantity: 1, selected: false },
  ]);

  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await axios.get(`${host}user/store/order/list`);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching order list", error);
      }
    };

    fetchOrderList();
  }, []);

  const userOderViewMove = (orderId) => {
    navigate(`/user/store/order/view/${orderId}`);
  };

  return (
    <>
      <div className="userOrderBox">
        {orders.map((order) => (
          <div className="userOrderInner" key={order.id}>
            <div className="useOrderDateWrap">
              <div className="userOrderDate">{order.date}</div>
              <div className="OrderListMove">
                <button
                  className="listMoveBtn"
                  onClick={userOderViewMove(order.id)}
                >
                  {/* <Link to="/user/store/order/view"> */}
                  {/* <button className="listMoveBtn"> */}
                  주문 상세보기
                  <Icon iconName="iconGo" />
                </button>
                {/* </Link> */}
              </div>
            </div>
            <div className="userOrderTitle">
              <div className="userOrderProduct">
                <span className="userOrderTitle ">[{order.productName}] </span>
                <span className="userOrderinnerEx"> 배송상품</span>
              </div>
              <div className="userOrderinnerMain">
                {/* <img className="userOrderinnerMainImg" src="../../" alt="" /> */}
                <img
                  className="userOrderinnerMainImg"
                  src={order.imageUrl}
                  alt={order.productName}
                />
                <div className="userOrderinnerMainContent">
                  {/* <div className="userOrdercontentName">나이키</div> */}
                  <div className="userOrdercontentName">
                    {order.productName}
                  </div>
                  {/* <div className="userOrdercontentBrand">블루샤크</div> */}
                  <div className="userOrdercontentBrand">{order.brand}</div>
                </div>
                <div className="userOrderStateBox">주문완료</div>
              </div>
              <div className="userOrderPriceWrap">
                <div className="userOrderNum">
                  <div>총수량 :</div>
                  {/* <div>{order.quantity}</div> */}
                  <div>{order.quantity}</div>
                  <div>
                    {cartItems.reduce((acc, item) => acc + order.quantity, 0)}
                  </div>
                </div>
                <div className="userOrderPrice">
                  {/* <div className="userOrderpriceSpan">30,000원</div> */}
                  <div className="userOrderpriceSpan">{order.totalPrice}원</div>
                  {/* <div className="userOrderpriceMain">10,000원</div> */}
                  <div className="userOrderpriceMain">{order.unitPrice}원</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="userOrderTotalWrap">
          <div className="userOrderTotalcontent">
            <div className="userOrderTotalTitle">총 주문 금액</div>
            {/* <div className="userOrderPrice">10,000원</div> */}
            {orders.reduce((acc, order) => acc + order.totalPrice, 0)}원
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderList;
