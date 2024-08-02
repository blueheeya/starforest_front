import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/css/reviewStyle.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function StoreReviewWrite() {
  const state = useSelector((state) => {
    return state.loginSlice.nick_name;
  });
  console.log(state);

  const { productId } = useParams();
  const host = `${process.env.REACT_APP_SERVER_URL}`;
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [productData, setProductData] = useState();
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };
  console.log(productId);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${host}user/store/order/${productId}`);
      //   console.log(res.data);
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };
  console.log(productData);

  const handleSubmit = async () => {};

  return (
    <div className="modalWrap" style={{ background: "none" }}>
      <div
        className="modal"
        style={{ height: "calc(100% - 64px)", boxShadow: "none" }}
      >
        <div className="userReviewModalProduct">
          <img
            className="userReviewProductImg"
            src={productData?.imgUrl}
            alt=""
          />
          <div className="userReviewModalProductInner">
            <div className="userReviewModalProductBname">
              {productData?.brandName}
            </div>
            <div className="userReviewModalProductPname">
              {productData?.productName}
            </div>
          </div>
        </div>
        <div className="userReviewModalInputWrap">
          <div className="userReviewModalInfoBox">
            <div className="lavel lavel01">샛별</div>
            <span className="userOrderNickname">{state}</span>
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
          <Button defaultBtn={false} className="btnLine" onClick={backBtn}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StoreReviewWrite;
