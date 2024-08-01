import React, { useCallback, useEffect, useRef, useState } from "react";
import CampListCard from "../../components/Camp/CampListCard";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import SearchInput from "../../components/Form/SearchInput";
import axios from "axios";
import btnBack from "../../assets/images/btnBack.png";
import { debounce } from "lodash";

function CampList({ modalOpen, className }) {
    const [filteredCamps, setFilteredCamps] = useState([]);
    const [camps, setCamps] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [inputData, setInputData] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const observer = useRef();
    const navigator = useNavigate();

    const lastCampElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    };

    //
    const loadCamps = async () => {
        console.log("로드 캠핑 시작");
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            let url = `http://localhost:8080/camp/list?page=${page}&size=${
                page === 0 ? 20 : 5
            }`;
            // if (inputData) {
            //     url += `&query=${inputData}`;
            // }
            if (selectedOption) {
                url += `&option=${selectedOption}`;
            }
            const response = await axios.get(url);
            const newCamps = response.data;
            if (newCamps.length === 0) {
                setHasMore(false);
            } else {
                setCamps((prevCamps) => [...prevCamps, ...newCamps]);
            }
        } catch (error) {
            console.error("Error fetching camp data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCamps();
    }, [page]);

    useEffect(() => {
        filterCamps();
    }, [camps, selectedOption]);

    const filterCamps = () => {
        if (selectedOption === "") {
            setFilteredCamps(camps);
        } else {
            const filtered = camps.filter((camp) => {
                switch (selectedOption) {
                    case "autoCamping":
                        return camp.is_auto;
                    case "glamping":
                        return camp.is_glamp;
                    case "caravan":
                        return camp.is_carvan;
                    default:
                        return true;
                }
            });
            setFilteredCamps(filtered);
        }
    };

    const onBackClick = () => {
        navigator(-1);
    };
    const moveMap = () => {
        navigator("/camp/list/map");
    };
    //동일 수정
    const handleInput = (e) => {
        setInputData(e);
    };

    const serchCamp = async () => {
        if (inputData.trim() != "") {
            const body = inputData.replace(/\s+/g, ""); // 모든 공백 제거
            console.log(body);
            try {
                const res = await axios.get(
                    `http://localhost:8080/camp/search?query=${body}`
                );
                console.log(res.data);
                setCamps(res.data);
                setPage(0);
                setHasMore(true);
            } catch (error) {
                console.log(error);
                setPage(0);
                setCamps([]);
                setHasMore(false);
                loadCamps();
            }
        } else {
            console.log("실패");
        }
    };
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    //동일 완료
    return (
        <>
            <div className={`headerType3 ${className}`}>
                <div className="serchWrap">
                    <button className="btnWrap" onClick={onBackClick}>
                        <img src={btnBack} />
                    </button>
                    <div className="serchBox">
                        <SearchInput
                            iconName="iconSerch"
                            className="searchInput"
                            placeholder="검색어를 입력하세요."
                            //동일 수정
                            onChange={handleInput}
                            //동일 완료
                        />
                        <button onClick={serchCamp} style={{ width: 40 }}>
                            검색
                        </button>
                    </div>
                </div>
                <div className="serchTypeWrap">
                    <button className="btnWrap" onClick={moveMap}>
                        맵
                    </button>
                    <Input
                        iconName="iconRegion"
                        className="searchInput"
                        placeholder=""
                        isLink={true}
                        isOnclick={() => modalOpen(2)}
                    ></Input>
                    <select
                        style={{ width: "250px" }}
                        onChange={handleOptionChange}
                        value={selectedOption}
                    >
                        <option value="">전체</option>
                        <option value="autoCamping">오토캠핑장</option>
                        <option value="glamping">글램핑</option>
                        <option value="caravan">카라반</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="campViewWrap">
                    전체 :{filteredCamps.length}개
                </div>
                <div>
                    {filteredCamps.map((camp, index) => (
                        <div
                            key={camp.id}
                            ref={
                                index === filteredCamps.length - 1
                                    ? lastCampElementRef
                                    : null
                            }
                        >
                            <CampListCard camp={camp} />
                        </div>
                    ))}
                    {loading && <p>Loading...</p>}
                    {!hasMore && <p>No more camps to load</p>}
                </div>
            </div>
        </>
    );
}

export default CampList;
