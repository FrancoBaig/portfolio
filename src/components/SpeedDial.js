import React, { useState } from "react";

function SpeedDial() {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        setDisplay((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleDisplay();
    };

    return (
        <>
            {display && (
                <div className="backdrop" onClick={toggleDisplay}></div>
            )}
            <div
                className={`chat paper ${display ? "chat--active" : ""}
            `}
            >
                <h3 className="chat__title">Contact me!</h3>
                <form className="chat__form">
                    <label className="label" htmlFor="email" required>
                        Your email:
                    </label>
                    <input className="input" type="email" name="email" />
                    <label className="label" htmlFor="input">
                        Send me a message:
                    </label>
                    <textarea
                        className="textarea"
                        name="input"
                        rows="18"
                        cols="50"
                        placeholder="Send me a message"
                        required
                    />
                    <button
                        className={`btn btn-lg btn--blue ${
                            display ? "" : "btn--hidden"
                        }`}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="speed-dial" onClick={(e) => toggleDisplay(e)}>
                <i className="icon fa-solid fa-envelope"></i>
            </div>
        </>
    );
}

export default SpeedDial;
