import React, { useRef, useState } from "react";
import EditBtn from "../../components/Diary/EditBtn";
import imgUpload from "../../assets/images/imgUpload.png";
import { Link, useNavigate } from "react-router-dom";
import HashTags from "../../components/Diary/HashTags";
import UserTags from "../../components/Diary/UserTags";
import CampSelectCard from "../../components/Camp/CampSelectCard";
import UserCard from "../../components/User/UserCard";
import iconClose from "../../assets/images/iconClose.svg";
import axios from "axios";

function DiaryWrite() {
  const [images, setImages] = useState([]); // 이미지 상태관리
  const [selectedUserTags, setSelectedUserTags] = useState([]); // 선택된 태그 상태관리
  const [selectedHashTags, setSelectedHashTags] = useState([]); // 선택된 해시태그 상태관리)
  const [content, setContent] = useState(""); // 글 작성 내용 상태관리
  const fileInputRef = useRef(null); // file input ref
  const navigate = useNavigate(); // useNavigate

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

  // UserTag 토글
  const handleUserTagToggle = (UTag) => {
    setSelectedUserTags((prevUTags) =>
      prevUTags.includes(UTag)
        ? prevUTags.filter((t) => t !== UTag)
        : [...prevUTags, UTag]
    );
  };

  // HashTag 토글
  const handleHashTagToggle = (HTag) => {
    setSelectedHashTags((prevHTags) =>
      prevHTags.includes(HTag)
        ? prevHTags.filter((t) => t !== HTag)
        : [...prevHTags, HTag]
    );
  };

  // handleSubmit 생성
  const handleSubmit = async () => {
    try {
      // 모든 태그를 하나의 문자열로 결합
      const allTags = [...selectedUserTags, ...selectedHashTags].join(",");

      const formData = FormData();
      formData.append("content", content);
      formData.append("category", allTags); // 모든 태그를 카테고리로 사용

      images.forEach((image, index) => {
        formData.append(`imageUrls`, image.file);
      });

      const res = await axios.post("http://localhost:8084/diary", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("diary created:".res.data);
      navigate("/diary/list"); // 별숲기록 생성후 리스트 페이지로 이동
    } catch (error) {
      console.error("error create diary", error);
    }
  };

  return (
    // <div className="diary-bg">
    <div>
      {/* 유저 정보 */}
      <div
        className="diary-mb"
        style={{
          backgroundColor: "#ffffff",
          padding: "10px 20px 10px 20px",
        }}
      >
        <UserCard userMyCard={false} />
      </div>

      <div className="diary-bg">
        {/* 캠핑장 간략정보 */}
        <div className="diary-mb">
          <CampSelectCard />
        </div>
        {/* 태그 1 */}
        <UserTags
          selectedUserTags={selectedUserTags}
          onUserTagToggle={handleUserTagToggle}
          isClickable={true}
        />
        {/* 태그 2 */}
        <HashTags
          selectedHashTags={selectedHashTags}
          onHashTagToggle={handleHashTagToggle}
          isClickable={true}
        />
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
            <div className="uploaded-images diary-mb images-count-${images.length}">
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
                    className="remove-image"
                    onClick={() => {
                      removeImage(index);
                    }}
                  >
                    <img src={iconClose} />
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
        <EditBtn onClick={handleSubmit} />
        {/* 등록하기 */}
      </div>
    </div>
  );
}

export default DiaryWrite;
