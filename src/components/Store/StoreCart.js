import React from "react";
import Icon from "../Icon/Icon";

function StoreCart({ item, onUpdateQuantity, onDeleteItem }) {
  const decreaseQuantity = () => {
    onUpdateQuantity(item.id, Math.max(1, item.quantity - 1));
  };

  const increaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="storePayBox userCart">
      <div className="storePayInner">
        <div className="innerTitleEx deleteUserCart">
          <div className="innerProduct">
            <span className="innerTitle ">[나이키]</span>
            <span className="innerEx">배송상품</span>
          </div>
          <div className="deleteCartBtnBox">
            <button
              className="reviewCloseBtn"
              onClick={() => onDeleteItem(item.id)}
            >
              <Icon iconName="iconClose" />
            </button>
          </div>
        </div>
        <div className="innerMain">
          <img className="innerMainImg" src="../../" alt="" />
          <div className="innerMainContent">
            <div className="contentName">나이키</div>
            <div className="contentBrand">블루샤크</div>
          </div>
        </div>

        <div className="innerCount">
          <div className="innerPlusMinus">
            <button onClick={decreaseQuantity}>
              <Icon iconName="iconMinus" />
            </button>
            <div>{item.quantity}</div>
            <button onClick={increaseQuantity}>
              <Icon iconName="iconPlus" />
            </button>
          </div>
          <div className="innerPrice">
            <div className="priceSpan">30,000원</div>
            <div className="priceMain">10,000원</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreCart;
