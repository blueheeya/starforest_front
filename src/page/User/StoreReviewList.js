import React, { useState, useEffect } from "react";
import "../../assets/css/storeStyle.scss";
import { useLocation } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
// import axiosInstance from "../../utils/axios";
import axios from "axios";

function StoreReviewList() {
  const location = useLocation();
  const newReview = location.state?.newReview;

  //   const [reviews, setReviews] = useState([
  //     {
  //       id: 1,
  //       image: "imgdefault.png",
  //       level: "lavel lavel01",
  //       name: "샛별",
  //       user: "웅크린양과같은사나이",
  //       content: "리뷰리뷰리뷰리뷰리뷰리뷰",
  //     },
  //   ]);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/store/review");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching Reviews", error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (newReview) {
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          id: prevReviews.length + 1, // 고유 ID 생성
          image: "imgdefault.png",
          level: "lavel lavel01",
          name: "샛별",
          user: "새로운 사용자",
          content: newReview,
        },
      ]);
    }
  }, [newReview]); // newReview가 변경될 때만 실행

  //   const handleDelete = (id) => {
  //     setReviews((prevReviews) => {
  //       return prevReviews.filter((review) => review.id !== id);
  //     });
  //   };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/store/review/${id}`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      );
    } catch (error) {
      console.error("Error deleting Review", error);
    }
  };

  return (
    <>
      <div className="userReviewListContainer">
        {/* 기존 리뷰 리스트 렌더링 */}
      </div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="useReviewListContainerInner">
            <div className="userReviewListProductWrap">
              <img
                className="userReviewListProductImg"
                src={process.env.PUBLIC_URL + `/assets/images/${review.image}`}
                alt=""
              />
              <div className="useReviewListBtnWrap">
                <div className="userReviewListProductNames">
                  <div className="userReviewListProductBname">브랜드명</div>
                  <div className="userReviewListProductPname">
                    상품명 블라블라
                  </div>
                </div>
                <div
                  className="userReviewListCloseBtn"
                  onClick={() => handleDelete(review.id)}
                >
                  <Icon iconName="iconClose" />
                </div>
              </div>
            </div>
            <div className="userReviewListUserInFo">
              <div className="userReviewItem">
                <img
                  className="userReviewImg"
                  src={
                    process.env.PUBLIC_URL + `/assets/images/${review.image}`
                  }
                  alt={`${review.user}의 프로필`}
                />
                <div className="userReviewListtextWrap">
                  <div className="userReviewListInfoWrap">
                    <div className="userReviewListUserInfo">
                      <div className={review.level}>{review.name}</div>
                    </div>
                    <div className="userReviewList">{review.user}</div>
                  </div>
                  <p className="userReviewListContent">{review.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </>
  );
}

export default StoreReviewList;
