import React, { useState } from "react";
import EventSwiper from "../../components/Store/EventSwiper";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/storeStyle.scss";
import { type } from "@testing-library/user-event/dist/type";
import axiosInstance from "../../utils/axios";

function StoreList() {
  const storeCategory = [
    { type: "전체", StoreIcon: "전체", link: "/store/list" },
    { type: "텐트", StoreIcon: "캠핑 텐트", link: "/store/list" },
    { type: "푸드", StoreIcon: "캠핑 푸드", link: "/store/list" },
    { type: "가구", StoreIcon: "캠핑 가구", link: "/store/list" },
  ];
  const products = [
    {
      id: 1,
      brandName: "브랜드명1",
      productName: "상품명블라블라1",
      Category: "캠핑텐트",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 2,
      brandName: "브랜드명2",
      productName: "상품명블라블라2",
      Category: "캠핑텐트",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 3,
      brandName: "브랜드명3",
      productName: "상품명블라블라3",
      Category: "캠핑텐트",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 4,
      brandName: "브랜드명4",
      productName: "상품명블라블라4",
      Category: "캠핑가구",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 5,
      brandName: "브랜드명5",
      productName: "상품명블라블라5",
      Category: "캠핑가구",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 6,
      brandName: "브랜드명6",
      productName: "상품명블라블라6",
      Category: "캠핑가구",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 7,
      brandName: "브랜드명7",
      productName: "상품명블라블라7",
      Category: "캠핑푸드",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 8,
      brandName: "브랜드명8",
      productName: "상품명블라블라8",
      Category: "캠핑푸드",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
    {
      id: 9,
      brandName: "브랜드명9",
      productName: "상품명블라블라9",
      Category: "캠핑푸드",
      price: 1000000,
      image: "imgdefault.png",
      sale: "30%",
      starsale: "특가세일",
      delivery: "무료배송",
      link: "/store/view",
    },
  ];

  const { type } = useParams();
  const [activeCategory, setActiveCategory] = useState("전체");
  const [typeData, setTypeData] = useState([]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.type);
  };

  const filteredProducts =
    activeCategory === "전체"
      ? products
      : products.filter((product) => product.storeCategory === activeCategory);

  return (
    <>
      <EventSwiper className="cntMarginBottom" />
      <StoreTopTen className="cntMarginBottom" />

      <ul className="storeCategory">
        {storeCategory.map((category, index) => (
          <li
            key={index}
            className={`scIconWrap ${
              activeCategory === category.type ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <Link to={category.link}>
              <span className="storeIcon">{category.StoreIcon}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="storeList">
        {products.map((products) => (
          //   <Link to={`/store/view/${products.id}`} key={products.id}>
          <Link to={products.link}>
            <div key={products.id} className="product-item">
              <div className="productImg">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/images/${products.image}`
                  }
                  alt=""
                />
              </div>
              <div className="storeNameWrap">
                <div className="Bname">{products.brandName}</div>
                <div className="Pname">{products.productName}</div>
                {/* <div className="Pname">{products.Category}</div> */}
              </div>
              <div className="storePriceWrap">
                <div className="sale">{products.sale}</div>
                <div className="price">{products.price.toLocaleString()}원</div>
              </div>
              <div className="storeEtc">
                <span className="textIconType1">{products.starsale}</span>
                <span className="textIconType2">{products.delivery}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default StoreList;
