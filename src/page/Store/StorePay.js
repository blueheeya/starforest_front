import React from "react";
import StorePayProduct from "../../components/Store/StorePayProduct";
import StorePayUserInfo from "../../components/Store/StorePayUserInfo";
import StorePayMethod from "../../components/Store/StorePayMethod";
import CampPayMethod from "../../components/Camp/CampPayMethod"

function StorePay() {
    return (
        <>
            <StorePayProduct />
            <StorePayProduct />

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
