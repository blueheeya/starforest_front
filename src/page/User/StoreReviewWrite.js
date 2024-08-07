import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/css/reviewStyle.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function StoreReviewWrite() {
  const loginSlice = useSelector((state) => {
    return state.loginSlice;
  });

  const { productId } = useParams();
  const host = `${process.env.REACT_APP_SERVER_URL}`;
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [productData, setProductData] = useState();
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };

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

  const handleSubmit = async () => {
    if (!review || review.trim() === "") {
      setError("리뷰를 입력하세요.");
      return;
    }
    const body = {
      productId,
      userEmail: loginSlice.email,
      content: review.trim(),
    };
    console.log(body);

    try {
      const res = await axios.post(`${host}user/store/order/review`, body);
      console.log(res.data);
      movePage();
    } catch (error) {
      console.log(error);
    }
  };

  const movePage = () => {
    alert("리뷰 등록이 완료되었습니다");
    navigate("/user/mypage ");
  };

  return (
    <div className="modalWrap" style={{ background: "none", top: 64 }}>
      <div className="modal" style={{ top: 10, boxShadow: "none" }}>
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
            <span className="userOrderNickname">{loginSlice.nick_name}</span>
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
