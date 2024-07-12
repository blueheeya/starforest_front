import React from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import Email from "../../components/Member/Email";

function Login() {
    return (
        <div className="memberContainer cntMarginTop cntMarginBottom">
            <div className="logoWrap cntMarginBottom">
                <h2>
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </h2>
                <Icon iconName="logoDefault" />
            </div>
            <div className="memberInputWrap cntMarginBottom">
                <Email placeholder="이메일을 입력해주세요." />
                <Input
                    iconName="inputIconPw2"
                    className="userRstInput"
                    placeholder="비밀번호를 입력해주세요."
                />
            </div>
            <Button defaultBtn={true} className="wrapMarginBottom">
                로그인
            </Button>
            <div className="btnWrap">
                <button className="btnDefault btnStyleKaKao">
                    <Icon iconName="kakaoLogo" />
                    카카오 로그인
                </button>
                <button className="btnDefault btnStyleNaver">
                    <Icon iconName="naverLogo" />
                    네이버 로그인
                </button>
            </div>
            <div className="memberLink">
                <p>
                    <span>별숲 회원이 아니신가요?</span>
                    <Link to={"/member/terms"}>회원가입하기</Link>
                </p>
                <p>
                    <span>비밀번호를 잊어버리셨나요?</span>
                    <Link to={"/member/pwfind"}>비밀번호찾기</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
