import React, { useEffect, useState } from "react";
import logo from "../assets/images/logoWhite.png";
const Star = ({ style }) => {
    return <div className="star" style={style}></div>;
};

const StarryBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numStars = 100;
        const newStars = [];

        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 10 + 1}px`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                animationDelay: `${Math.random() * 2}s`,
            });
        }

        setStars(newStars);
    }, []);

    return (
        <div className="starry-background">
            {stars.map((star) => (
                <Star
                    key={star.id}
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}
        </div>
    );
};
function Loding() {
    return (
        <div className="loadingWrap">
            <div className="title">
                <p className="titleText">
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </p>
                <h1>
                    <img src={logo} />
                </h1>
            </div>
            <div className="wrap">
                <div className="object"></div>
                <div className="back1"></div>
                <div className="back2"></div>
                <div className="back3"></div>
                <div className="back4"></div>
                <div className="backCloud1"></div>
                <div className="backCloud2"></div>
                <div className="backCloud3"></div>
                <div className="backCloud4"></div>
                <div className="backCloud5"></div>
                <div className="backCloud6"></div>
            </div>
            <StarryBackground />
        </div>
    );
}

export default Loding;
