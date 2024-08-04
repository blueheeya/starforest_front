import React, { useState } from "react";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import noneImage from "../../assets/images/noneImage.png"

function CampSelectCard({ isCampCard, isLink, className, campInfo }) {
    const {
        first_image_url = "",
        is_auto = false,
        is_carvan = false,
        is_glamp = false,
        name = "",
        add1 = ""
    } = campInfo;
    return (
        <>
            {isCampCard === true ? (
                <div className={`campSelectCardWrap ${className}`}>
                    <Link to={isLink}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={first_image_url} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>
                                    {is_auto ? "오토 캠핑장" : ""}
                                    {is_carvan ? "카라반" : ""}
                                    {is_glamp ? "글램핑" : ""}
                                </li>
                                <li>{name}</li>
                                <li>{add1}</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            ) : (
                <Link to={isLink}>
                    <div className={`campSelectCardWrap2 ${className}`}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={first_image_url} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>
                                    {is_auto ? "오토 캠핑장" : ""}
                                    {is_carvan ? "카라반" : ""}
                                    {is_glamp ? "글램핑" : ""}
                                </li>
                                <li>{name}</li>
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
