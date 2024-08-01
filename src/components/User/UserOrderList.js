import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function UserOrderList() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "상품1", price: 10000, quantity: 1, selected: false },
    { id: 2, name: "상품2", price: 10000, quantity: 1, selected: false },
  ]);

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const userOderViewMove = () => {
    navigate(`/user/store/order/view`);
  };

  return (
    <>
      <div className="userOrderBox">
        <div className="userOrderInner">
          <div className="useOrderDateWrap">
            <div className="userOrderDate">2024.06.24</div>
            <div className="OrderListMove">
              <button className="listMoveBtn" onClick={userOderViewMove}>
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
              <span className="userOrderTitle ">[나이키] </span>
              <span className="userOrderinnerEx"> 배송상품</span>
            </div>
            <div className="userOrderinnerMain">
              <img className="userOrderinnerMainImg" src="../../" alt="" />
              <div className="userOrderinnerMainContent">
                <div className="userOrdercontentName">나이키</div>
                <div className="userOrdercontentBrand">블루샤크</div>
              </div>
              <div className="userOrderStateBox">주문완료</div>
            </div>
            <div className="userOrderPriceWrap">
              <div className="userOrderNum">
                <div>총수량 :</div>
                {/* <div>{quantity}</div> */}
                <div>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </div>
              </div>
              <div className="userOrderPrice">
                <div className="userOrderpriceSpan">30,000원</div>
                <div className="userOrderpriceMain">10,000원</div>
              </div>
            </div>
          </div>
        </div>
        <div className="userOrderTotalWrap">
          <div className="userOrderTotalcontent">
            <div className="userOrderTotalTitle">총 주문 금액</div>
            <div className="userOrderPrice">10,000원</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserOrderList;
