import React, { useState } from "react";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import noneImage from "../../assets/images/noneImage.png"

function CampSelectCard({ isCampCard, isLink, className, campInfo }) {
    console.log(campInfo);
    return (
        <>
            {isCampCard === true ? (
                <div className={`campSelectCardWrap ${className}`}>
                    <Link to={isLink}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={campInfo.first_image_url ? campInfo.first_image_url : noneImage} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>
                                    {campInfo.is_auto ? "오토 캠핑장" : ""}
                                    {campInfo.is_carvan ? "카라반" : ""}
                                    {campInfo.is_glamp ? "글램핑" : ""}
                                </li>
                                <li>{campInfo.name}</li>
                                <li>{campInfo.add1}</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            ) : (
                <Link to={isLink}>
                    <div className={`campSelectCardWrap2 ${className}`}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={campInfo.first_image_url ? campInfo.first_image_url : noneImage} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>
                                    {campInfo.is_auto ? "오토 캠핑장" : ""}
                                    {campInfo.is_carvan ? "카라반" : ""}
                                    {campInfo.is_glamp ? "글램핑" : ""}
                                </li>
                                <li>{campInfo.name}</li>
                            </ul>
                        </div>
                        <div>
                            <Icon iconName="toggleTo" />
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default CampSelectCard;
