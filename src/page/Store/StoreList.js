import React, { useEffect, useState } from "react";
import EventSwiper from "../../components/Store/EventSwiper";
import StoreTopTen from "../../components/Store/StoreTopTen";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/storeStyle.scss";
import axios from "axios";

function StoreList() {
  const storeCategory = [
    { type: "3", StoreIcon: "전체", link: "/store/list" },
    { type: "0", StoreIcon: "캠핑 텐트", link: "/store/list" },
    { type: "1", StoreIcon: "캠핑 푸드", link: "/store/list" },
    { type: "2", StoreIcon: "캠핑 가구", link: "/store/list" },
  ];

  // const { type } = useParams();
  const { type: urlType } = useParams();
  const [activeCategory, setActiveCategory] = useState(urlType || "3");
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
    setLoading(true);
    const params = { skip, limit, ...filters };

    // if (activeCategory !== "전체") {
    //   params.type = activeCategory;
    // }
    if (params.type !== "3" && typeof params.type === "string") {
      params.type = Number(params.type);
    }
    try {
      console.log(activeCategory);
      const res = await axios.get(
        `http://localhost:8080/store/list/${params.type}`,
        {
          params,
        }
      );

      if (res.data && res.data.stores) {
        setStoreData((prevData) =>
          loadMore ? [...prevData, ...res.data.stores] : res.data.stores
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

  // console.log(storeData[0].first_img_url);
  // console.log(storeData[0].first_img_url);
  return (
    <>
      <EventSwiper className="cntMarginBottom" />
      <StoreTopTen className="cntMarginBottom" />

      <ul className="storeCategory">
        {storeCategory.map((product) => (
          <li
            key={product.type}
            className={`scIconWrap ${
              activeCategory === product.type ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(product)}
          >
            {/* <Link to={category.link}> */}
            <span className="storeIcon">{product.StoreIcon}</span>
            {/* </Link> */}
          </li>
        ))}
      </ul>

      <div className="storeList">
        {storeData.map((product) => {
          // 이미지 URL을 설정
          const imageUrl = product?.first_img_url;

          return (
            <Link
              to={`/store/view/${product?.productId}`}
              key={product?.productId}
            >
              <div className="product-item">
                <div className="productImg">
                  <img
                    src={product?.first_img_url}
                    alt={product?.productName}
                  />
                  {/* <img
                    src={imageUrl}
                    alt={product.productName}
                    onError={(e) => {
                      e.target.onerror = null; // 무한 반복을 방지하기 위해 onError 핸들러 제거
                      e.target.src = `${process.env.PUBLIC_URL}/assets/images/default-image.jpg`;
                    }}
                  /> */}
                </div>
                <div className="storeNameWrap">
                  <div className="Bname">{product?.brandName}</div>
                  <div className="Pname">{product?.productName}</div>
                </div>
                <div className="storePriceWrap">
                  <div className="sale">{product?.sale}</div>
                  <div className="price">
                    {product?.price.toLocaleString()}원
                  </div>
                </div>
                <div className="storeEtc">
                  <span className="textIconType1">특가세일</span>
                  <span className="textIconType2">무료배송</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products</p>} */}
    </>
  );
}

export default StoreList;
