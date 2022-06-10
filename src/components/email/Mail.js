import React, { useState } from "react";
import Snackbar from "./Snackbar";
import emailjs from "emailjs-com";

function Mail() {
    const [display, setDisplay] = useState(false);
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarMode, setSnackbarMode] = useState(null);

    const toggleDisplay = () => {
        setDisplay((prev) => !prev);
    };

    const sendEmail = (e) => {
        toggleDisplay();
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAIL_KEY
            )
            .then((res) => {
                setSnackbar(true);
                setSnackbarMode("success");
            })
            .catch((err) => {
                setSnackbar(true);
                setSnackbarMode("error");
            });
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
                <div className="icon-x" onClick={toggleDisplay}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <h3 className="chat__title">Contact me!</h3>
                <form className="chat__form" onSubmit={sendEmail}>
                    <label className="label" htmlFor="email" required>
                        Your email:
                    </label>
                    <input className="input" type="email" name="email" />

                    <label className="label" htmlFor="message"></label>
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Send me a message"
                        required
                    />

                    <input
                        className={`btn btn-lg btn--blue btn--100${
                            display ? "" : "btn--hidden"
                        }`}
                        type="submit"
                    />
                </form>
            </div>
            <div className="speed-dial" onClick={toggleDisplay}>
                <i className="icon fa-solid fa-envelope"></i>
            </div>
            <Snackbar
                display={snackbar}
                setDisplay={setSnackbar}
                mode={snackbarMode}
            />
        </>
    );
}

export default Mail;
