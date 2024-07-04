import React from "react";
import DiaryListCard from "../../components/Diary/DiaryListCard";
import EditBtn from "../../components/Diary/EditBtn";

function DiaryList() {
  return (
    <div className="diary-bg">
      <EditBtn />
      {/* 별숲 기록 전체 리스트 */}
      <div className="diaryAll-List">
        별숲 기록 전체 리스트
        {/* 별숲 기록 카드 */}
        <DiaryListCard />
        <DiaryListCard />
      </div>
    </div>
  );
}

export default DiaryList;
