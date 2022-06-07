import React, { useState } from "react";

function Filter({ title, optionsArray, handleFilter, setPage }) {
    const [active, setActive] = useState("All");

    const handleClick = (e) => {
        handleFilter(e);
        setActive(e.target.id);
        setPage(0);
    };

    return (
        <div className="filter paper">
            <h2 className="filter__title">{title}</h2>
            <div className="filter__buttons">
                {optionsArray.map((item) => (
                    <button
                        type="button"
                        className={`btn ${active === item ? "btn--blue" : ""}`}
                        key={item}
                        id={item}
                        onClick={(e) => handleClick(e)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;
