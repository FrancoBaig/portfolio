import React from "react";
import { Line } from "rc-progress";

const skills = [
    {
        title: "React",
        percent: 75
    },
    {
        title: "Javascript",
        percent: 80
    },
    {
        title: "CSS",
        percent: 85
    },
    {
        title: "HTML",
        percent: 85
    }
];

function SkillsCards() {
    return (
        <div className="skills paper">
            <h4 className="skills__title">Front end</h4>
            <div className="skills__items">
                {skills.map((elem) => (
                    <div className="skills__item" key={elem.title}>
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
