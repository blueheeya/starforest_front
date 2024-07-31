import React from "react";
import iconEdit from "../../assets/images/iconEdit.png";

function EditBtn({ onClick }) {
  return (
    <div className="editBtnWrap" onClick={onClick}>
      <div className="editDiary">
        <img src={iconEdit} alt="editIcon" />
        별숲기록 등록하기
      </div>
    </div>
  );
}

export default EditBtn;
