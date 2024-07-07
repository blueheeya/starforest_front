import React, { useState } from "react";
import EditBtn from "../../components/Diary/EditBtn";
import imgUpload from "../../assets/images/imgUpload.png";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";

function DiaryWrite() {
  // // 이미지 추가 const
  // const ImageUpload = () => {
  //   // 이미지 저장소
  //   const [images, setImages] = useState([]);

  //   // 이미지 등록
  //   const handleImageUpload = (e) => {
  //     const files = Array.from(e.target.files);
  //     if (images.length + files.length > 5) {
  //       alert("최대 5개의 이미지만 등록할 수 있습니다.");
  //       return;
  //     }

  //     const newImages = files.map((file) => ({
  //       file,
  //       preview: URL.createObjectURL(file),
  //     }));

  //     setImages((prevImages) => [...prevImages, ...newImages]);

  //     const removeImage = (index) => {
  //       setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  //     };
  //   };
  // };

  // 이미지 상태관리
  const [images, setImages] = useState([]);

  // 이미지 등록
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert("최대 5개의 이미지만 등록할 수 있습니다.");
      return;
    }

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // 이미지 삭제
  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="diary-bg">
      <div className="diary-mb">유저정보</div>
      <div className="diary-mb">캠핑장 간략 내용 카드</div>

      {/* 태그 1 */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <span className="userTag">
          <Icon iconName="iconShowers" />
          오토캠핑장
        </span>
        <span className="userTag">
          <Icon iconName="iconShowers" />
          오토캠핑장
        </span>
      </div>

      {/* 태그 2 */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <span className="hashTag">#오토캠핑장</span>
        <span className="hashTag">#오토캠핑장</span>
      </div>

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
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <img src={imgUpload} alt="이미지 추가" />

          <div>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.preview}
                  alt={`업로드된 이미지 ${index + 1}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <button
                  onClick={() => {
                    removeImage(index);
                  }}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 별숲기록 주의사향 */}
      <div className="diaryWrite-noticeWrap">
        <h3 className="header">유의사항</h3>
        <p className="notice">
          ㆍ 이미지는 jpg , png 형식만 가능합니다. <br />
          ㆍ 이미지 등록은 최대 5개까지 가능합니다. <br />ㆍ 별숲 기록에
          관련없는 내용이나 이미지 등록시 삭제될 수 있습니다.
        </p>
      </div>

      {/* 등록버튼 */}
      <Link to={"/diary/list"}>
        <EditBtn />
      </Link>
    </div>
  );
}

export default DiaryWrite;
