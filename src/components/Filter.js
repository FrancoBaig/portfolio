import React, { useState } from "react";

function Filter({ title, optionsArray }) {
    const [active, setActive] = useState(optionsArray[0]);

    return (
        <div className="filter paper">
            <h2 className="filter__title">
                {title} ({optionsArray.length})
            </h2>
            <div className="filter__buttons">
                {optionsArray.map((item) => (
                    <button
                        type="button"
                        className={`btn ${active === item ? "btn--blue" : ""}`}
                        key={item}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;
