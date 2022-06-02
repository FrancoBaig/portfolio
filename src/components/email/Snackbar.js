import React from "react";

function Snackbar({ text, display, mode = "snackbar--success" }) {
    return (
        <div
            className={`snackbar ${display ? "snackbar--active" : ""} ${mode}`}
        >
            {text}
        </div>
    );
}

export default Snackbar;
