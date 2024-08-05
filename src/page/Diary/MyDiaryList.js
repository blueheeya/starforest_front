import React, { useCallback, useEffect, useRef, useState } from "react";
import DiaryListCard from "../../components/Diary/DiaryListCard";
import EditBtn from "../../components/Diary/EditBtn";
import { Link } from "react-router-dom";
import axios from "axios";

function MyDiaryList() {
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastId, setLastId] = useState(null); // 마지막으로 불러온 다이어리의 ID 추적
  const observer = useRef();

  // api 호출시 lastId를 파라미터로 전달
  const lastDiaryElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchDiaries();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const fetchDiaries = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/diary/user/:userEmail`,
        {
          params: {
            lastId: lastId,
            size: 10,
          },
        }
      );
      console.log("API response: ", response.data);

      const newDiaries = response.data.diaries;
      console.log("new diaries:", newDiaries);

      // setDiaries((prevDiaries) => [...prevDiaries, ...newDiaries]);
      setDiaries((prevDiaries) => {
        const updatedDiaries = [...prevDiaries, ...newDiaries];
        console.log("updated diaries:", updatedDiaries);
        return updatedDiaries;
      });

      setHasMore(response.data.hasMore);
      if (newDiaries.length > 0) {
        setLastId(newDiaries[newDiaries.length - 1].id);
      }
    } catch (error) {
      console.error("error fetching diaries:", error);
      setHasMore(false);
      alert("데이터를 불러오는데 실패했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

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
          {diaries.length === 0 && !loading ? (
            <p>데이터가 없습니다</p>
          ) : (
            diaries.map((diary, index) => (
              <div
                key={diary.id}
                ref={index === diaries.length - 1 ? lastDiaryElementRef : null}
              >
                {/* <p>다이어리 ID : {diary.id}</p>
                <p>내용: {diary.content}</p> */}
                <DiaryListCard diary={diary} />
              </div>
            ))
          )}
        </div>
        {loading && <p>Loading...</p>}
        {/* {!hasMore && <p>모든 다이어리를 불러왔습니다.</p>} */}
      </div>
    </div>
  );
}

export default MyDiaryList;
