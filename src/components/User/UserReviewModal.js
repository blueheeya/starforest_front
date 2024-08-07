import React, { useEffect, useState } from "react";
import "../../assets/css/storeStyle.scss";
import Icon from "../Icon/Icon";
import Overlay from "../Store/Overlay";
import { Navigate, useNavigate } from "react-router-dom";

const UserReviewModal = ({ isOpen, onClose, onSubmit, handleReviewSubmit }) => {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [isClose, setIsClose] = useState(false);

  const navigate = useNavigate();

  //모달 상태에 따라 body overflow관리부분
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".userReviewModalContainer").style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "auto"; //스크롤 활성화
    }
    return () => {
      document.body.style.overflow = "auto"; //컴포넌트 닫힐 때 스크롤 활성화
    };
  }, [isOpen]);

    //   const handleSubmit = () => {
    //     onSubmit();
    //     onClose();
    //   };

  const handleSubmit = () => {
    if (review.trim() === "") {
      setError("내용을 입력해주세요!!!!!");
    } else {
      setError("");
      if (typeof onSubmit === "function") {
        handleReviewSubmit();
        setIsClose(true); //리뷰작성완료상태로 변경
        navigate("/user/store/review/list");
      } else {
        console.error("onSubmit is not a function");
      }
    }
  };

  // const handleReviewSubmit = () => {
  //   setIsClose(true);
  //   setIsReviewSubmitted(true);
  //   console.log("review submitted:", review);
  // };

  if (!isOpen) return null;
    return (
        <>
            <div className="userReviewModalContainer">
                <Overlay isOpen={isOpen} onClose={onClose} />
                <div className="userReviewModalContent">
                    <div className="userReviewModalClose">
                        <button
                            className="userReviewModalCloseBtn"
                            onClick={onClose}
                        >
                            <Icon iconName="iconClose" />
                        </button>
                    </div>
                    <div className="userReviewModalProduct">
                        <img
                            className="userReviewProductImg"
                            src={
                                process.env.PUBLIC_URL +
                                `/assets/images/imgdefault.png`
                            }
                            alt=""
                        />
                        <div className="userReviewModalProductInner">
                            <div className="userReviewModalProductBname">
                                브랜드명
                            </div>
                            <div className="userReviewModalProductPname">
                                상품명 블라블라
                            </div>
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
                        <div className="userReviewBtn1">
                            <button
                                className="submitBtn1"
                                onClick={handleSubmit}
                            >
                                등록
                            </button>
                        </div>
                        <div className="userReviewBtn2">
                            <button
                                className="submitBtn2"
                                onClick={handleSubmit}
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReviewModal;
