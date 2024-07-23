import React, { useState } from "react";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";

function ModalReview({ onClick, onClose, onSubmit }) {
    const [review, setReview] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = () => {
        if (review.trim() === "") {
            setError("내용을 입력해주세요!");
        } else {
            setError("");
            onSubmit(review); // onSubmit 함수 호출 (소문자 's'로 수정)
            onClose();
        }
    };
    return (
        <div className="modalWrap">
            <div className="modal">
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
                    <Button defaultBtn={true} onClick={handleSubmit}>
                        등록
                    </Button>
                    <Button
                        defaultBtn={false}
                        className="btnLine"
                        onClick={onClick}
                    >
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
