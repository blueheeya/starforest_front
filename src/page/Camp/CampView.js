import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CampSite from "../../components/Camp/CampGavisDate";
import CampGavisImg from "../../components/Camp/CampGavisImg";
import CampTag from "../../components/Camp/CampTag";
import Icon from "../../components/Icon/Icon";
import Footer from "../../components/Layout/Footer";
function CampView() {
    const { id } = useParams();
    const [campItem, setCampItem] = useState(null);

    useEffect(() => {
        const campItem = CampSite.find((item) => item.id === parseInt(id));
        setCampItem(campItem);
    }, [id]);

    if (!campItem) {
        return <div>로딩중</div>;
    }
    const sbrsCl = campItem.sbrsCl || [];
    const lendEquipment = campItem.lendEquipment || [];
    // 이미지 URL 매칭 함수
    const getImageUrlsById = (id) => {
        const imgObj = CampGavisImg.find((img) => img.id === id);
        return imgObj ? imgObj.imageURL : [];
    };

    const imageUrls = getImageUrlsById(campItem.id);
    return (
        <>
            <div>
                <div className="campViewSwiper">
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={true}
                    >
                        {imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    key={index}
                                    src={url}
                                    alt={`${campItem.name} ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`${campItem.name} ${index + 1}`}
                        />
                    ))} */}
                </div>
                <ul className="campViewWrap">
                    <li>
                        <ul className="campTitle">
                            <li>
                                {campItem.isAuto === true ? (
                                    <span>오토캠핑장</span>
                                ) : null}
                                {campItem.isGlamp === true ? (
                                    <span>글램핑</span>
                                ) : null}
                                {campItem.isCarvan === true ? (
                                    <span>카라반</span>
                                ) : null}
                            </li>
                            <li>{campItem.name}</li>
                        </ul>
                    </li>
                    <li>
                        <Icon iconName="iconAddress" />
                        {campItem.addr1}
                    </li>
                    <li>
                        <Icon iconName="iconPhone" />
                        {campItem.tel}
                    </li>
                    <li>
                        <Icon iconName="iconHompage" />
                        {campItem.url}
                    </li>
                    <li>
                        <Icon iconName="iconLog" />
                        {campItem.lctCl}
                    </li>
                    <li>
                        <Icon iconName="iconTag" /> 태그
                    </li>
                    <li>
                        <CampTag
                            tags={campItem.themaEnvrnCl}
                            isListPage={false}
                        />
                    </li>
                </ul>
                <div className="campViewWrap">
                    <div>
                        <h4>캠핑장 소개</h4>
                    </div>
                    <div>{campItem.intro}</div>
                </div>
                <div className="campViewWrap">
                    <h4>시설 및 레저</h4>
                    <div className="facilityWrap">
                        {sbrsCl.includes("전기") && (
                            <div>
                                <Icon iconName="iconElec" />
                                <p>전기</p>
                            </div>
                        )}
                        {sbrsCl.includes("화장실") && (
                            <div>
                                <Icon iconName="iconToilet" />
                                <p>화장실</p>
                            </div>
                        )}
                        {sbrsCl.includes("샤워장") && (
                            <div>
                                <Icon iconName="iconShower" />
                                <p>샤워장</p>
                            </div>
                        )}
                        {sbrsCl.includes("온수") && (
                            <div>
                                <Icon iconName="iconSink" />
                                <p>온수</p>
                            </div>
                        )}
                        {sbrsCl.includes("마트.편의점") && (
                            <div>
                                <Icon iconName="iconStrore" />
                                <p>편의점</p>
                            </div>
                        )}
                        {sbrsCl.includes("수영장") && (
                            <div>
                                <Icon iconName="iconSwimming" />
                                <p>수영장</p>
                            </div>
                        )}
                        {sbrsCl.includes("장작") && (
                            <div>
                                <Icon iconName="iconFire" />
                                <p>장작판매</p>
                            </div>
                        )}
                        {sbrsCl.includes("wifi") && (
                            <div>
                                <Icon iconName="iconWifi" />
                                <p>wifi</p>
                            </div>
                        )}
                        {sbrsCl.includes("반려동물") && (
                            <div>
                                <Icon iconName="iconStrore" />
                                <p>반려동물</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="campViewWrap">
                    <h4>장비 대여</h4>
                    <div className="facilityWrap">
                        {lendEquipment.includes("텐트") && (
                            <div>
                                <Icon iconName="iconTent" />
                                <p>텐트</p>
                            </div>
                        )}
                        {lendEquipment.includes("릴선") && (
                            <div>
                                <Icon iconName="iconReel" />
                                <p>릴선</p>
                            </div>
                        )}
                        {lendEquipment.includes("화로대") && (
                            <div>
                                <Icon iconName="iconBrazier" />
                                <p>화로대</p>
                            </div>
                        )}
                        {lendEquipment.includes("난방기구") && (
                            <div>
                                <Icon iconName="iconReel" />
                                <p>난방기구</p>
                            </div>
                        )}
                        {lendEquipment.includes("식기") && (
                            <div>
                                <Icon iconName="iconTableware" />
                                <p>식기</p>
                            </div>
                        )}
                        {lendEquipment.includes("침낭") && (
                            <div>
                                <Icon iconName="iconBadding" />
                                <p>침낭</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CampView;
