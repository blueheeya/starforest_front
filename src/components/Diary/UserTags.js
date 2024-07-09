import React from "react";
import Icon from "../Icon/Icon";

function UserTags({ selectedUserTags, onTagToggle }) {
  console.log("selectedUserTags:", selectedUserTags);
  const tags = [
    { icon: "iconTime", text: "매너타임" },
    { icon: "iconSmiles", text: "친절함" },
    { icon: "iconCleans", text: "청결함" },
    { icon: "iconSwimmings", text: "수영장" },
    { icon: "iconPlays", text: "놀이시설" },
    { icon: "iconBaths", text: "개별 화장실" },
    { icon: "iconShowers", text: "개별 샤워실" },
    { icon: "iconFoods", text: "매점 운영" },
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
        <span
          key={index}
          className={`userTag ${
            selectedUserTags.includes(tag.text) ? "selected" : ""
          }`}
          onClick={() => onTagToggle(tag.text)}
        >
          <Icon iconName={tag.icon} />
          {tag.text}
        </span>
      ))}
    </div>
  );
}

export default UserTags;
