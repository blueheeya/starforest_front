import React, { useEffect, useState } from "react";
import EventSwiper from "../../components/Store/EventSwiper";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/storeStyle.scss";
import axiosInstance from "../../utils/axios";

function StoreList() {
  const storeCategory = [
    { type: "전체", StoreIcon: "전체", link: "/store/list" },
    { type: "텐트", StoreIcon: "캠핑 텐트", link: "/store/list" },
    { type: "푸드", StoreIcon: "캠핑 푸드", link: "/store/list" },
    { type: "가구", StoreIcon: "캠핑 가구", link: "/store/list" },
  ];

  const { type } = useParams();
  const [activeCategory, setActiveCategory] = useState(type || "전체");
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.type);
    setStoreData([]);
    setHasMore(true);
    fetchStoreInfo({ skip: 0, limit: 10, filters: { type: category.type } });
  };

  async function fetchStoreInfo({
    skip,
    limit,
    loadMore = false,
    filters = {},
  }) {
    try {
      setLoading(true);
      const params = { skip, limit, ...filters };

      if (activeCategory !== "전체") {
        params.type = activeCategory;
      }

      const res = await axiosInstance.get("/store/list", { params });

      console.log("API Response:", res); // 응답 데이터 구조 확인

      if (res.data && res.data.store) {
        setStoreData((prevData) =>
          loadMore ? [...prevData, ...res.data.store] : res.data.store
        );
        setHasMore(res.data.hasMore);
      } else {
        console.error("Invalid response format", res);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error fetching store data!", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStoreInfo({ skip: 0, limit: 10, filters: { type: activeCategory } });
  }, [activeCategory]);

  return (
    <>
      <EventSwiper className="cntMarginBottom" />
      <StoreTopTen className="cntMarginBottom" />

      <ul className="storeCategory">
        {storeCategory.map((category) => (
          <li
            key={category.type}
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
        {storeData.map((product) => (
          <Link to={`/store/view/${product.id}`} key={product.id}>
            <div className="product-item">
              <div className="productImg">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${product.image}`}
                  alt={product.product_name}
                />
              </div>
              <div className="storeNameWrap">
                <div className="Bname">{product.brand_name}</div>
                <div className="Pname">{product.product_name}</div>
              </div>
              <div className="storePriceWrap">
                <div className="sale">{product.sale}</div>
                <div className="price">{product.price.toLocaleString()}원</div>
              </div>
              <div className="storeEtc">
                <span className="textIconType1">{product.starsale}</span>
                <span className="textIconType2">{product.delivery}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products</p>}
    </>
  );
}

export default StoreList;
