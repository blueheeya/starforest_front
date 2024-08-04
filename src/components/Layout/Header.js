import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import btnBack from "../../assets/images/btnBack.png";
import btnBackWhite from "../../assets/images/btnBackWhite.png";
import logo from "../../assets/images/logoDefault.png";
import logoWhite from "../../assets/images/logoWhite.png";
import storeHome from "../../assets/images/menuHome.png";
import btnMap from "../../assets/images/btnMap.png";
import Input from "../Form/Input";
import axios from "axios";
function HeaderType({ className }) {
    return (
        <div className={`headerType1 ${className}`}>
            <Link to="/ ">
                <img src={logo} />
            </Link>
        </div>
    );
}

function HeaderType1({ className, children }) {
    return <div className={`headerType ${className}`}>{children}</div>;
}

function HeaderType2({ children, className, titleStore, ...props }) {
    // const { id } = useParams();
    const navigator = useNavigate();
    const onBackClick = () => {
        navigator(-1);
    };
    const btnStoreHome = () => {
        navigator("/store/list");
    };
    return (
        <>
            {titleStore === true ? (
                <div className={`headerType2 ${className}`}>
                    <button className="btnWrap" onClick={onBackClick}>
                        <img src={btnBack} />
                    </button>
                    <button className="btnWrap" onClick={btnStoreHome}>
                        <img src={storeHome} />
                    </button>
                    <h2 className="storeH2">{children}</h2>
                </div>
            ) : (
                <div className={`headerType2 ${className}`}>
                    <button className="btnWrap" onClick={onBackClick}>
                        <img src={btnBack} />
                    </button>
                    <h2>{children}</h2>
                </div>
            )}
        </>
    );
}
function HeaderType3({ className, modalOpen }) {
    const [inputData, setInputData] = useState("");
    const [r, setR] = useState([]);
    const navigator = useNavigate();
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
                setR(res.data)
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("실패");
        }
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
                        <Input
                            iconName="iconSerch"
                            className="searchInput"
                            placeholder="검색어를 입력하세요."
                            //동일 수정
                            onChange={handleInput}
                            //동일 완료
                        />
                        <div onClick={serchCamp} style={{ width: 40 }}>
                            검색
                        </div>
                        <button className="btnWrap" onClick={moveMap}>
                            맵
                        </button>
                    </div>
                </div>
                <div className="serchTypeWrap">
                    <Input
                        iconName="iconDate"
                        className="searchInput"
                        placeholder=""
                    />
                    <Input
                        iconName="iconRegion"
                        className="searchInput"
                        placeholder=""
                        isLink={true}
                        isOnclick={() => modalOpen(2)}
                    ></Input>
                    <select>
                        <option value="">전체</option>
                        <option value="autoCamping">오토캠핑장</option>
                        <option value="glamping">글램핑</option>
                        <option value="caravan">카라반</option>
                    </select>
                </div>
            </div>
        </>
    );
}
function HeaderType4({ children, className, titleStore, ...props }) {
    const { id } = useParams();
    const navigator = useNavigate();
    const onBackClick = () => {
        navigator(-1);
    };
    return (
        <>
            <div className={`headerType4 ${className}`}>
                <button className="btnWrap" onClick={onBackClick}>
                    <img src={btnBackWhite} />
                </button>
                <Link to="/ ">
                    <h2>
                        <img src={logoWhite} />
                    </h2>
                </Link>
                <Link to={`/camp/view/map/${id}`} className="btnMap">
                    <img src={btnMap} />
                </Link>
            </div>
        </>
    );
}
function HeaderTypeNone() {
    return null;
}
export {
    HeaderType,
    HeaderType1,
    HeaderType2,
    HeaderType3,
    HeaderType4,
    HeaderTypeNone,
};
