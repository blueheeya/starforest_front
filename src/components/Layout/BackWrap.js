import React from "react";
function BackWrap({ children }) {
    return (
        <section className="backWrap">
            <div className="wrap">{children}</div>
            <div className="backAnimation">
                <div className="backSubTitle">
                    별이 빛나는 밤, <br />
                    너와 나의 감성캠핑
                </div>
                <div className="backTitle">별숲</div>
                <div className="backCloud1"></div>
                <div className="backCloud2"></div>
                <div className="backCloud3"></div>
                <div className="backCloud4"></div>
                <div className="backCloud5"></div>
                <div className="backCloud6"></div>
                <div className="backCloud7"></div>
                <div className="backImgBottom1"></div>
                <div className="backImgBottom2"></div>
            </div>
        </section>
    );
}

export { BackWrap };
