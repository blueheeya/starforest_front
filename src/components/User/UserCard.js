import React from "react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

function UserCard({ className, onClick, value, userMyCard }) {
    return (
        <>
            {userMyCard === true ? (
                <div className={`userCardType1 ${className}`}>
                    <div className="imgWrap">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/images/profileImg.png"
                            }
                            alt="프로필이미지"
                        />
                    </div>
                    <div className="textWrap">
                        <div className="lavel lavel01">샛별</div>
                        <div className="nickname">세상에서가장빠른</div>
                    </div>
                    <Link to="/user/mypage/management">
                        <Icon iconName="btnUserModify" />
                    </Link>
                </div>
            ) : (
                <div className={`userCardType2 ${className}`}>
                    <div className="imgWrap">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/images/profileImg.png"
                            }
                            alt="프로필이미지"
                        />
                    </div>
                    <div className="textWrap">
                        <div className="lavel lavel01">샛별</div>
                        <div className="nickname">세상에서가장빠른</div>
                        <div className="date">2분전</div>
                    </div>
                    <button onClick={`${onClick}`} value={`${value}`}>
                        <Icon iconName="btnClose" />
                    </button>
                </div>
            )}
        </>
    );
}

export default UserCard;
