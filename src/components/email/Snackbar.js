import React from "react";

function Snackbar({ text, display, mode = "snackbar--success" }) {
    return (
        <div
            className={`snackbar ${display ? "snackbar--active" : ""} ${mode}`}
        >
            <i class="fa-regular fa-circle-check"></i>
            {text}
        </div>
    );
}

export default Snackbar;
