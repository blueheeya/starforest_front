import React from "react";
import loading from "../../assets/images/loading.gif";

function PageLoading() {
    return (
        <div className="loadingGif">
            <img src={loading} alt="로딩중입니다." />
        </div>
    );
}

export default PageLoading;
