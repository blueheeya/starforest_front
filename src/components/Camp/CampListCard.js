import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import Icon from "../Icon/Icon";
import CampTag from "./CampTag";
function CampListCard({ className, camp }) {
    // console.log(camp);
    return (
        <>
            {/* {CampSite.map((campItem, index) => {
                return (
                    <>
                        <div
                            className={`campListCard ${className}`}
                            key={index}
                        >
                            <Link to={`/camp/view/${campItem.id}`}>
                                <div className="campListImg">
                                    <img src={`${campItem.first_image_url}`} />
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
                                    tags={campItem.themaEnvrnCl}
                                    isListPage={true}
                                />
                            </div>
                        </div>
                    </>
                );
            })} */}
            <div className={`campListCard ${className}`}>
                <Link to={`/camp/view/${camp.id}`}>
                    <div className="campListImg">
                        <img src={`${camp.first_image_url}`} />
                    </div>
                    <div className="campListWrap">
                        <ul className="campTitle">
                            <li>
                                {camp.is_auto === true ? (
                                    <span>오토캠핑장</span>
                                ) : null}
                                {camp.is_glamp === true ? (
                                    <span>글램핑</span>
                                ) : null}
                                {camp.is_carvan === true ? (
                                    <span>카라반</span>
                                ) : null}
                            </li>
                            <li>
                                <Icon iconName="iconCampCategory" />
                                {camp.name}
                            </li>
                            <li>{camp.add1}</li>
                        </ul>
                        <div className="campPrice">
                            <span>{camp.price}</span>원부터
                        </div>
                    </div>
                </Link>
                <div style={{ padding: "0 16px" }}>
                    <CampTag isListPage={true} tags={camp.thema_envrn_cl} />
                </div>
            </div>
        </>
    );
}

export default CampListCard;
