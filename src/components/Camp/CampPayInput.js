import React from "react";

function CampPayInput() {
  return (
    <>
      <div className="campPayInput">
        <div className="inputTitle">예약자 정보</div>
        <div className="inputContent">
          <div className="inputBox">
            <div className="boxName">
              이름<span>*</span>
            </div>
            <input className="boxInput" type="text" placeholder="이름 입력" />
          </div>
          <div className="inputBox">
            <div className="boxName">
              연락처<span>*</span>
            </div>
            <input className="boxInput" type="text" placeholder="연락처 입력" />
          </div>
          <div className="inputBox boxAnother">
            <div className="boxName">요청사항</div>
            <input
              className="boxInput"
              type="text"
              placeholder="요청사항 입력"
            />
          </div>
          <div className="inputBox">
            <div className="boxName">차량번호</div>
            <input
              className="boxInput"
              type="text"
              placeholder="차량번호 입력"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CampPayInput;
