import React from "react";
import Icon from "../Icon/Icon";

function UserTags() {
  const tags = [
    { icon: "", text: "매너타임" },
    { icon: "", text: "친절함" },
    { icon: "", text: "청결함" },
    { icon: "", text: "수영장" },
    { icon: "", text: "놀이시설" },
    { icon: "", text: "개별 화장실" },
    { icon: "iconShowers", text: "개별 샤워실" },
    { icon: "", text: "매점 운영" },
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
        <span key={index} className="userTag">
          <Icon iconName={tag.icon} />
          {tag.text}
        </span>
      ))}
    </div>
  );
}

export default UserTags;
