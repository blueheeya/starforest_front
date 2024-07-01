import React from "react";
function ContentWrap({ className, children }) {
    return <div className={`contentWrap ${className}`}>{children}</div>;
}
export default ContentWrap;
