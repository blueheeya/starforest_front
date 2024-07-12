import React from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";

function UserMypageMent() {
    return (
        <div className="userMypageMent">
            <div className="userProfile">
                <div className="imgWrap">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/images/profileImg.png"
                        }
                        alt="프로필이미지"
                    />
                </div>
                <button className="btnModify">프로필 사진 편집</button>
            </div>
            <div className="userBtnWrap wrapCntBottom">
                <Button defaultBtn={true}>
                    <Icon iconName="userEdit" />
                    수정하기
                </Button>
                <Button defaultBtn={false}>
                    <Icon iconName="userOut" />
                    탈퇴하기
                </Button>
            </div>
            <div className="userInfoWrap wrapCntBottom">
                <div className="userInfoBox">
                    <span>이메일</span>
                    <Input
                        className="searchInput"
                        placeholder=""
                        value="dong1@naver.com"
                    />
                </div>
                <div className="userInfoBox">
                    <span>휴대폰번호</span>
                    <Input
                        className="searchInput"
                        placeholder=""
                        value="010-1234-5678"
                    />
                </div>
                <div className="userInfoBox">
                    <span>본인인증</span>
                    <div className="iconUserAuth">인증완료</div>
                </div>
            </div>
            <div className="userInfoWrap">
                <div className="userInfoBox">
                    <span>새 비밀번호</span>
                    <Input
                        className="searchInput"
                        placeholder="비밀번호를 입력하세요."
                    />
                </div>
                <div className="userInfoBox">
                    <span>새 비밀번호 확인</span>
                    <Input
                        className="searchInput"
                        placeholder="비밀번호 확인후 변경 가능합니다."
                    />
                </div>
                <div className="userInfoBox">
                    <span>닉네임</span>
                    <Input
                        className="searchInput"
                        placeholder=""
                        value=" 웅크린양의사나이 "
                    />
                </div>
                <div className="userInfoBox">
                    <span>한줄소개</span>
                    <Input
                        className="searchInput"
                        placeholder="한줄 소개를 입력해주세요."
                    />
                </div>
            </div>
        </div>
    );
}

export default UserMypageMent;
