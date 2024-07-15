import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import UserReviewModal from "../../components/User/UserReviewModal";
import Icon from "../../components/Icon/Icon";

function StoreOrderView(useNavigate) {
  const [quantity, setQuantity] = useState(1);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false); // 리뷰 제출 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태

  const handleReviewSubmit = () => {
    setIsReviewSubmitted(true); // 리뷰가 제출되면 상태 변경
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <div className="OrderViewBox">
        <div className="OrderViewInner">
          <div className="OrderViewDateWrap">
            <div className="userOrderDate">2024.06.24</div>
            <div className="OrderViewNum">주문번호 : bkbh12345</div>
          </div>
        </div>
        <div className="OrderViewTitle">
          <div className="OrderViewProductWrap">
            <div className="OrderViewProduct1">
              <span className="OrderViewTitle ">[나이키] </span>
              <span className="OrderViewinnerEx"> 배송상품</span>
            </div>
            <div className="OrderViewReviewState">
              {isReviewSubmitted ? (
                <div className="OrderViewState1">
                  <Icon iconName="iconReviewComplete" />
                  <button className="orderReviewCompleteBtn" disabled>
                    리뷰 작성 완료
                  </button>
                </div>
              ) : (
                <div className="OrderViewState2">
                  <Icon iconName="iconReviewWrite" />
                  <button
                    className="orderReviewWriteBtn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    리뷰 작성하기
                  </button>
                  <Icon iconName="iconGo" />
                </div>
              )}
            </div>
          </div>
          <div className="OrderViewProduct">
            <div className="OrderViewinnerMain">
              <img className="OrderViewinnerMainImg" src="../../" alt="" />
              <div className="OrderViewinnerMainContent">
                <div className="OrderViewcontentName">나이키</div>
                <div className="OrderViewcontentBrand">블루샤크</div>
              </div>
            </div>
            <div className="OrderViewStateBox">주문완료</div>
          </div>
          <div className="OrderViewPriceWrap">
            <div className="OrderViewNum">
              <div>총수량 :</div>
              <div>{quantity}</div>
            </div>
            <div className="OrderViewPrice">
              <div className="OrderViewpriceSpan">30,000원</div>
              <div className="OrderViewpriceMain">10,000원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="OrderViewTotalWrap">
        <div className="OrderViewTotalcontent">
          <div className="OrderViewTotalTitle">총 주문 금액</div>
          <div className="OrderViewPrice">10,000원</div>
        </div>
      </div>
      <UserReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
}
export default StoreOrderView;
