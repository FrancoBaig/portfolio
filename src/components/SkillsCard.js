import React from "react";
import { Line } from "rc-progress";

function SkillsCards({ skills }) {
    return (
        <div className="skills paper">
            <h4 className="skills__title">Front end</h4>
            <div className="skills__items">
                {skills.map((elem) => (
                    <div className="skills__item" key={elem.id}>
                        <p className="skills__text">{elem.title}</p>
                        <Line
                            percent={elem.percent}
                            strokeWidth={2}
                            trailWidth={2}
                            strokeColor="#2F80ED"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCards;
