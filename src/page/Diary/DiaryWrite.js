import React, { useRef, useState } from "react";
import EditBtn from "../../components/Diary/EditBtn";
import imgUpload from "../../assets/images/imgUpload.png";
import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import HashTags from "../../components/Diary/HashTags";
import UserTags from "../../components/Diary/UserTags";

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

  const [images, setImages] = useState([]); // 이미지 상태관리
  const [selectedTags, setSelectedTags] = useState([]); // 선택된 태그 상태관리
  const [content, setContent] = useState(""); // 글 작성 내용 상태관리
  const fileInputRef = useRef(null); // file input ref

  // 이미지 change 확인
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

  // 찐 이미지 등록
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleTagToggle = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="diary-bg">
      <div className="diary-mb">유저정보</div>
      <div className="diary-mb">캠핑장 간략 내용 카드</div>

      {/* 태그 1 */}
      <UserTags selectedTags={selectedTags} onTagToggle={handleTagToggle} />

      {/* 태그 2 */}
      <HashTags />

      {/* input Wrap */}
      <div className="diaryWriteWrap">
        {/* diaryWrite-input */}
        <textarea
          className="diaryWrite-input"
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* 이미지 추가됐을시 보이는박스 */}
        {images.length > 0 && (
          <div className="uploaded-images diary-mb">
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.preview}
                  alt={`업로드된 이미지 ${index + 1}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                {/* 이미지 삭제 버튼 */}
                <button
                  onClick={() => {
                    removeImage(index);
                  }}
                >
                  <img src="../../assets/images/btnClose.ong" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 이미지 추가 박스 */}

        <button onClick={triggerFileInput}>
          <div className="diaryWrite-imageCard">
            <div>버튼을 눌러 이미지를 등록해 주세요.</div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <img src={imgUpload} alt="이미지 추가" />
            {/* <div>
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
                </div>
              ))}
            </div> */}
          </div>
        </button>
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
