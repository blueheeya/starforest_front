import React from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CampListCard({ className }) {
    const campSite = [
        {
            name: "사천비토솔섬오토캠핑장",
            lineIntro: "",
        },
    ];
    return (
        <div className={`campListCard ${className}`}>
            <div className="campListImg">이미지</div>
            <div className="campListText">
                <div>
                    <p>오토 캠핑장 ㆍ 글램핑</p>
                    <h2>사천비토솔섬오토캠핑장</h2>
                </div>
                <div>
                    <span>50,000</span>원부터
                </div>
            </div>
            <div className="campListTag">
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={false}
                    pagination={{
                        clickable: true,
                    }}
                    style={{ display: "flex" }}
                >
                    <SwiperSlide>
                        <span className="hashTag">#캠핑장</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#친절한</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#여유있는</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#사이트간격이넓은</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#액티비티</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#봄꽃여행</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#오토캠핑장</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#오토캠핑장</span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="hashTag">#오토캠핑장</span>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default CampListCard;
