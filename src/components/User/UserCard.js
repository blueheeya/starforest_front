import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserCard({ className, onClick, value, userMyCard }) {
  const loginState = useSelector((state) => state.loginSlice);
  const getUserLevel = (grade) => {
    switch (grade) {
      case 0:
        return <div className="lavel lavel01">샛별</div>;
      case 1:
        return <div className="lavel lavel02">잔별</div>;
      case 2:
        return <div className="lavel lavel03">뭇별</div>;
      default:
        return <div className="lavel lavel04">금별</div>;
    }
  };
  return (
    <>
      {userMyCard === true ? (
        <div className={`userCardType1 ${className}`}>
          <div className="imgWrap">
            <img src={loginState.profile_url} alt="프로필이미지" />
          </div>
          <div className="textWrap">
            {getUserLevel(loginState.grade)}
            <div className="nickname">{loginState.nick_name}</div>
          </div>
          <Link to="/user/mypage/management">
            <Icon iconName="btnUserModify" />
          </Link>
        </div>
      ) : (
        <div className={`userCardType2 ${className}`}>
          <div className="imgWrap">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/profileImg.png"}
              alt="프로필이미지"
            />
          </div>
          <div className="textWrap">
            {getUserLevel(loginState.grade)}
            <div className="nickname">{loginState.nick_name}</div>
            {/* <div className="date">2분전</div> */}
            {/* <div className="lavel lavel01">샛별</div>
            <div className="nickname">세상에서가장빠른</div>
            <div className="date">2분전</div> */}
          </div>
          {/* <button onClick={`${onClick}`} value={`${value}`}>
            <Icon iconName="btnClose" />
          </button> */}
        </div>
      )}
    </>
  );
}

export default UserCard;
