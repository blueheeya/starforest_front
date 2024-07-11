import React from "react";
import Input from "../../components/Form/Input";

function UserMypageMent() {
    return (
        <div className="userMypageMent">
            <div>
                <div>유저이미지</div>
                <div>버튼</div>
            </div>
            <div>
                <button>버튼1</button>
                <button>버튼2</button>
            </div>
            <div className="userInfoWrap">
                <div className="userInfoBox">
                    <span>이메일</span>
                    <Input
                        className="searchInput"
                        placeholder="dong1@naver.com"
                    />
                </div>
                <div className="userInfoBox">
                    <span>휴대폰번호</span>
                    <Input
                        className="searchInput"
                        placeholder="010-1234-5678"
                    />
                </div>
                <div className="userInfoBox">
                    <span>본인인증</span>
                    <Input
                        className="searchInput"
                        placeholder="dong1@naver.com"
                    />
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
                        placeholder=" 웅크린양의사나이 "
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
