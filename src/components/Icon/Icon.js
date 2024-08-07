import React from "react";
import btnUserModify from "../../assets/images/btnUserModify.png";
import iconAddress from "../../assets/images/iconAddress.svg";
import iconAnimal from "../../assets/images/iconAnimal.svg";
import iconAround from "../../assets/images/iconAround.svg";
import iconBadding from "../../assets/images/iconBadding.svg";
import iconBaths from "../../assets/images/iconBaths.svg";
import iconBrazier from "../../assets/images/iconBrazier.svg";
import iconBrend from "../../assets/images/iconBrend.svg";
import iconCampCategory from "../../assets/images/iconCampCategory.svg";
import iconCart from "../../assets/images/iconCart.png";
import iconCleans from "../../assets/images/iconCleans.svg";
import iconCustomerCall from "../../assets/images/iconCustomerCall.svg";
import iconDate from "../../assets/images/iconDate.svg";
import iconDelivery from "../../assets/images/iconDelivery.png";
import iconDown from "../../assets/images/iconDown.svg";
import iconEdit from "../../assets/images/iconEdit.svg";
import iconElec from "../../assets/images/iconElec.svg";
import iconFire from "../../assets/images/iconFire.svg";
import iconFoods from "../../assets/images/iconFoods.svg";
import iconGo from "../../assets/images/iconGo.svg";
import iconHeating from "../../assets/images/iconHeating.svg";
import iconHompage from "../../assets/images/iconHompage.svg";
import iconLog from "../../assets/images/iconLog.svg";
import iconMyLike from "../../assets/images/iconMyLike.png";
import iconMyLog from "../../assets/images/iconMyLog.png";
import iconMyReview from "../../assets/images/iconMyReview.png";
import iconPhone from "../../assets/images/iconPhone.svg";
import iconPlays from "../../assets/images/iconPlays.svg";
import iconReel from "../../assets/images/iconReel.svg";
import iconRegion from "../../assets/images/iconRegion.svg";
import iconRegist from "../../assets/images/iconRegist.svg";
import iconReservation from "../../assets/images/iconReservation.png";
import iconSerch from "../../assets/images/iconSerch.svg";
import iconShower from "../../assets/images/iconShower.svg";
import iconShowers from "../../assets/images/iconShowers.svg";
import iconSink from "../../assets/images/iconSink.svg";
import iconSmiles from "../../assets/images/iconSmiles.svg";
import iconStrore from "../../assets/images/iconStrore.svg";
import iconSwimming from "../../assets/images/iconSwimming.svg";
import iconSwimmings from "../../assets/images/iconSwimmings.svg";
import iconTableware from "../../assets/images/iconTableware.svg";
import iconTag from "../../assets/images/iconTag.svg";
import iconTent from "../../assets/images/iconTent.svg";
import iconTime from "../../assets/images/iconTimes.svg";
import iconToilet from "../../assets/images/iconToilet.svg";
import iconUp from "../../assets/images/iconUp.svg";
import iconWifi from "../../assets/images/iconWifi.svg";
import level1 from "../../assets/images/level1.png";
import level2 from "../../assets/images/level2.png";
import level3 from "../../assets/images/level3.png";
import level4 from "../../assets/images/level4.png";
import toggleClose from "../../assets/images/toggleClose.png";
import toggleOpen from "../../assets/images/toggleOpen.png";
import toggleTo from "../../assets/images/toggleTo.png";
import btnClose from "../../assets/images/btnClose.png";
import iconCheckActive from "../../assets/images/iconCheckActive.svg";
import iconCheckDefault from "../../assets/images/iconCheckDefault.svg";
import iconMinus from "../../assets/images/iconMinus.svg";
import iconPlus from "../../assets/images/iconPlus.svg";
import iconClose from "../../assets/images/iconClose.svg";
import userOut from "../../assets/images/userOut.svg";
import userEdit from "../../assets/images/userEdit.svg";
import naverLogo from "../../assets/images/naverLogo.png";
import kakaoLogo from "../../assets/images/kakaoLogo.png";
import inputIconPw2 from "../../assets/images/inputIconPw2.png";
import inputIconPwCheck from "../../assets/images/inputIconPwCheck.png";
import inputIconNick from "../../assets/images/inputIconNick.png";
import inputIconId from "../../assets/images/inputIconId.png";
import inputIconEmail from "../../assets/images/inputIconEmail.png";
import logoDefault from "../../assets/images/logoDefault.png";
import iconDanger from "../../assets/images/iconDanger.png";
import iconComplete from "../../assets/images/iconComplete.png";
import iconCloseWhite from "../../assets/images/iconCloseWhite.png";
import menuLog from "../../assets/images/menuLog.png";
import menuLogActive from "../../assets/images/menuLogActive.png";
import iconLogUnload from "../../assets/images/iconLogUnload.png";
import iconCampSearch from "../../assets/images/iconCampSearch.svg";
import iconReset from "../../assets/images/iconReset.png";

import iconReviewComplete from "../../assets/images/iconReviewComplete.svg";
import iconReviewWrite from "../../assets/images/iconReviewWrite.svg";
import heartActive from "../../assets/images/heartActive.png";

const icons = {
    iconShowers,
    iconTime,
    iconAddress,
    iconAnimal,
    iconAround,
    iconBadding,
    iconBrazier,
    iconBrend,
    iconCampCategory,
    iconCleans,
    iconCustomerCall,
    iconDate,
    iconDown,
    iconEdit,
    iconElec,
    iconFire,
    iconFoods,
    iconGo,
    iconHeating,
    iconHompage,
    iconLog,
    iconPhone,
    iconPlays,
    iconReel,
    iconRegion,
    iconRegist,
    iconReservation,
    iconSerch,
    iconShower,
    iconSink,
    iconSmiles,
    iconStrore,
    iconSwimming,
    iconSwimmings,
    iconTableware,
    iconTag,
    iconTent,
    iconToilet,
    iconUp,
    iconWifi,
    iconBaths,
    level1,
    level2,
    level3,
    level4,
    iconCart,
    iconDelivery,
    iconMyLike,
    iconMyLog,
    iconMyReview,
    toggleTo,
    btnUserModify,
    toggleOpen,
    toggleClose,
    btnClose,
    iconCheckActive,
    iconCheckDefault,
    iconMinus,
    iconPlus,
    iconClose,
    userOut,
    userEdit,
    naverLogo,
    kakaoLogo,
    inputIconPw2,
    inputIconPwCheck,
    inputIconNick,
    inputIconId,
    inputIconEmail,
    logoDefault,
    iconDanger,
    iconComplete,
    iconCloseWhite,
    menuLog,
    menuLogActive,
    iconLogUnload,
    iconCampSearch,
    iconReviewWrite,
    iconReviewComplete,
    iconReset,
    heartActive,
};
function Icon({ iconName, className, ...props }) {
    const iconSrc = icons[iconName];
    if (!iconSrc) {
        console.error(`Icon '${iconName}' not found.`);
        return null;
    }
    return (
        <>
            <img
                src={iconSrc}
                alt={iconName}
                {...props}
                className={`imgIcons ${className}`}
            />
        </>
    );
}

export default Icon;
