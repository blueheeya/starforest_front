import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

function StoreTopTen({ className }) {
    const storeTen = [
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
    ];
    return (
        <div className={`${className}`}>
            <div className="titelWrap cntWarpPadding wrapMarginBottom">
                <h3>스토어 TOP10</h3>
                <Link to={"/store/view"}>전체보기</Link>
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
                    {storeTen.map((storeitem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="storeTenCard">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/" +
                                            storeitem.image
                                        }
                                        alt={storeitem.name}
                                    />
                                    <div className="storeTenContent">
                                        <div>
                                            <p className="storeBrend">
                                                {storeitem.brend}
                                            </p>
                                            <Link to={storeitem.link}>
                                                <h4>{storeitem.name}</h4>
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
