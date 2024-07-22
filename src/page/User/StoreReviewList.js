import React, { useState } from "react";
import "../../assets/css/storeStyle.scss";
import Icon from "../../components/Icon/Icon";
import { useReviews } from "../../components/User/ReviewContext";

const initialReviews = [
  {
    id: 1,
    image: "imgdefault.png",
    level: "샛별",
    user: "웅크린양과같은사나이",
    content: "리뷰리뷰리뷰리뷰리뷰리뷰",
  },
];

function StoreReviewList() {
  // const [reviews, setReviews] = useState(initialReviews);
  const { reviews, setReviews } = useReviews();

  const handleDelete = (id) => {
    setReviews(reviews.filter((reviews) => reviews.id !== id));
  };

  return (
    <div className="userReviewListContainerTop">
      <div className="userReviewListContainer">
        <div className="userReviewListProductWrap">
          <img
            className="userReviewListProductImg"
            src={process.env.PUBLIC_URL + `/assets/images/imgdefault.png`}
            alt=""
          />
          <div className="userReviewListProductNamesWrap">
            <div className="userReviewListProductNames">
              <div className="userReviewListProductBname">브랜드명</div>
              <div className="userReviewListProductPname">상품명 블라블라</div>
            </div>
            <button
              className="reviewCloseBtn"
              onClick={() => handleDelete(reviews.id)}
            >
              <Icon iconName="iconClose" />
            </button>
          </div>
        </div>
        {reviews.map((review) => (
          <div key={review.id} className="userReviewListUserInFo">
            <div className="userReviewItem">
              <img
                className="userReviewImg"
                src={process.env.PUBLIC_URL + `/assets/images/${review.image}`}
                alt={`${review.user}의 프로필`}
              />
              <div className="userReviewListtextWrap">
                <div className="userReviewListInfoWrap">
                  <div className="userReviewListUserLevel">
                    <div className={review.level}>
                      {" "}
                      <div className="lavel lavel01">샛별</div>
                    </div>
                    <div className="userReviewListUserName">{review.user}</div>
                  </div>
                </div>
                <p className="userReviewListContent">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreReviewList;
