import React from "react";

function OpenWindow() {
    const options = [
        { name: "mobile", width: 450, height: 900 },
        { name: "tablet", width: 768, height: 700 }
    ];

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    const handlePrueba = (e) => {
        let device = e.target.id;
        let size = options.filter((el) => el.name === device)[0];
        console.log("size->", size);

        let myExternalWindow = window.open(
            "https://country-quiz-fb.netlify.app/",
            "resizable",
            "resizable"
        );

        myExternalWindow.resizeTo(size.width, size.height);
    };

    return (
        <div className="open-window">
            {options.map((op) => (
                <button
                    key={op.name}
                    id={op.name}
                    type="button"
                    className="btn btn-icon btn-devices"
                    onClick={(e) => handlePrueba(e)}
                >
                    <i
                        className={`fa-solid ${
                            op.name === "mobile"
                                ? "fa-mobile-screen"
                                : "fa-tablet-screen-button"
                        }`}
                    ></i>
                    {/* {op.name} */}
                </button>
            ))}
        </div>
    );
}

export default OpenWindow;
