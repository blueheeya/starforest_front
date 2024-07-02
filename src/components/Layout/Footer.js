import React from "react";

function Footer(className) {
    return (
        <div className={`footerWrap ${className}`}>
            <h2>별숲</h2>
            <ul className="customerLink">
                <li>서비스 이용 약관</li>
                <li>개인정보 처리 방침</li>
                <li>캠핑장 제휴 신청</li>
                <li>광고 제휴 문의</li>
                <li>스토어 입점 신청</li>
            </ul>
            <div className="customerInfo">
                <button>고객센터</button>
                <div>
                    <p>
                        <span>평일</span> 10:00 ~ 18:00
                    </p>
                    <p>
                        <span>점심시간</span> 13:30 ~ 14:30
                    </p>
                </div>
            </div>
            <div className="copyright">
                <p>ⓒstarforest.corp</p>
                <p>
                    (주)별숲은 통신판매 중개자이며, 통신판매의 당사자가
                    아닙니다. 따라서 (주)별숲은 상품의 예약, 이용 및 환불 등과
                    관련한 책임을 지지 않습니다.
                </p>
            </div>
        </div>
    );
}

export default Footer;
