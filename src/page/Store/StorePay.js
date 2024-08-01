import React, { useEffect, useState } from "react";
import StorePayProduct from "../../components/Store/StorePayProduct";
import StorePayUserInfo from "../../components/Store/StorePayUserInfo";
import StorePayMethod from "../../components/Store/StorePayMethod";
import CampPayMethod from "../../components/Camp/CampPayMethod"
import StorePayment from "../Store/StorePayment"
import { async } from "q";
import axios from "axios";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Footer from "../../components/Layout/Footer";

function StorePay() {
    const state = useSelector((state) => {
        return state
    })
    console.log(state.loginSlice);
    const { productId } = useParams(); //URL파라미터에서 상품ID를 찾아서 가져옴
    const [productInfo, setProductInfo] = useState()
    const [storeDeliveryInfo, setStoreDeliveryInfo] = useState()    //배송지 정보
    const [quantity, setQuantity] = useState()  //수량

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}store/get/product/${productId}`)
            setProductInfo(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleStorPayInfo = (body) => {
        setStoreDeliveryInfo(body)
    }
    const handlequantity = (quantity) => {
        setQuantity(quantity)
    }
    return (
        <>
            <StorePayProduct productInfo={productInfo} handlequantity={handlequantity} />
            <div className="storePayUser">
                <div className="payUserTitle">주문자 정보</div>
                <div className="payUserContent">
                    <div className="contentName">닉네임</div>
                    <div className="contentUserName">{state.loginSlice.nick_name}</div>
                </div>
            </div>

            <StorePayUserInfo handleStorPayInfo={handleStorPayInfo} />
            <StorePayMethod productInfo={productInfo} quantity={quantity} />
            <StorePayment productInfo={productInfo} quantity={quantity} storeDeliveryInfo={storeDeliveryInfo} />
            <Footer />
        </>
    );
}

export default StorePay;
