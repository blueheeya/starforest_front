import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import UserReviewModal from "../../components/User/UserReviewModal";
import Icon from "../../components/Icon/Icon";
import ModalContext from "../../components/Modal/ModalContext";
import ModalReview from "../../components/Modal/ModalReview";

function StoreOrderView() {
  const [quantity, setQuantity] = useState(1);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false); // 리뷰 제출 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태
  const { modalOpen } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    modalOpen(0); // ModalStore를 여는 예시
  };
  const handleReviewSubmit = (review) => {
    setIsReviewSubmitted(true); // 리뷰가 제출되면 상태 변경
    setIsModalOpen(false); // 모달 닫기
    navigate("/user/store/review/list");
    console.log("review submitted:", review);
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
                <button
                  className="OrderViewState1 orderReviewCompleteBtn"
                  disabled
                >
                  <Icon iconName="iconReviewComplete" />
                  리뷰 작성 완료
                </button>
              ) : (
                <>
                  <button
                    className="OrderViewState2 orderReviewWriteBtn"
                    onClick={handleButtonClick}
                  >
                    <Icon iconName="iconReviewWrite" />
                    리뷰 작성하기
                    <Icon iconName="iconGo" />
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="OrderViewProduct">
            <div className="OrderViewinnerMain">
              <div className="oderViewImg">
                <img src="../../" alt="" />
              </div>
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
              <div> {quantity}</div>
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
    </>
  );
}
export default StoreOrderView;
