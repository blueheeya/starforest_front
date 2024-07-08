import React from "react";
import diary_camp_img from "../../assets/images/diary_camp_img.svg";
import toggleTo from "../../assets/images/toggleTo.png";

function CampSelectCard() {
  return (
    <div className="CampSelectCardWrap">
      <div className="CampSelect-content">
        <img
          src={diary_camp_img}
          alt="캠핑장 사진"
          style={{ width: "65px", height: "65px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "skyblue",
            width: "100%",
          }}
        >
          <div
            style={{ gap: "10px", display: "flex", flexDirection: "column" }}
          >
            <div>오토 캠핑</div> <div>캠핑장 이름</div>
          </div>
          <img src={toggleTo} />
        </div>
      </div>
    </div>
  );
}

export default CampSelectCard;
