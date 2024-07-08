import React from 'react'
import Naver from "../../assets/images/naverLogo.png"
import kakao from "../../assets/images/kakaoLogo.png"

function CampPayMethod() {
    return (
        <div className="campPayMethod">
            <div className="methodName">결제 방법</div>
            <div className="methodKind">
                <button className="kakao">
                    <img src={kakao} alt="" />
                    <div>카카오 pay</div>
                </button>
                <button className="naver">
                    <img src={Naver} alt="" />
                    <div>네이버 pay</div>
                </button>
            </div>
        </div>
    )
}

export default CampPayMethod