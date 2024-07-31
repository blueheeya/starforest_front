import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/storeStyle.scss";
import Icon from "../Icon/Icon";
import Overlay from "./Overlay";
import axiosInstance from "../../utils/axios";
import axios from "axios";

const host = `${process.env.REACT_APP_SERVER_URL}`;

const PurchaseModal = ({ isOpen, onClose, productName, price, productId }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      //document.querySelector(".modalContainer").style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const totalPrice = price * quantity;

  // 수량을 서버로 전송하는 함수
  const sendQuantityToServer = async () => {
    try {
      const quantityData = {
        product_id: productId, // 실제 상품 ID
        quantity: quantity, // 설정한 수량
      };
      // 서버로 수량 전송
      const response = await axios.post(`${host}store/view`, quantityData);
      console.log("Quantity updated", response.data);
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };
  // 장바구니에 추가하기
  const handleCartClick = async () => {
    await sendQuantityToServer(); // 수량을 서버로 전송
    onClose(); // 모달 닫기
    navigate("/user/store/cart/list"); // 장바구니 페이지로 이동
  };
  // 구매하기
  const handlePurchaseClick = async () => {
    await sendQuantityToServer(); // 수량을 서버로 전송
    onClose(); // 모달 닫기
    navigate("/store/pay"); // 구매 페이지로 이동
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      <div className="modalContainer">
        {/* <Overlay isOpen={isOpen} onClose={closeModal} /> */}
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
      </div>
    </>
  );
};

export default PurchaseModal;
