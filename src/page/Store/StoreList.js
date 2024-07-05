import React, { useState } from "react";
import EventSwiper from "../../components/Store/EventSwiper";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Link } from "react-router-dom";

const storeCategory = [
  { name: "전체", StoreIcon: "전체", link: "/store/list" },
  { name: "캠핑텐트", StoreIcon: "캠핑텐트", link: "/store/list" },
  { name: "캠핑푸드", StoreIcon: "캠핑푸드", link: "/store/list" },
  { name: "캠핑가구", StoreIcon: "캠핑가구", link: "/store/list" },
];

const products = [
  {
    id: 1,
    brand: "브랜드명1",
    name: "상품명블라블라1",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
  {
    id: 1,
    brand: "브랜드명2",
    name: "상품명블라블라1",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
  {
    id: 2,
    brand: "브랜드명3",
    name: "상품명블라블라2",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
  {
    id: 2,
    brand: "브랜드명4",
    name: "상품명블라블라2",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
  {
    id: 3,
    brand: "브랜드명5",
    name: "상품명블라블라3",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
  {
    id: 3,
    brand: "브랜드명6",
    name: "상품명블라블라3",
    price: 1000000,
    image: "imgdefault.png",
    sale: "30%",
    starsale: "특가세일",
    delivery: "무료배송",
  },
];

function StoreList() {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
  };

  return (
    <>
      <EventSwiper />
      <div className="storeTop">
        <StoreTopTen />
      </div>

      <div className="storeWrap">
        <ul className="storeCategory">
          {storeCategory.map((category, index) => (
            <li
              key={index}
              className={`scIconWrap ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <Link to={category.link}>
                <span className="storeIcon">{category.StoreIcon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="storeList">
        {products.map((products, idx) => (
          <div key={products.id} className="product-item">
            <img
              className="productImg"
              src={process.env.PUBLIC_URL + `/assets/images/${products.image}`}
              alt=""
            />
            <div className="nameWrap">
              <div className="Bname">{products.brand}</div>
              <div className="Pname">{products.name}</div>
            </div>
            <div className="priceWrap">
              <p className="sale">{products.sale}</p>
              <p className="price">{products.price.toLocaleString()}원</p>
            </div>
            <div className="storeEtc">
              <span className="textIconType1">{products.starsale}</span>
              <span className="textIconType2">{products.delivery}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StoreList;
