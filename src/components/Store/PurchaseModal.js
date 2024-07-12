import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/storeStyle.scss";
import Icon from "../Icon/Icon";

const PurchaseModal = ({ isOpen, onClose, productName, price }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const totalPrice = price * quantity;

  const handleCartClick = () => {
    onClose(); //모달닫고 링크로이동
    navigate("/user/store/cart/list");
  };

  const handlePurchaseClick = () => {
    onClose();
    navigate("/store/pay");
  };

  const closeModal = () => {
    onClose();
  };

  return (
    // <div className={`modalOverlay ${isOpen ? "open" : ""}`}>
    <div className="modalContent">
      <div className="modalClose">
        <h3>{productName}</h3>
        <button className="closeModalBtn" onClick={closeModal}>
          <Icon iconName="iconClose" />
        </button>
      </div>
      <div className="modalNumWrap">
        <div className="modalNumSelector">
          <button onClick={decreaseQuantity}>
            <Icon iconName="iconMinus" />
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={increaseQuantity}>
            <Icon iconName="iconPlus" />
          </button>
        </div>
      </div>
      <div className="priceInfo">
        <span>총 상품금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
      <div className="deliveryInfo">
        <span>배송비</span>
        <span>무료배송</span>
      </div>
      <div className="buttonGroup">
        <button className="cartBtn" onClick={handleCartClick}>
          장바구니
        </button>
        <button className="purchaseBtn" onClick={handlePurchaseClick}>
          구매하기
        </button>
      </div>
    </div>
    // </div>
  );
};

export default PurchaseModal;
