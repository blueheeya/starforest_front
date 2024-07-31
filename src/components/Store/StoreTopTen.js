import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import "swiper/css";

function StoreTopTen({ className }) {
    const storeItem = [
        {
            id: 1,
            brend_name: "스노우라인",
            product_name: "새턴2롱텐트(화이트이너)",
            sale: "30%",
            price: "950,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent3-0.png",
            link: "/store/view/1",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 2,
            brend_name: "스노우라인",
            product_name: "미라클스크린텐트",
            sale: "30%",
            price: "880,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent1-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 3,
            brend_name: "스위스알파인클럽",
            product_name: "스위스알파인클럽 뉴케빈와이드에어텐트",
            sale: "30%",
            price: "1350,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent4-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 4,
            brend_name: "노마드",
            product_name: "노마드 캠핑 차박 휴대용 차박텐트",
            sale: "30%",
            price: "373,100",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent0-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 5,
            brend_name: "캠프밸리",
            product_name: "스타디움텐트",
            sale: "30%",
            price: "338,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent6-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 6,
            brend_name: "ThousWinds",
            product_name: "카프리콘 화목난로텐트",
            sale: "30%",
            price: "389,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent9-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 7,
            brend_name: "블루마운틴",
            product_name: "오토 풀 자립형 자동텐트 멀티 차박텐트",
            sale: "30%",
            price: "499,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent8-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 8,
            brend_name: "스위스몽크로스",
            product_name: "몽크로스 원터치 텐트 3~4인용",
            sale: "30%",
            price: "74,900",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent1-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 9,
            brend_name: "스퀘어가든",
            product_name: "스퀘어가든 원터치 텐트",
            sale: "30%",
            price: "99,000",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/tent/view/tent5-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            id: 10,
            brend_name: "백운몽",
            product_name: "얼음골 열무김치국수 3인분 세트",
            sale: "30%",
            price: "12,900",
            image: "https://starforest.s3.ap-northeast-2.amazonaws.com/store/food/view/food1-0.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
    ];
    return (
        <div className={`${className}`}>
            <div className="titleWrap cntWarpPadding wrapMarginBottom">
                <h3>스토어 TOP10</h3>
                {/* <Link to={"/store/list"}>전체보기</Link> */}
            </div>
            <div className="storeTen">
                <Swiper
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={32}
                    grabCursor={false}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {storeItem.map((storeitem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="storeTenCard">
                                    <div className="storeThumb">
                                        {storeitem.image ? (
                                            <img
                                                src={
                                                    // process.env.PUBLIC_URL +
                                                    // "/assets/images/" +
                                                    storeitem.image
                                                }
                                                alt={storeitem.name}
                                            />
                                        ) : null}
                                    </div>
                                    <div className="storeTenContent">
                                        <div>
                                            <p className="storeBrend">
                                                {storeitem.brend_name}
                                            </p>
                                            <Link to={storeitem.link}>
                                                <h4>
                                                    {storeitem.product_name}
                                                </h4>
                                            </Link>
                                        </div>
                                        <div className="storeTenPrice">
                                            <span>{storeitem.sale}</span>{" "}
                                            {storeitem.price}
                                        </div>
                                        <div className="storeEtc">
                                            <span className="textIconType1">
                                                {storeitem.starsale}
                                            </span>
                                            <span className="textIconType2">
                                                {storeitem.delivery}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default StoreTopTen;
