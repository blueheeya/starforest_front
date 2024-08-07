import React from "react";
import CampSelectCard from "../Camp/CampSelectCard";
import Icon from "../Icon/Icon";
import UserCard from "../User/UserCard";
import HashTags from "./HashTags";
import UserTags from "./UserTags";
import { Link } from "react-router-dom";

const userTagsList = [
  "매너타임",
  "친절함",
  "청결함",
  "수영장",
  "놀이시설",
  "개별 화장실",
  "개별 샤워실",
  "매점 운영",
];
function DiaryListCard({ diary }) {
  if (!diary || !diary.allTags) {
    return <div>데이터를 불러오는중 입니다...</div>;
  }

  const { id, content, allTags, image_url, userEmail, reservationId } = diary;
  // console.log("Image URL:", image_url);

  const userTags = allTags
    .split(",")
    .filter((tag) => userTagsList.includes(tag));
  const hashTags = allTags
    .split(",")
    .filter((tag) => !userTagsList.includes(tag));

  return (
    <Link
      to={`/diary/view/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="diaryCard">
        {/* 유저정보 카드 */}
        <div style={{ padding: "32px" }}>
          <div className="diary-mb">
            <UserCard userMyCard={false} userEmail={userEmail} />
          </div>

          {/* 태그 1 S*/}
          {userTags.length > 0 && (
            <div className="diary-mb20">
              <UserTags
                selectedUserTags={userTags}
                onUserTagToggle={() => {}} // 읽기 전용
              />
            </div>
          )}

          {/* 태그 1 E */}
          {/* content S */}
          {content && <div className="diary-mb20">{content}</div>}
          {/* content E */}

          {/* 태그 2 S */}
          {hashTags.length > 0 && (
            <HashTags
              selectedHashTags={hashTags}
              onHashTagToggle={() => {}} // 읽기 전용
            />
          )}

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
    </Link>
  );
}

export default DiaryListCard;
