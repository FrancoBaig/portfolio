import React, { useState } from "react";

function SpeedDial() {
    const [display, setDisplay] = useState(false);

    const handleChatClose = () => {
        setDisplay(false);
    };

    const handleDisplay = () => {
        setDisplay(true);
    };
    return (
        <>
            {display && (
                <>
                    <div className="backdrop" onClick={handleChatClose}></div>
                    <div className="chat paper">
                        <h3 className="chat__title">Contact me!</h3>
                        <form className="chat__form">
                            <label className="label" htmlFor="email" required>
                                Your email:
                            </label>
                            <input
                                className="input"
                                type="email"
                                name="email"
                            />
                            <label className="label" htmlFor="input">
                                Send me a message:
                            </label>
                            <textarea
                                className="textarea"
                                name="input"
                                rows="21"
                                cols="50"
                                required
                            />
                            <button
                                className="btn btn-lg btn--blue"
                                type="submit"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </>
            )}
            <div className="speed-dial" onClick={handleDisplay}>
                <i className="icon fa-solid fa-envelope"></i>
            </div>
        </>
    );
}

export default SpeedDial;
