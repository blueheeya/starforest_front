import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function CampTag({ tags, isListPage }) {
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
                        {tags.map((tagItem, index) => (
                            <SwiperSlide key={index}>
                                <span className="hashTag">#{tagItem.tag}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="campViewTag">
                    {tags.map((tagItem, index) => (
                        <span key={index} className="hashTag">
                            #{tagItem.tag}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
}

export default CampTag;
