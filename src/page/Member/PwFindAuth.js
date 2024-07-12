import React, { useEffect, useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
function TimerWithButton({ initialTime = 60, onTimerEnd }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            setIsButtonVisible(true);
            if (onTimerEnd) onTimerEnd();
        }
    }, [timeLeft, onTimerEnd]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };
    return (
        <div>
            {timeLeft > 0 ? (
                <div className="timeWrap">
                    {formatTime(timeLeft)}
                    <button className="btnSmallLine">인증하기</button>
                </div>
            ) : (
                isButtonVisible && (
                    <div className="errerMessge">
                        <Icon iconName="iconDanger" />
                        인증시간이 초과하였습니다. 다시 이메일 인증을 해주세요.
                    </div>
                )
            )}
        </div>
    );
}
function PwFindAuth() {
    // const handleTimerEnd = () => {
    //     alert("인증 시간이 초과되었습니다.");
    // };
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
                이메일로 발송 된 인증 번호를 <br />
                3분 이내로 입력하세요.
            </div>
            <div className="memberInputWrap cntMarginBottom">
                <Input
                    iconName="inputIconPwCheck"
                    className="userRstInput"
                    placeholder="인증번호를 입력하세요."
                />
                <TimerWithButton
                    initialTime={180}
                    // onTimerEnd={handleTimerEnd}
                />
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                to={"/member/pwfind/change"}
            >
                인증 완료
            </Button>
        </div>
    );
}

export default PwFindAuth;
