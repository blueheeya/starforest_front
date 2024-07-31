import React from "react";
import CampSelectCard from "../Camp/CampSelectCard";
import Icon from "../Icon/Icon";
import UserCard from "../User/UserCard";
import HashTags from "./HashTags";
import UserTags from "./UserTags";

function DiaryListCard({ diary }) {
  const { content, category, image_url, userEmail, reservationId } = diary;

  // userTag 와 hashTags 분리
  const userTags = category.filter((tag) =>
    [
      "매너타임",
      "친절함",
      "청결함",
      "수영장",
      "놀이시설",
      "개별 화장실",
      "개별 샤워실",
      "매점 운영",
    ].includes(tag)
  );

  const hashTags = category.filter((tag) => !userTags.includes(tag));

  return (
    <div className="diaryCard">
      {/* 유저정보 카드 */}
      <div style={{ padding: "32px" }}>
        <div className="diary-mb">
          <UserCard userMyCard={false} />
        </div>

        {/* 태그 1 S*/}
        <UserTags
          selectedUserTags={userTags}
          onUserTagToggle={() => {}} // 읽기 전용
        />

        {/* 태그 1 E */}
        {/* content S */}
        <div className="diary-mb">{content}</div>
        {/* content E */}
        {/* 태그 2 S */}
        <HashTags
          selectedHashTags={hashTags}
          onHashTagToggle={() => {}} // 읽기 전용
        />

        {/* 태그 2 E */}

        {/* 이미지 S */}
        {image_url && image_url.length > 0 && (
          <div className="diary-mb img-wrap">
            <img
              src={image_url[0]}
              alt="Diary image"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        )}

        {/* <div className="diary-mb img-wrap">
          <img
            src={diary_camp_img}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div> */}
        {/* 이미지 E */}
        {/* 캠프셀렉트카드 */}
        {/* <CampSelectCard reservationId={reservationId} isLink={"/camp/view/1"} /> */}
      </div>
    </div>
  );
}

export default DiaryListCard;
