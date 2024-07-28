import React, { useCallback, useEffect, useRef, useState } from "react";
import DiaryListCard from "../../components/Diary/DiaryListCard";
import EditBtn from "../../components/Diary/EditBtn";
import { Link } from "react-router-dom";

function DiaryList() {
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

  useEffect(() => {
    fetchDiaries();
  }, []);

  const fetchDiaries = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(`/diary/list`, {
        params: {
          lastId: lastId,
          size: 10,
        },
      });
      const newDiaries = response.data.diaries;
      setDiaries((prevDiaries) => [...prevDiaries, ...newDiaries]);
      setHasMore(response.data.hasMore);
      if (newDiaries.length > 0) {
        setLastId(newDiaries[newDiaries.length - 1].id);
      }
    } catch (error) {
      console.error("error fetching diaries:", error);
    } finally {
      setLoading(false);
    }
  };

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
          {diaries.map((diary, index) => (
            <div
              key={diary.id}
              ref={index === diaries.length - 1 ? lastDiaryElementRef : null}
            >
              <DiaryListCard diary={diary} />
            </div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>모든 다이어리를 불러왔습니다.</p>}
      </div>
    </div>
  );
}

export default DiaryList;

//   return (
//     <div className="diaryList-bg">
//       <div className="diaryList-form">
//         <div className="diaryList-btnWrap">
//           <Link to={"/diary/write"}>
//             <EditBtn />
//           </Link>
//         </div>
//         {/* 별숲 기록 전체 리스트 */}
//         <div className="diaryAll-List">
//           {/* 별숲 기록 카드 */}
//           <DiaryListCard />
//         </div>
//       </div>
//     </div>
//   );
// }
