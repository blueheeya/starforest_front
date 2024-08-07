import React, { useState, useEffect } from "react";
import "../../assets/css/storeStyle.scss";
import { useLocation } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
// import axiosInstance from "../../utils/axios";
import axios from "axios";
import { useSelector } from "react-redux";
import userEx01 from "../../assets/images/userEx01.jpg";
import userEx02 from "../../assets/images/userEx02.png";

function StoreReviewList() {
  const location = useLocation();
  const newReview = location.state?.newReview;
  const [reviews, setReviews] = useState([]);
  const host = `${process.env.REACT_APP_SERVER_URL}`;
  const email = useSelector((state) => {
    return state.loginSlice.email;
  });
  console.log(email);

  //가짜데이터----------------------------------------------------------------------------------
  // const mockReviews = [
  //   {
  //     id: 1,
  //     img: "userEx01",
  //     level: "lavel lavel01",
  //     name: "샛별",
  //     user: "단비는순두부죠아해",
  //     content: "캠핑가서 먹었는데 너무너무 맛있어서 다음에 또 구매하려구요",
  //   },
  //   {
  //     id: 2,
  //     img: "userEx02",
  //     level: "lavel lavel03",
  //     name: "뭇별",
  //     user: "나신짱구",
  //     content: "칼칼하고 맛나고 좋았어요~",
  //   },
  // ];

  // const [exReview, setExReview] = useState(mockReviews);

  // // 리뷰 삭제 함수
  // const handleDelete = (id) => {
  //   setExReview((prevMockReviews) =>
  //     prevMockReviews.filter((review) => mockReviews.id !== idToDelete)
  //   );
  // };
  //----------------------------------------------------------------------------------------------------
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
                    // onClick={() => handleDelete(review.id)}
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
          <p>등록된 리뷰가 없습니다.</p>
        )}
      </div>
    </>
  );
}

export default StoreReviewList;
