import React, { useEffect, useState } from "react";
import UserTags from "../../components/Diary/UserTags";
import CampSelectCard from "../../components/Camp/CampSelectCard";
import UserCard from "../../components/User/UserCard";
import HashTags from "../../components/Diary/HashTags";
import { useParams } from "react-router-dom";
import axios from "axios";

function DiaryView() {
  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // 아이디 Parma값으로 불러오기

  // useEffect
  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/diary/view/${id}`);
        setDiary(res.data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching diary", error);
        setLoading(false);
      }
    };

    fetchDiary();
  }, [id]);

  // 로딩중
  if (loading) {
    return <div>Loading...</div>;
  }

  // diary 에러
  if (error) {
    return <div>{error}</div>;
  }

  // diary 가 없을때
  if (!diary) {
    return <div>별숲기록을 찾지 못했습니다. 다시 시도해주세요.</div>;
  }

  const userTags = diary.allTags
    ? diary.allTags
        .split(",")
        .filter((tag) =>
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
        )
    : [];
  const hashTags = diary.allTags
    ? diary.allTags
        .split(",")
        .filter(
          (tag) =>
            ![
              "매너타임",
              "친절함",
              "청결함",
              "수영장",
              "놀이시설",
              "개별 화장실",
              "개별 샤워실",
              "매점 운영",
            ].includes(tag)
        )
    : [];

  return (
    // <div className="diary-bg">
    <div
      style={{
        backgroundColor: "#ffffff",
        margin: "0 auto",
        height: "auto",
        padding: "90px 32px 32px 32px",
      }}
    >
      <div className="diary-Wrap">
        {/* 유저 정보 */}
        <div className="diary-mb">
          <UserCard userMyCard={false} userEmail={diary.userEmail} />
        </div>

        {/* 캠핑장 간략정보 */}
        <div className="diary-mb">
          {/* <CampSelectCard isLink={"/camp/view/1"} /> */}
        </div>

        {/* 태그 1 */}
        {userTags.length > 0 && (
          <div className="diary-mb20">
            <UserTags selectedUserTags={userTags} onUserTagToggle={() => {}} />
          </div>
        )}

        {/* 컨텐츠 내용 */}
        {diary.content && <div className="diary-mb20">{diary.content}</div>}

        {/* 태그 2 S */}
        {hashTags.length > 0 && (
          <div className="diary-mb">
            <HashTags selectedHashTags={hashTags} onHashTagToggle={() => {}} />
          </div>
        )}

        {/* 태그 2 E */}

        {/* 캠핑 이미지  */}
        {diary.image_url && diary.image_url.length > 0 && (
          <div className="diaryView-imgWrap">
            {diary.image_url.map((url, index) => (
              <div key={index} className="diary-image-container">
                <img src={url} alt={`diary image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DiaryView;
