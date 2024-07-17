import React from "react";
import DiaryListCard from "../../components/Diary/DiaryListCard";
import EditBtn from "../../components/Diary/EditBtn";
import { Link } from "react-router-dom";

function DiaryList() {
  return (
    <div className="diaryList-bg">
      <div className="diaryList-form">
        <div className="diaryList-btnWrap">
          <Link to={"/diary/write"}>
            <EditBtn />
          </Link>
        </div>
        {/* 별숲 기록 전체 리스트 */}
        <div className="diaryAll-List">
          {/* 별숲 기록 카드 */}
          <DiaryListCard />
          <DiaryListCard />
        </div>
      </div>
    </div>
  );
}

export default DiaryList;
