import Button from "../Form/Button";
import Icon from "../Icon/Icon";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalStore({ onClick, productName, price }) {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    const totalPrice = price * quantity;
    return (
        <div className="modalWrap">
            <div className="modal">
                <div>
                    <h3>{productName}</h3>
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
                </div>
                <div className="btnWrap">
                    <Button defaultBtn={false} className="btnSmallLine">
                        장바구니
                    </Button>
                    <Button defaultBtn={true}>구매하기</Button>
                </div>
                <button onClick={onClick} className="btnCloseType2">
                    <Icon iconName="iconCloseWhite" />
                </button>
            </div>
        </div>
    );
}

export default ModalStore;
