import React, { useState } from "react";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";

function CampSelectCard({ isCampCard, isLink, className }) {
    return (
        <>
            {isCampCard === true ? (
                <div className={`campSelectCardWrap ${className}`}>
                    <Link to={isLink}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={diary_camp_img} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>오토 캠핑</li>
                                <li>캠핑장 이름</li>
                                <li>주소지</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            ) : (
                <Link to={isLink}>
                    <div className={`campSelectCardWrap2 ${className}`}>
                        <div className="campCardInfo">
                            <div className="campCardImg">
                                <img src={diary_camp_img} alt="캠핑장 사진" />
                            </div>
                            <ul className="campCardText">
                                <li>오토 캠핑</li>
                                <li>캠핑장 이름</li>
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
