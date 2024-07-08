import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tabs from "../../components/Store/Tabs";
import StoreToggle from "../../components/Store/StoreToggle";
import EventSwiper from "../../components/Store/EventSwiper";
import StoreTopTen from "../../components/Store/StoreTopTen";
import PurchaseModal from "../../components/Store/PurchaseModal";
import Icon from "../../components/Icon/Icon";

const productview = {
  id: 1,
  brand: "브랜드",
  brandName: "브랜드명1",
  productName: "상품명 블라블라 1",
  Category: "캠핑텐트",
  price: 1000000,
  image: "imgdefault.png",
  sale: "30%",
  saledPrice: "700,000원",
  point: "적립금",
  pointDetails: "구매액의 1%",
  delivery: "배송",
  deliveryDetails: "무료배송 / 택배사(CJ대한통운)",
};

const tabBar = [
  { id: "details", name: "상세정보" },
  { id: "reviews", name: "리뷰보기" },
];

const detailView = {
  detailImg: "미라클스크린텐트.jpg",
};
const reviews = [
  {
    id: 1,
    img: "imgdefault.png",
    level: "lavel lavel01",
    name: "샛별",
    user: "웅크린양과같은사나이",
    content: "리뷰리뷰리뷰리뷰리뷰리뷰",
  },
  {
    id: 2,
    img: "imgdefault.png",
    level: "lavel lavel03",
    name: "뭇별",
    user: "웅크린양과같은사나이",
    content: "리뷰리뷰리뷰리뷰리뷰리뷰",
  },
];

function StoreView() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(tabBar[0].id);
  const [reviewList, setReviewList] = useState(reviews);
  const [showFullImage, setShowFulllImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = productview;

  //모달
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //탭메뉴
  const changeTab = (tabId) => {
    setActiveTab(tabId);
    setShowFulllImage(false);
  };

  //리뷰
  const deleteReview = (reviewId) => {
    setReviewList(reviewList.filter((review) => review.id !== reviewId));
  };

  //상세정보
  const toggleImage = () => {
    setShowFulllImage(!showFullImage);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="detailContent">
            <div
              className="detailImageWrapper"
              style={{
                overflow: "hidden",
                height: showFullImage ? "auto" : "678px",
              }}
            >
              <img
                className="detailImg"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/images/${detailView.detailImg}`
                }
                alt="상품 상세 이미지"
                style={{ width: "100%", height: "auto" }}
              />
              <button onClick={toggleImage} className="moreBtn">
                {showFullImage ? "접기" : "상품설명 더보기"}
              </button>
            </div>
          </div>
        );
      case "reviews":
        return (
          <div className="reviewContent">
            {reviews.map((review) => (
              <div key={review.id} className="reviewItem">
                <img
                  className="reviewuserImg"
                  src={process.env.PUBLIC_URL + `/assets/images/${review.img}`}
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
                    onClick={() => deleteReview(review.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="viewWrap">
      <div className="productImageWrap">
        <img
          className="viewImg"
          src={process.env.PUBLIC_URL + `/assets/images/${productview.image}`}
          alt={productview.productName}
        />
        <div className="productNameWrap">
          <div className="nameWrap">
            <p className="category">{productview.Category}</p>
            <h1 className="productName">{productview.productName}</h1>
          </div>

          <div className="brandWrap">
            <Icon iconName="iconBrend" />
            <p className="brand"> {productview.brand} </p>
            <p className="brandName">{productview.brandName}</p>
          </div>
        </div>
      </div>
      <div className="productPriceWrap">
        <div className="priceWrap">{productview.price.toLocaleString()}원</div>
        <div className="saleWrap">
          <p className="sale">{productview.sale}</p>
          <p className="saleprice">{productview.saledPrice}</p>
        </div>
      </div>
      <div className="productViewEtc">
        <div className="pointWrap">
          <Icon iconName="iconBrend" />
          <p className="point">{productview.point}</p>
          <p className="pointDetails">{productview.pointDetails}</p>
        </div>
        <div className="deliveryWrap">
          <Icon iconName="iconBrend" />
          <p className="delivery">{productview.delivery}</p>
          <p className="deliveryDetails">{productview.deliveryDetails}</p>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}

      <div className="buyWrap">
        <div className="btnWrap">
          <button className="buyBtn" onClick={openModal}>
            바로 구매하기
          </button>
        </div>
      </div>
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productName={productview.productName}
        price={productview.price}
      />

      <div>
        <div className="tabMenuWrap">
          <ul className="tabList">
            {tabBar.map((tab) => (
              <li
                key={tab.id}
                id={tab.id}
                className={activeTab === tab.id ? "on" : ""}
                onClick={() => changeTab(tab.id)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="tabContent">{renderTabContent()}</div>
      </div>
      <div className="toggle">
        <StoreToggle className="toggleWrap" title="교환ㆍ반품 안내">
          <div className="togglecontentWrap">
            <p className="togglecontent">교환ㆍ반품비</p>
            <p className="productReference">편도 4,000원</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">색상</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="productReference">
              *[마이 > 내쇼핑 > 주문내역]에서 신청 가능합니다.
            </p>
            <p className="productReference">
              *최초 무료 배송 상품의 경우 반품 시 왕복 배송비가 부과됩니다
            </p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">교환ㆍ반품 배송지</p>
            <p className="productReference">
              [08503] 서울 금천구 가산디지털2로 144 현대테라타워{" "}
            </p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">교환ㆍ반품 신청 가능 기간</p>
            <p className="productReference">
              -구매자 단순 변심은 상품 수령후 7일 이내 (구매자 반품 배송비 부담)
            </p>
            <p className="productReference">
              -표시ㆍ광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후{" "}
              <br />
              3개월 이내 혹은 표시ㆍ광고와 다른 사실을 안 날로부터 30일 이내{" "}
              <br />
              (판매자 반품 배송비 부담) 둘 중 하나 경과시 반품ㆍ교환 불가
            </p>
          </div>
        </StoreToggle>
      </div>
      <div className="toggle">
        <StoreToggle className="toggleWrap" title="상품 정보 고시">
          <div className="togglecontentWrap">
            <p className="togglecontent">제품 소재</p>
            <p className="productReference">상품상세 참초</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">색상</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">치수</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">제품구성</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">제조자</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">제조국</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">세탁방법 및 취급시 주의사항</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent">품질보증기준</p>
            <p className="productReference">상품상세 참조</p>
          </div>
          <div className="togglecontentWrap">
            <p className="togglecontent"> A/S 책임자와 전화번호</p>
            <p className="productReference">상품상세 참조</p>
          </div>
        </StoreToggle>
      </div>
      <div className="storeTop">
        <StoreTopTen />
      </div>
    </div>
  );
}

export default StoreView;
