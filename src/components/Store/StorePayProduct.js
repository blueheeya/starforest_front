import React, { useState } from "react";
import Icon from "../Icon/Icon";

function StorePayProduct({ productInfo }) {
  console.log(productInfo);
  const [quantity, setQuantity] = useState(1);



  const payPrice = productInfo?.price * quantity
  const orignPrice = (Math.floor(productInfo?.price / 0.7 / 1000) * 1000) * quantity


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
          <img className="innerMainImg" src={productInfo?.imgUrls} alt="" />
          <div className="innerMainContent">
            <div className="contentName">{productInfo?.brand_name}</div>
            <div className="contentBrand">{productInfo?.product_name}</div>
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
            <div className="priceSpan">{orignPrice.toLocaleString()}원</div>
            <div className="priceMain">{payPrice.toLocaleString()}원</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePayProduct;
