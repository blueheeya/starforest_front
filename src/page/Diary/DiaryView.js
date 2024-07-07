import React from "react";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import Icon from "../../components/Icon/Icon";

function DiaryView() {
  return (
    <div className="diary-bg">
      <div className="diary-Wrap">
        {/* 유저 정보 */}
        <div className="diary-mb">유저</div>
        {/* 캠핑장 간략정보 */}
        <div className="diary-mb">캠핑장 간략 정보</div>

        {/* 태그 1 */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
        </div>

        {/* 컨텐츠 내용 */}
        <div className="diary-mb">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nesciunt ab suscipit modi rerum recusandae pariatur totam consectetur
          enim labore?
        </div>

        {/* 태그 2 S */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <span className="hashTag">#오토캠핑장</span>
          <span className="hashTag">#오토캠핑장</span>
        </div>
        {/* 태그 2 E */}

        {/* 캠핑 이미지  */}
        <div
          // className="diaryView-imgWrap"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img src={diary_camp_img} alt="캠핑 이미지" />
          <img src={diary_camp_img} alt="" />
          <img src={diary_camp_img} alt="" />
          <img src={diary_camp_img} alt="" />
          <img src={diary_camp_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DiaryView;
