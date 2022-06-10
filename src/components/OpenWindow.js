import React from "react";

function OpenWindow() {
    const options = [
        { name: "mobile", width: 450, height: 900 },
        { name: "tablet", width: 768, height: 700 }
    ];

    const handleDisplayWindow = (e) => {
        let device = e.target.id;
        let size = options.filter((el) => el.name === device)[0];

        window.open(
            "https://country-quiz-fb.netlify.app/",
            "Responsive",
            `width=${size.width}, height=${size.height}`
        );
    };

    return (
        <div className="open-window">
            {options.map((op) => (
                <button
                    key={op.name}
                    id={op.name}
                    type="button"
                    className="btn btn-icon btn-devices"
                    onClick={handleDisplayWindow}
                >
                    <i
                        id={op.name}
                        onClick={handleDisplayWindow}
                        className={`fa-solid  ${
                            op.name === "mobile"
                                ? "fa-mobile-screen"
                                : "fa-tablet-screen-button"
                        }`}
                    ></i>
                </button>
            ))}
        </div>
    );
}

export default OpenWindow;
