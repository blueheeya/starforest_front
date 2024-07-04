import React from "react";
import EditBtn from "../../components/Diary/EditBtn";
import imgUpload from "../../assets/images/imgUpload.png";

function DiaryWrite() {
  return (
    <div className="diary-bg">
      <div className="diaryWrite-form">
        <div>유저정보</div>
        <div>캠핑장 간략 내용 카드</div>
        <div>태그1</div>
        <div>태그2</div>
        <div className="diaryWriteWrap">
          {/* diaryWrite-input */}
          <input
            className="diaryWrite-input"
            type="text"
            placeholder="내용을 입력해주세요."
          />
          {/* 이미지 추가 박스 */}
          <div className="diaryWrite-imageCard">
            <div>버튼을 눌러 이미지를 등록해 주세요.</div>
            <img src={imgUpload} alt="이미지 추가" />
          </div>
        </div>
        <div className="diaryWrite-noticeWrap">
          <h3 className="header">유의사항</h3>
          <p className="notice">
            ㆍ 이미지는 jpg , png 형식만 가능합니다. <br />
            ㆍ 이미지 등록은 최대 5개까지 가능합니다. <br />ㆍ 별숲 기록에
            관련없는 내용이나 이미지 등록시 삭제될 수 있습니다.
          </p>
          {/* <p>ㆍ 이미지 등록은 최대 5개까지 가능합니다.</p>
          <p>
            ㆍ 별숲 기록에 관련없는 내용이나 이미지 등록시 삭제될 수 있습니다.
          </p> */}
        </div>
        <EditBtn />
      </div>
    </div>
  );
}

export default DiaryWrite;
