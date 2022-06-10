import React, { useEffect } from "react";

function Snackbar({ display, setDisplay, mode }) {
    /*
    Modes
    mode = "success"
    mode = "error"

    Styles
    mode = "success" -> "snackbar-success"
    mode = "error" -> "snackbar-error"

    Icon
    mode = "success" -> fa-circle-check (font awesome)
    mode = "success" -> fa-circle-xmark (font awesome)
    */

    const text = {
        success: "email sent successfully!",
        error: "There is an error, please try again later"
    };

    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setDisplay(false);
            }, 3000);
        }
    }, [display]);

    return (
        <div
            className={`snackbar ${display ? "snackbar--active" : ""} ${
                mode === "success" ? "snackbar-success" : "snackbar--error"
            }`}
        >
            <i
                className={`fa-regular ${
                    mode === "success" ? "fa-circle-check" : "fa-circle-xmark"
                }`}
            ></i>
            {mode === "success" ? text.success : text.error}
        </div>
    );
}

export default Snackbar;
