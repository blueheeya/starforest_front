import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function StoreTopTen({ className }) {
    const storeTen = [
        {
            brend: "캠핑덕",
            name: "편백나무 찜기 2단 인덕션 세이로무시 히노끼",
            sale: "30%",
            price: "10,000원",
            image: "imgdefault.png",
            link: "/store/store/view",
            starsale: "특가세일",
            delivery: "무료배송",
        },
    ];
    return (
        <div className={`${className}`}>
            <h3 className="cntWarpPadding">스토어 TOP10</h3>
            <div className="storeTen">
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={32}
                    grabCursor={true}
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
                                            storeitem.img
                                        }
                                        alt=""
                                    />
                                    <div className="storeTenContent">
                                        <div>
                                            <p className="storeBrend">
                                                {storeitem.brend}
                                            </p>
                                            <h4>{storeitem.name}</h4>
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
