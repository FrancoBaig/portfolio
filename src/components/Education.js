import React from "react";

const education = [
    {
        id: 1,
        title: "Ingeniería en Sistemas",
        image: "https://via.placeholder.com/84x84.png",
        link: "https://www.institucional.frc.utn.edu.ar/sistemas/",
        description:
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie",
        date: "2021 - Current"
    },
    {
        id: 1,
        title: "Ingeniería en Sistemas",
        image: "https://via.placeholder.com/84x84.png",
        link: "https://www.institucional.frc.utn.edu.ar/sistemas/",
        description:
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie",
        date: "2021 - Current"
    },
    {
        id: 1,
        title: "Ingeniería en Sistemas",
        image: "https://via.placeholder.com/84x84.png",
        link: "https://www.institucional.frc.utn.edu.ar/sistemas/",
        description:
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie",
        date: "2021 - Current"
    }
];

function Education() {
    return (
        <div className="education paper">
            <h4 className="education__title">Education</h4>
            <div className="education__items">
                {education.map((item) => (
                    <div className="education__item" key={item.id}>
                        <a className="education__thumbnail" href={item.link}>
                            <img
                                className="education__image"
                                src={item.image}
                                alt={item.title}
                            />
                        </a>
                        <div className="education__texts">
                            <h5 className="education__date">{item.date}</h5>
                            <h3 className="education__text">{item.title}</h3>
                            <p className="education__description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
