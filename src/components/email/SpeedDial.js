import React, { useState } from "react";
import Snackbar from "./Snackbar";

function SpeedDial() {
    const [display, setDisplay] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    const toggleDisplay = () => {
        setDisplay((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleDisplay();
        setSnackbar(true);
        setTimeout(() => {
            setSnackbar(false);
        }, 3000);
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
                        onClick={(e) => handleSubmit(e)}
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="speed-dial" onClick={toggleDisplay}>
                <i className="icon fa-solid fa-envelope"></i>
            </div>
            <Snackbar
                text="email sent successfully!"
                display={snackbar}
                mode="snackbar--success"
            />
        </>
    );
}

export default SpeedDial;
