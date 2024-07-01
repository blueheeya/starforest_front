import React from "react";
import btnBack from "../../assets/images/btnBack.png";
import logo from "../../assets/images/logoDefault.png";
import storeHome from "../../assets/images/menuHome.png";

function HeaderType({ className, children }) {
    return (
        <div className={`headerType ${className}`}>
            {children}
        </div>
    );
}
function HeaderType1({ className }) {
    return (
        <div className={`headerType1 ${className}`}>
            <img src={logo} />
        </div>
    );
}
function HeaderType2({ children, className, titleStore, ...props }) {
    return (
        <header {...props} className={`${className}`}>
            {titleStore === true ? (
                <>
                    <div className="btnWrap">
                        <img src={btnBack} />
                    </div>
                    <div>
                        <img src={storeHome} />
                    </div>
                    <h2 className="storeH2">{children}</h2>
                </>
            ) : (
                <>
                    <div className="btnWrap">
                        <img src={btnBack} />
                    </div>
                    <h2>{children}</h2>
                </>
            )}
        </header>
    );
}

export { HeaderType, HeaderType1, HeaderType2 };

