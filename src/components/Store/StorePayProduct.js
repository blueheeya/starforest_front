import React, { useState } from "react";
import Icon from "../Icon/Icon";

function StorePayProduct() {
  const [quantity, setQuantity] = useState(0);

  //마이너스, 최소수량
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, quantity - 1));
  };

  //플러스
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => quantity + 1);
  };
  return (
    <div className="storePayBox">
      <div className="storePayInner">
        <div className="innerTitleEx">
          <span className="innerTitle">나이키</span>
          <span className="innerEx">배송상품</span>
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
            {/* <button>
              <img src={btnMinus} alt="" />
            </button> */}
            <button onClick={decreaseQuantity}>
              {/* <iconMinus /> */}
              <Icon iconName="iconMinus" />
            </button>
            <div>{quantity}</div>
            {/* <button>
              <img src={btnPlus} alt="" />
            </button> */}
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

export default StorePayProduct;
