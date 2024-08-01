import React, { useState } from "react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
const SwiperEvent = [
    {
        title: "이벤트1",
        img: "eventTestImg1.png",
        link: "",
    },
    {
        title: "이벤트2",
        img: "eventTestImg2.png",
        link: "",
    },
    {
        id: 1,
        title: "이벤트3",
        img: "eventTestImg3.png",
        link: "",
    },
    {
        id: 1,
        title: "이벤트4",
        img: "eventTestImg4.png",
        link: "",
    },
    {
        id: 1,
        title: "이벤트5",
        img: "eventTestImg5.png",
        link: "",
    },
];
function EventSwiper({ className }) {
    return (
        <div className={`swiperEvent ${className}`}>
            <Swiper
                modules={[Autoplay, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {SwiperEvent.map((eventItem, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={eventItem.link}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/" +
                                        eventItem.img
                                    }
                                />
                            </a>
                            <p>{eventItem.title}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default EventSwiper;
