import React, { useContext, useState } from "react";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";
import axios from "../../utils/axios";
import { ModalContext } from "./ModalContext";

const host = `${process.env.REACT_APP_SERVER_URL}`;
function ModalReview({ onClick, onSubmit, data }) {
  // onClick 제거, onClose와 onSubmit만 사용
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const { modalState, closeModal } = useContext(ModalContext);


  //유니크한ID생성부분
  const generateUniQueId = () => {
    //Math.random(): 0,1사이의 무작위 실수생성 / toString(36):생성된실수를36진수문자열로 변환
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = async () => {
    if (review.trim() === "") {
      setError("내용을 입력해주세요!");
      return;
    }

    setError("");

    const reviewData = {
      created_at: new Date().toISOString(), // 생성 시간을 ISO 형식의 문자열로
      id: generateUniQueId(), // 리뷰 ID 생성
      productid: modalState.data.productId, // 전달된 productId 사용
      userid: modalState.data.userEmail, // 전달된 userEmail 사용
      content: review,
    };

    // 리뷰 제출 로직
    try {

      await axios.post(`${host}store/review`, reviewData);
      closeModal(); // 모달 닫기
//       const reviewData = {
//         created_at: new Date().toISOString(), //생성시간을ISO형식의문자열로
//         id: generateUniQueId(), //리뷰ID생성
//         // productid: product_id, //product_id를 props로 받아옴
//         // content: review,
//         // userid: user_id, //user_id도 props로 받아옴
//       };
//       console.log("Review axios태웁니다~~~~~~~~~~~~");
//       console.log(reviewData);
//       const res = await axios.post(`${host}store/review`, reviewData);
//       console.log(res.data);
//       if (typeof onSubmit === "function") {
//         onSubmit(review);
//       } else {
//         console.error("onSubmit is not a function");
//       }
//       onClick(); // 모달 닫기

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
          <Button defaultBtn={false} className="btnLine" onClick={closeModal}>
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
