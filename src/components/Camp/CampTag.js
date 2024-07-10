import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function CampTag({ tags, isListPage }) {
    const validtags = Array.isArray(tags) ? tags : [];
    return (
        <>
            {isListPage ? (
                <div className="campListTag">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        grabCursor={false}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        initialSlide={0}
                    >
                        {validtags.map((tagItem, index) => (
                            <SwiperSlide key={index}>
                                <span className="hashTag">#{tagItem}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="campViewTag">
                    {validtags.map((tagItem, index) => (
                        <span key={index} className="hashTag">
                            #{tagItem}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
}

export default CampTag;
