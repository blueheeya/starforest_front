import React, { useState } from "react";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";
import axiosInstance from "../../utils/axios";

function ModalReview({ onClick, onSubmit }) {
  // onClick 제거, onClose와 onSubmit만 사용
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  // const handleSubmit = () => {
  //   if (review.trim() === "") {
  //     setError("내용을 입력해주세요!");
  //   } else {
  //     setError("");
  //     if (typeof onSubmit === "function") {
  //       onSubmit(review);
  //     } else {
  //       console.error("onSubmit is not a function");
  //     }
  //     onClick();
  //   }
  // };

  const handleSubmit = async () => {
    if (review.trim() === "") {
      setError("내용을 입력해주세요!");
      return;
    }

    setError("");

    try {
      console.log("Review axios태웁니다~~~~~~~~~~~~");
      const res = await axiosInstance.post("/store/review", {
        content: review,
      });
      console.log(res.data);
      if (typeof onSubmit === "function") {
        onSubmit(review);
      } else {
        console.error("onSubmit is not a function");
      }
      onClick(); // 모달 닫기
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("리뷰 제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="modalWrap">
      <div className="modal">
        <div className="userReviewModalProduct">
          <img
            className="userReviewProductImg"
            src={process.env.PUBLIC_URL + `/assets/images/imgdefault.png`}
            alt=""
          />
          <div className="userReviewModalProductInner">
            <div className="userReviewModalProductBname">브랜드명</div>
            <div className="userReviewModalProductPname">상품명 블라블라</div>
          </div>
        </div>
        <div className="userReviewModalInputWrap">
          <div className="userReviewModalInfoBox">
            <div className="lavel lavel01">샛별</div>
            <span className="userOrderNickname">닉네임</span>
          </div>
          <div className="userReviewModalBody">
            <input
              className="userReviewModalInput"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="리뷰를 입력해주세요 (0/50)"
              maxLength={50}
            />
            {error && <div className="error">{error}</div>}
          </div>
        </div>
        <div className="userReviewBtnWrap">
          <Button defaultBtn={true} onClick={handleSubmit}>
            등록
          </Button>
          <Button defaultBtn={false} className="btnLine" onClick={onClick}>
            취소
          </Button>
        </div>
        <button onClick={onClick} className="btnCloseType1">
          <Icon iconName="iconCloseWhite" />
        </button>
      </div>
    </div>
  );
}

export default ModalReview;
