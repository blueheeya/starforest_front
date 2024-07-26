import React, {useEffect, useState} from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import Email from "../../components/Member/Email";
import {useSelector} from "react-redux";
import useCustomLogin from "../hooks/useCustomLogin";

const initState = {
    email: "",
    pw: "",
};

function Login() {

    const [loginParam, setLoginParam] = useState({ ...initState });

    const { doLogin, moveToPath } = useCustomLogin();

    const loginState = useSelector((state) => state.loginSlice);
    console.log("email" + loginState.email);

    const changeHandller = (e) => {
       loginParam[e.target.name] = e.target.value;
        setLoginParam({ ...loginParam });
    };

    const handleClickLogin = (e) => {
        e.preventDefault();
       doLogin(loginParam).then((data) => {
            if(!data){
                moveToPath("/member/login");
                window.location.reload();
            }
            if (data.error) {
                alert("이메일과 패스워드 확인!!!");
            } else {
                moveToPath("/");
                window.location.reload();
            }
        });
    };

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
                <Email placeholder="이메일을 입력해주세요."  changeHand={changeHandller} email={loginParam.email}/>
                <Input
                    iconName="inputIconPw2"
                    className="userRstInput"
                    placeholder="비밀번호를 입력해주세요."
                    value={loginParam.pw}
                    name="pw"
                    onChange={changeHandller}
                />
            </div>
            <Button defaultBtn={true} className="wrapMarginBottom" onClick={handleClickLogin}>
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

