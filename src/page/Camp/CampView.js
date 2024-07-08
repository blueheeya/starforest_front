import React from "react";
import { useParams } from "react-router-dom";
import CampSite from "../../components/Camp/CampGavisDate";
import CampGavisImg from "../../components/Camp/CampGavisImg";
import CampTag from "../../components/Camp/CampTag";
import Icon from "../../components/Icon/Icon";
import Footer from "../../components/Layout/Footer";

function CampView() {
    const { id } = useParams();
    const campItem = CampSite.find((item) => item.id === parseInt(id));
    if (!campItem) {
        return <div>캠핑장 정보를 찾을 수 없습니다.</div>;
    }
    // 이미지 URL 매칭 함수
    const getImageUrlById = (id) => {
        const imgObj = CampGavisImg.find((img) => img.id === id);
        return imgObj ? imgObj.imageURL : null;
    };

    // CampSite 데이터에 imageUrl 추가
    const CampSiteWithImages = CampSite.map((camp) => ({
        ...camp,
        imageUrl: getImageUrlById(camp.id),
    }));
    return (
        <>
            <div>
                <div>이미지</div>
                <ul className="viewWrap">
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
                        {campItem.address}
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
                            tags={campItem.themaEnvrnC}
                            isListPage={false}
                        />
                    </li>
                </ul>
                <div className="viewWrap">
                    <div>
                        <h4>캠핑장 소개</h4>
                    </div>
                    <div>{campItem.intro}</div>
                </div>
                <div className="viewWrap">
                    <h4>시설 및 레저</h4>
                    <div className="facilityWrap">
                        {campItem.sbrsCl.includes("전기") && (
                            <div>
                                <Icon iconName="iconElec" />
                                <p>전기</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("화장실") && (
                            <div>
                                <Icon iconName="iconToilet" />
                                <p>화장실</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("샤워장") && (
                            <div>
                                <Icon iconName="iconShower" />
                                <p>샤워장</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("온수") && (
                            <div>
                                <Icon iconName="iconSink" />
                                <p>온수</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("마트.편의점") && (
                            <div>
                                <Icon iconName="iconStrore" />
                                <p>편의점</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("수영장") && (
                            <div>
                                <Icon iconName="iconSwimming" />
                                <p>수영장</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("장작") && (
                            <div>
                                <Icon iconName="iconFire" />
                                <p>장작판매</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("wifi") && (
                            <div>
                                <Icon iconName="iconWifi" />
                                <p>wifi</p>
                            </div>
                        )}
                        {campItem.sbrsCl.includes("반려동물") && (
                            <div>
                                <Icon iconName="iconStrore" />
                                <p>반려동물</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="viewWrap">
                    <h4>장비 대여</h4>
                    <div className="facilityWrap">
                        {campItem.lendEquipment.includes("텐트") && (
                            <div>
                                <Icon iconName="iconTent" />
                                <p>텐트</p>
                            </div>
                        )}
                        {campItem.lendEquipment.includes("릴선") && (
                            <div>
                                <Icon iconName="iconReel" />
                                <p>릴선</p>
                            </div>
                        )}
                        {campItem.lendEquipment.includes("화로대") && (
                            <div>
                                <Icon iconName="iconBrazier" />
                                <p>화로대</p>
                            </div>
                        )}
                        {campItem.lendEquipment.includes("난방기구") && (
                            <div>
                                <Icon iconName="iconReel" />
                                <p>난방기구</p>
                            </div>
                        )}
                        {campItem.lendEquipment.includes("식기") && (
                            <div>
                                <Icon iconName="iconTableware" />
                                <p>식기</p>
                            </div>
                        )}
                        {campItem.lendEquipment.includes("침낭") && (
                            <div>
                                <Icon iconName="iconBadding" />
                                <p>침낭</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="viewWrap">
                    <h4>기타 주요시설</h4>
                    <ul className="etcSiteInfo">
                        <li>
                            <span>주요시설</span>
                        </li>
                        <li>
                            <span>기타 정보</span>
                        </li>
                        <li>
                            <span>사이트 간격</span>
                        </li>
                        <li>
                            <span>바닥 형태</span>
                        </li>
                        <li>
                            <span>화로대</span>
                        </li>
                        <li>
                            <span>안전시설</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CampView;
