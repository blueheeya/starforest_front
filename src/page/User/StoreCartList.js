import React, { useState } from "react";
import Icon from "../../components/Icon/Icon";
import "../../assets/css/storeStyle.scss";
import StoreCart from "../../components/Store/StoreCart";
import StorePayMethod from "../../components/Store/StorePayMethod";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Navigate, useNavigate } from "react-router-dom";
function StoreCartList() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "상품1", price: 10000, quantity: 1, selected: false },
    { id: 2, name: "상품2", price: 10000, quantity: 1, selected: false },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const selectedCount = cartItems.filter((item) => item.selected).length;

  const navigate = useNavigate();

  const handlePurchaseClick = () => {
    navigate("/store/pay");
  };

  return (
    <div className="storeCart">
      <div className="cartProductWrap">
        {cartItems.map((item) => (
          <StoreCart
            className="cartProduct"
            key={item.id}
            item={item}
            onUpdateQuantity={(newQuantity) =>
              updateQuantity(item.id, newQuantity)
            }
          />
        ))}
      </div>
      <div className="cartPriceWrap">
        <StorePayMethod />
      </div>
      <div className="storeCartBtnWrap">
        <div className="storeCartBtn">
          <button className="storeCartBtn" onClick={handlePurchaseClick}>
            주문하기
          </button>
        </div>
      </div>
      <div>
        <StoreTopTen />
      </div>
    </div>
  );
}

export default StoreCartList;
