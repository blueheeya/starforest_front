import React from "react";

function HashTags() {
  const tags = [
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

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
        flexWrap: "wrap",
      }}
    >
      {tags.map((tag, index) => (
        <span key={index} className="hashTag">
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default HashTags;
