import React, { useState, useEffect } from "react";
import "../../assets/css/storeStyle.scss";
import { useLocation } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
// import axiosInstance from "../../utils/axios";
import axios from "axios";
import { useSelector } from "react-redux";

function StoreReviewList() {
  const location = useLocation();
  const newReview = location.state?.newReview;
  const [reviews, setReviews] = useState([]);
  const host = `${process.env.REACT_APP_SERVER_URL}`;
  const email = useSelector((state) => {
    return state.loginSlice.email;
  });
  console.log(email);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${host}user/store/review/list/${email}`
        );
        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching Reviews", error);
      }
    };
    fetchReviews();
  }, []);

  const handleDelete = (idToDelete) => {
    setReviews((prevReviews) => {
      prevReviews.filter((review) => review.id !== idToDelete);
    });
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${host}store/review/${id}`);
  //     setReviews((prevReviews) =>
  //       prevReviews.filter((review) => review.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting Review", error);
  //   }
  // };

  return (
    <>
      <div className="userReviewListContainer">
        {/* 기존 리뷰 리스트 렌더링 */}
        {reviews.length > 0 ? (
          reviews?.map((review, idx) => (
            <div key={idx} className="useReviewListContainerInner">
              <div className="userReviewListProductWrap">
                <img
                  className="userReviewListProductImg"
                  src={review.imgUrl}
                  alt=""
                />
                <div className="useReviewListBtnWrap">
                  <div className="userReviewListProductNames">
                    <div className="userReviewListProductBname">
                      {review.brandName}
                    </div>
                    <div className="userReviewListProductPname">
                      {review.productName}
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
              <div className="userReviewItem">
                <div className="userReviewListtextWrap">
                  <p className="userReviewListContent">{review.content}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>리뷰가 없습니다.</p>
        )}
      </div>
    </>
  );
}

export default StoreReviewList;
