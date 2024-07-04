import React from "react";

function UserCard({ className }) {
    return (
        <>
            <div className={`userCardType1 ${className}`}>
                <div className="imgWrap">
                    <img src="" alt="프로필이미지" />
                </div>
                <div className="textWrap">
                    <div className="lavel lavel01">샛별</div>
                    <div className="nickname">세상에서가장빠른</div>
                </div>
                <button>정보수정</button>
            </div>
            <div className={`userCardType2 ${className}`}>
                <div className="imgWrap">
                    <img src="" alt="프로필이미지" />
                </div>
                <div className="textWrap">
                    <div className="lavel lavel01">샛별</div>
                    <div className="nickname">세상에서가장빠른</div>
                    <div className="date">2분전</div>
                </div>
                <button>삭제</button>
            </div>
        </>
    );
}

export default UserCard;
