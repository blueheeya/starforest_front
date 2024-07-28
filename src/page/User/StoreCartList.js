import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import "../../assets/css/storeStyle.scss";
import StoreCart from "../../components/Store/StoreCart";
import StorePayMethod from "../../components/Store/StorePayMethod";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
function StoreCartList() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "상품1", total_price: 10000, quantity: 1, selected: false },
    { id: 2, name: "상품2", total_price: 10000, quantity: 1, selected: false },
  ]);

  useEffect(() => {
    //장바구니데이터서버에서 가져오기
    const fetchCartItems = async () => {
      try {
        const res = await axiosInstance.get("/store/cart/list");
        setCartItems(res.data);
      } catch (error) {
        console.error("Error fatching CartList", error);
      }
    };
    fetchCartItems();
  }, []);

  //장바구니 상품 수량 업데이트
  const updateQuantity = async (id, newQuantity) => {
    try {
      //수량을 변경할 장바구니 항목의 ID
      await axiosInstance.patch(`/store/cart/list/${id}`, {
        quantity: newQuantity,
      }); //수량업데이트
      //장바구니항목배열을순회 / 항목의 id가 업데이트항목의 id와 일치하면 항목의 수량을 newQuantity로 변경
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  //장바구니 항목의 총가격과 선택된 항목의 개수 계산 부분
  const totalPrice = cartItems.reduce(
    //sum:현재까지집계된 총가격으로 초기값:0, price*quantity한값을 sum에 넣어줌
    (sum, item) => sum + item.total_priceprice * item.quantity,
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
