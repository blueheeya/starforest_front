import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import Icon from "../Icon/Icon";
import CampSite from "./CampGavisDate";
import CampTag from "./CampTag";
function CampListCard({ className, campItem }) {
    return (
        <>
            {CampSite.map((campItem, index) => {
                return (
                    <>
                        <div
                            className={`campListCard ${className}`}
                            key={index}
                        >
                            <Link to={`/camp/view/${campItem.id}`}>
                                <div className="campListImg">
                                    <img src={`${campItem.firstImageUrl}`} />
                                </div>
                                <div className="campListWrap">
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
                                        <li>
                                            <Icon iconName="iconCampCategory" />
                                            {campItem.name}
                                        </li>
                                        <li>{campItem.sigunguNm}</li>
                                    </ul>
                                    <div className="campPrice">
                                        <span>{campItem.price}</span>원부터
                                    </div>
                                </div>
                            </Link>
                            <div style={{ padding: "0 16px" }}>
                                <CampTag
                                    tags={campItem.themaEnvrnC}
                                    isListPage={true}
                                />
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default CampListCard;
