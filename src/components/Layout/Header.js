import React from "react";
import btnBack from "../../assets/images/btnBack.png";
import logo from "../../assets/images/logoDefault.png";
import storeHome from "../../assets/images/menuHome.png";
import { Link, useNavigate } from "react-router-dom";
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

export { HeaderType, HeaderType1, HeaderType2 };
