import React from "react";
import Icon from "../../components/Icon/Icon";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Password from "../../components/Member/Password";

function PwFindChange() {
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
            <div className="memberInputWrap cntMarginBottom">
                <Password />
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                to={"/member/pwfind/complete"}
            >
                비밀번호 변경
            </Button>
        </div>
    );
}

export default PwFindChange;
