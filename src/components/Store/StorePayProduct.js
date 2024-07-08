import React from 'react'
import btnMinus from "../../assets/images/btnPlusMinus.svg"
import btnPlus from "../../assets/images/btnPlusMinus-1.svg"

function StorePayProduct() {
    return (
        <div className="storePayBox">
            <div className="storePayInner">
                <div className="innerTitleEx">
                    <span className="innerTitle">나이키</span>
                    <span className="innerEx">배송상품</span>
                </div>
                <div className="innerMain">
                    <img className="innerMainImg" src="" alt="" />
                    <div className="innerMainContent">
                        <div className="contentName">나이키</div>
                        <div className="contentBrand">블루샤크</div>
                    </div>
                </div>

                <div className="innerCount">
                    <div className="innerPlusMinus">
                        <button>
                            <img src={btnMinus} alt="" />
                        </button>
                        <div>2</div>
                        <button>
                            <img src={btnPlus} alt="" />
                        </button>
                    </div>
                    <div className="innerPrice">
                        <div className="priceSpan">30,000원</div>
                        <div className="priceMain">
                            10,000원
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorePayProduct