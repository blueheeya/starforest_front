import React, { useEffect, useState } from "react";
import StorePayProduct from "../../components/Store/StorePayProduct";
import StorePayUserInfo from "../../components/Store/StorePayUserInfo";
import StorePayMethod from "../../components/Store/StorePayMethod";
import CampPayMethod from "../../components/Camp/CampPayMethod"
import { async } from "q";
import axios from "axios";
import { useParams } from "react-router";

function StorePay() {
    const { productId } = useParams(); //URL파라미터에서 상품ID를 찾아서 가져옴
    const [productInfo, setProductInfo] = useState()

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

    return (
        <>
            <StorePayProduct productInfo={productInfo} />
            <div className="storePayUser">
                <div className="payUserTitle">주문자 정보</div>
                <div className="payUserContent">
                    <div className="contentName">주문자명</div>
                    <div className="contentUserName">김조배</div>
                </div>
            </div>

            <StorePayUserInfo />
            <StorePayMethod />
            <CampPayMethod />
        </>
    );
}

export default StorePay;
