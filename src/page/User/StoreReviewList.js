import { id } from "date-fns/locale";
import React from "react";
import "../../assets/css/storeStyle.scss";
import { useLocation } from "react-router-dom";

const userReview = {
    id: 1,
    image: "imgdefault.png",
    level: "lavel lavel01",
    name: "샛별",
    user: "웅크린양과같은사나이",
    content: "리뷰리뷰리뷰리뷰리뷰리뷰",
};

function StoreReviewList() {
    const location = useLocation();
    const newReview = location.state?.newReview;
    return (
        <>
            <div>
                <h1>리뷰 리스트</h1>
                {newReview && <p>새로 추가된 리뷰: {newReview}</p>}
                {/* 기존 리뷰 리스트 렌더링 */}
            </div>
            <div>
                <div className="userReviewListProductWrap">
                    <img
                        className="userReviewListProductImg"
                        src={
                            process.env.PUBLIC_URL +
                            `/assets/images/imgdefault.png`
                        }
                        alt=""
                    />
                    <div className="userReviewListProductNames">
                        <div className="userReviewListProductBname">
                            브랜드명
                        </div>
                        <div className="userReviewListProductPname">
                            상품명 블라블라
                        </div>
                    </div>
                </div>
                <div className="userReviewListUserInFo">
                    <div key={userReview.id} className="userReviewItem">
                        <img
                            className="userReviewImg"
                            src={
                                process.env.PUBLIC_URL +
                                `/assets/images/${userReview.image}`
                            }
                            alt={`${userReview.user}의 프로필`}
                        />
                        <div className="userReviewListtextWrap">
                            <div className="userReviewListInfoWrap">
                                <div className="userReviewListUserInfo">
                                    <div className="lavel lavel01">샛별</div>
                                </div>
                                <div className="userReviewList">
                                    {userReview.user}
                                </div>
                            </div>
                            <p className="userReviewListContent">
                                {userReview.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreReviewList;
