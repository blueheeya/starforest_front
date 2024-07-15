import React from "react";
import Icon from "../../components/Icon/Icon";
import Email from "../../components/Member/Email";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import Password from "../../components/Member/Password";
import NickName from "../../components/Member/NickName";
import UserName from "../../components/Member/UserName";

function Register() {
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
                <Email placeholder="이메일을 입력해주세요." userAuth={true} />
                <UserName />
                <NickName />
                <Password />
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                to={"/member/register/complete"}
            >
                회원가입
            </Button>
        </div>
    );
}

export default Register;
