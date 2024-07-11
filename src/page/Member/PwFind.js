import React from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";

function PwFind() {
    return (
        <div className="memberContainer cntMarginTop cntMarginBottom">
            <div className="logoWrap cntMarginBottom">
                <h2>
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </h2>
                <Icon iconName="logoDefault" />
            </div>
            <div className="memberInfoText cntMarginBottom">
                본인 확인을 위해 <br />
                이메일 인증을 해주세요!
            </div>
            <div className="memberInputWrap cntMarginBottom">
                <Input
                    iconName="inputIconEmail"
                    className="userRstInput"
                    placeholder="가입 된 이메일 주소를 입력하세요"
                />
            </div>
            <Button defaultBtn={true} className="wrapMarginBottom">
                이메일 인증하기
            </Button>
        </div>
    );
}

export default PwFind;
