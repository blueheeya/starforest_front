import React from 'react'
import Naver from "../../assets/images/naverLogo.png"
import kakao from "../../assets/images/kakaoLogo.png"
import axios from 'axios';
import CampReservationComplete from '../../page/Camp/CampReservationComplete';
import { Route, Routes } from 'react-router-dom';

function CampPayMethod({ reservationInfo, campInfo, totalPrice, reservId }) {
    // console.log(campInfo);
    // console.log(reservationInfo);   //예약자 정보
    const body = { ...campInfo, ...reservationInfo, totalPrice }
    console.log(body);
    const handleKakaoPayment = async () => {
        try {
            //예약자 정보랑 상품이름 필요
            const res = await axios.post(`http://localhost:8080/camp/kakaoPay/${reservId}`, body);
            // 카카오페이 결제 페이지로 리다이렉트
            console.log(res.data);
            console.log("결제 시도!!!!!!");
            window.location.href = res.data.next_redirect_pc_url;
        } catch (error) {
            console.error('결제 요청 중 오류 발생:', error);
        }
    }

    return (
        <>
            <div className="campPayMethod">
                <div className="methodName">결제 방법</div>
                <div className="methodKind">
                    <button className="kakao" onClick={handleKakaoPayment}>
                        <img src={kakao} alt="" />
                        <div>카카오 pay</div>
                    </button>
                    <button className="naver">
                        <img src={Naver} alt="" />
                        <div>네이버 pay</div>
                    </button>
                </div>
            </div>

        </>
    )
}

export default CampPayMethod