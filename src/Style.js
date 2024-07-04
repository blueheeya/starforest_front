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
                    별숲기록 태그용 아이콘
                </h3>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Icon iconName="iconShowers" />
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
                </div>
            </div>
        </div>
    );
}
// iconShowers,
// iconTime,
// iconAddress,
// ,
// ,
// ,
// ,
// ,
// ,
// ,
// iconCustomerCall,
// iconDate,
// iconDown,
// iconEdit,
// iconElec,
// iconFire,
// iconFoods,
// iconGo,
// iconHeating,
// iconHompage,
// iconLog,
// iconPhone,
// iconPlays,
// iconReel,
// iconRegion,
// iconRegist,
// iconReservation,
// iconSerch,
// iconShower,
// iconSink,
// iconSmiles,
// iconStrore,
// iconSwimming,
// iconTableware,
// iconTag,
// iconTent,
// iconTimes,
// iconToilet,
// iconUp,
// iconWifi,
// iconBaths,
export default Style;
