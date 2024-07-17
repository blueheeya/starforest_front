import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import Email from "../../components/Member/Email";

function PwFind() {
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
                본인 확인을 위해 <br />
                이메일 인증을 해주세요!
            </div>
            <div className="memberInputWrap cntMarginBottom">
                <Email placeholder="가입하신 이메일을 입력하세요." />
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                to={"/member/pwfind/auth"}
            >
                이메일 인증하기
            </Button>
        </div>
    );
}

export default PwFind;
