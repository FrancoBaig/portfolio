import React from "react";
import moment from "moment";

function Education({ educationData }) {
    const getDate = (seconds, isCurrent = false) => {
        let result = moment(seconds * 1000).format("MMM YYYY");

        if (isCurrent) {
            result += " - Current";
        }

        return result;
    };

    return (
        <div className="education paper">
            <h4 className="education__title">Education</h4>
            <div className="education__items">
                {educationData.map((item) => (
                    <div className="education__item" key={item.id}>
                        <a className="education__thumbnail" href={item.link}>
                            <img
                                className="education__image"
                                src={item.image}
                                alt={item.title}
                            />
                        </a>
                        <div className="education__texts">
                            <h5 className="education__date">
                                {getDate(item.date.seconds, item.isCurrent)}
                            </h5>
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
