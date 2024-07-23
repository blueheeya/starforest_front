import React from "react";
function BackWrap({ children }) {
    return (
        <section className="backWrap">
            <div className="wrap">{children}</div>
            <div className="backAnimation">Back</div>
        </section>
    );
}

export { BackWrap };
