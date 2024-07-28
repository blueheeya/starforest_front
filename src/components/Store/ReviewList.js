import React from "react";
import PropTypes from "prop-types";

function ReviewList({ reviews, onDelete }) {
  return (
    <div className="reviewContent">
      {reviews.map((review) => (
        <div key={review.id} className="reviewItem">
          <img
            className="reviewuserImg"
            src={`${process.env.REACT_APP_IMAGE_URL}/${review.img}`}
            alt={`${review.user}의 프로필`}
          />
          <div className="reviewWrap">
            <div className="reviewInfo">
              <div className="reviewUser">
                <p className={review.level}>{review.name}</p>
                <p className="reviewUser">{review.user}</p>
              </div>
              <p className="reviewText">{review.content}</p>
            </div>
            <button
              className="deleteReviewBtn"
              onClick={() => onDelete(review.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReviewList;
