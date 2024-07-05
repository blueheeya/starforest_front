import React from "react";
import btnBack from "../../assets/images/btnBack.png";
import logo from "../../assets/images/logoDefault.png";
import storeHome from "../../assets/images/menuHome.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";
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
function HeaderType3({ className }) {
    const navigator = useNavigate();
    const onBackClick = () => {
        navigator(-1);
    };
    return (
        <>
            <div className={`headerType3 ${className}`}>
                <div className="serchWrap">
                    <button className="btnWrap" onClick={onBackClick}>
                        <img src={btnBack} />
                    </button>
                    <div className="serchBox">
                        <Input iconName="iconSerch" className="searchInput" />
                        <button className="btnWrap" onClick={onBackClick}>
                            맵
                        </button>
                    </div>
                </div>
                <div className="serchTypeWrap">
                    <Input iconName="iconDate" className="searchInput" />
                    <Input
                        iconName="iconRegion"
                        className="searchInput"
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

export { HeaderType, HeaderType1, HeaderType2, HeaderType3 };
