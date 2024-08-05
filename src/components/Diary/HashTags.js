import React from "react";
import { useLocation } from "react-router-dom";

function HashTags({ selectedHashTags, onHashTagToggle }) {
  // console.log("선택된 해시태그:", selectedHashTags);
  const hashTags = [
    "오토캠핑장",
    "글램핑",
    "카라반",
    "봄",
    "여름",
    "가을",
    "겨울",
    "가족",
    "친구",
    "연인",
    "부부",
    "반려동물",
    "솔캠",
    "단체",
    "산",
    "계곡",
    "바다",
    "호수",
    "강",
  ];

  const location = useLocation();

  // path 확인
  const isDiaryListOrView =
    location.pathname.includes("/diary/list") ||
    location.pathname.includes("/diary/view");

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
        flexWrap: "wrap",
      }}
    >
      {(isDiaryListOrView ? selectedHashTags : hashTags).map((HTag, index) => (
        <label
          key={index}
          className={`hashTag ${
            selectedHashTags.includes(HTag) ? "selected" : ""
          } ${!isDiaryListOrView ? "hashTag-clickable" : ""}`}
        >
          <input
            type="checkbox"
            checked={selectedHashTags.includes(HTag)}
            onChange={() => onHashTagToggle(HTag)}
            style={{ marginRight: "5px" }}
            disabled={isDiaryListOrView} // 변경: DiaryList 또는 DiaryView에서는 비활성화
          />
          #{HTag}
        </label>
      ))}
    </div>
  );
}

export default HashTags;
