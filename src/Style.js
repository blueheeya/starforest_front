import React from "react";
import Icon from "./components/Icon/Icon";

function Style() {
  return (
    <div className="cntWarpPadding">
      <h2 style={{ textAlign: "center", fontFamily: "EunhasuR" }}>
        아이콘 가이드
      </h2>
      <div className="cntMarginTop">
        <h3 style={{ fontFamily: "EunhasuR", marginBottom: "10px" }}>
          유저레벨
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="lavel lavel01">샛별</div>
          <div className="lavel lavel02">잔별</div>
          <div className="lavel lavel03">뭇별</div>
          <div className="lavel lavel04">금별</div>
        </div>
      </div>
      <div className="cntMarginTop">
        <h3 style={{ fontFamily: "EunhasuR", marginBottom: "10px" }}>
          스토어용
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <span className="textIconType1">별숲특가</span>
          <span className="textIconType2">무료배송</span>
        </div>
        <div>
          <span>
            <Icon iconName="iconCheckActive" />
          </span>
          <span>
            <Icon iconName="iconCheckDefault" />
          </span>
        </div>
        <div>
          <span>
            <Icon iconName="iconPlus" />
          </span>
          <span>
            <Icon iconName="iconMinus" />
          </span>
        </div>
      </div>
      <div className="cntMarginTop">
        <h3 style={{ fontFamily: "EunhasuR", marginBottom: "10px" }}>
          별숲기록 태그용
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <span className="hashTag">#오토캠핑장</span>
          <span className="hashTag">#오토캠핑장</span>
        </div>
      </div>
      <div className="cntMarginTop">
        <h3 style={{ fontFamily: "EunhasuR", marginBottom: "10px" }}>
          별숲기록 태그용
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
          <span className="userTag">
            <Icon iconName="iconShowers" />
            오토캠핑장
          </span>
        </div>
      </div>
      <div className="cntMarginTop">
        <h3 style={{ fontFamily: "EunhasuR", marginBottom: "10px" }}>
          아이콘 모음
        </h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            background: "#ccc",
          }}
        >
          <Icon iconName="iconShowers" />
          <Icon iconName="iconShower" />
          <Icon iconName="iconTime" />
          <Icon iconName="iconAddress" />
          <Icon iconName="iconAnimal" />
          <Icon iconName="iconAround" />
          <Icon iconName="iconBadding" />
          <Icon iconName="iconBrazier" />
          <Icon iconName="iconBrend" />
          <Icon iconName="iconCampCategory" />
          <Icon iconName="iconCleans" />
          <Icon iconName="iconToilet" />
          <Icon iconName="iconCustomerCall" />
          <Icon iconName="iconDate" />
          <Icon iconName="iconDown" />
          <Icon iconName="iconEdit" />
          <Icon iconName="iconElec" />
          <Icon iconName="iconFire" />
          <Icon iconName="iconFoods" />
          <Icon iconName="iconGo" />
          <Icon iconName="iconHeating" />
          <Icon iconName="iconHompage" />
          <Icon iconName="iconLog" />
          <Icon iconName="iconPhone" />
          <Icon iconName="iconPlays" />
          <Icon iconName="iconReel" />
          <Icon iconName="iconRegion" />
          <Icon iconName="iconRegist" />
          <Icon iconName="iconReservation" />
          <Icon iconName="iconSerch" />
          <Icon iconName="iconSink" />
          <Icon iconName="iconSmiles" />
          <Icon iconName="iconStrore" />
          <Icon iconName="iconSwimming" />
          <Icon iconName="iconTableware" />
          <Icon iconName="iconTag" />
          <Icon iconName="iconTent" />
          <Icon iconName="iconTimes" />
          <Icon iconName="iconToilet" />
          <Icon iconName="iconUp" />
          <Icon iconName="iconWifi" />
          <Icon iconName="iconBaths" />
          <Icon iconName="iconSwimmings" />
        </div>
      </div>
    </div>
  );
}
export default Style;
