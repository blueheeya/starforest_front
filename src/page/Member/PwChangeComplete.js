import React from "react";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";

function PwChangeComplete() {
    return (
        <div className="memberContainer cntMarginTop cntMarginBottom">
            <div
                className="logoWrap cntMarginBottom"
                style={{ marginTop: "64px" }}
            >
                <h2>
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </h2>
                <Icon iconName="logoDefault" />
            </div>
            <div className="memberInfoText cntMarginBottom">
                비밀번호 변경이 완료 되었습니다.
                <br />
                로그인하여 이용해 주세요.
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                to={"/member/login"}
            >
                로그인하기
            </Button>
        </div>
    );
}

export default PwChangeComplete;
