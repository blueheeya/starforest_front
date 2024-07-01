import React from "react";
function BackWrap({ children }) {
    return (
        <section className="backWrap">
            <div className="wrap">{children}</div>
        </section>
    );
}

export { BackWrap };

