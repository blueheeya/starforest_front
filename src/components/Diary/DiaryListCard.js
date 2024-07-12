import React from "react";
import CampSelectCard from "../Camp/CampSelectCard";
import Icon from "../Icon/Icon";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import UserCard from "../User/UserCard";

function DiaryListCard() {
  return (
    <div className="diaryCard">
      {/* 유저정보 카드 */}
      <div style={{ padding: "32px" }}>
        <div className="diary-mb">
          <UserCard userMyCard={false} />
        </div>

        {/* 태그 1 S*/}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <span className="userTag">
            <Icon iconName="iconShowers" />
            매너타임
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            친절함
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            청결함
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            수영장
          </span>
        </div>
        {/* <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
        </div> */}
        {/* 태그 1 E */}
        {/* content S */}
        <div className="diary-mb">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis
          aliquam beatae officiis quo sequi accusamus rem laboriosam iste
          cupiditate.
        </div>
        {/* content E */}
        {/* 태그 2 S */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span className="hashTag">#오토캠핑장</span>
          <span className="hashTag">#오토캠핑장</span>
        </div>
        {/* 태그 2 E */}
        {/* 이미지 S */}
        <div className="diary-mb img-wrap">
          <img
            src={diary_camp_img}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        {/* 이미지 E */}
        {/* 캠프셀렉트카드 */}
        <CampSelectCard />
      </div>
    </div>
  );
}

export default DiaryListCard;
