import React from "react";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  // path확인
  const isDiaryListOrView =
    location.pathname.includes("/diary/list") ||
    location.pathname.includes("/diary/view");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      {tags.map((tag, index) => (
        <label
          key={index}
          className={`userTag ${
            selectedUserTags.includes(tag.text) ? "selected" : ""
          } ${!isDiaryListOrView ? "userTag-clickable" : ""}`}
        >
          <input
            type="checkbox"
            checked={selectedUserTags.includes(tag.text)}
            onChange={() => onTagToggle(tag.text)}
            style={{ marginRight: "5px" }}
          />
          <Icon iconName={tag.icon} />
          {tag.text}
        </label>
      ))}
    </div>
  );
}

export default UserTags;
