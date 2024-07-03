import React from "react";
import DiaryListCard from "../../components/Diary/DiaryListCard";
import EditBtn from "../../components/Diary/EditBtn";

function DiaryList() {
  return (
    <div className="ground">
      <div className="editBtnForm">
        <EditBtn />
      </div>
      <div className="all-List">
        별숲 기록 전체 리스트
        <DiaryListCard />
        <DiaryListCard />
      </div>
    </div>
  );
}

export default DiaryList;
