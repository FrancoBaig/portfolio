import React, { useState, useEffect } from "react";

function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {showScroll && (
                <div className="speed-dial scroll-top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angles-up"></i>
                </div>
            )}
        </div>
    );
}

export default ScrollToTop;
