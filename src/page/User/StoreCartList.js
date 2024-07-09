import React, { useState } from "react";
import Icon from "../../components/Icon/Icon";
import "../../assets/css/storeStyle.scss";
import StoreCart from "../../components/Store/StoreCart";
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
        <div className="cartPriceTitle">
          <p>예상 결제 금액</p>
        </div>
        <div className="storePayment">
          <div className="totalamount">
            <p>총 상품금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </div>
          <div className="shippingFee">
            <p>배송비</p>
            <p>무료</p>
          </div>
          <div className="finalTotal">
            <p>총 주문금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreCartList;
