import Button from "../Form/Button";
import Icon from "../Icon/Icon";
import React, { useContext, useEffect, useState } from "react";
import ModalContext from "./ModalContext";

function ModalStore({ onClick }) {
    const { modalDetail } = useContext(ModalContext);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (modalDetail) {
            setProductName(modalDetail.productName || "");
            setPrice(modalDetail.price || 0);
        }
    }, [modalDetail]);

    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    const totalPrice = price * quantity;

    return (
        <div className="modalWrap">
            <div className="modal">
                <div>
                    <h3>{productName ? productName : "상품정보없음"}</h3>
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
                    <Button defaultBtn={false} className="btnLine">
                        장바구니
                    </Button>
                    <Button defaultBtn={true}>구매하기</Button>
                </div>
                <button onClick={onClick} className="btnCloseType1">
                    <Icon iconName="iconCloseWhite" />
                </button>
            </div>
        </div>
    );
}

export default ModalStore;
