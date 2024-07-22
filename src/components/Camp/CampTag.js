import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function CampTag({ tags, isListPage }) {
    //동일 수정
    const parseTags = (tags) => {
        try {
            // '를 "로 바꾸기
            const jsonString = tags.replace(/'/g, '"');
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Error parsing tags:', error);
            return [];
        }
    };

    const validtags = parseTags(tags);
    //동일 수정끝
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
