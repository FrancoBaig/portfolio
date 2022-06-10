import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Education({ educationData }) {
    const [seeMore, setSeeMore] = useState(false);
    const [educationLength, setEducationLength] = useState(3);
    const getDate = (seconds, isCurrent = false) => {
        let result = moment(seconds * 1000).format("MMM YYYY");

        if (isCurrent) {
            result += " - Current";
        }

        return result;
    };

    const handleShowMore = () => {
        setSeeMore(!seeMore);

        if (seeMore) {
            setEducationLength(3);
        } else {
            setEducationLength(educationData.length - 1);
        }
    };

    return (
        <div className="education paper ">
            <h4 className="education__title">Education</h4>
            <div className="education__items ">
                {educationData.slice(0, educationLength).map((item) => (
                    <Link to={`/education/${item.title}`} key={item.id}>
                        <div className="education__item scale">
                            <img
                                className="education__image"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="education__texts">
                                <h5 className="education__date">
                                    {getDate(item.date.seconds, item.isCurrent)}
                                </h5>
                                <h3 className="education__text">
                                    {item.title}
                                </h3>
                                {/* <p className="education__description">
                                    {item.description}
                                </p> */}
                            </div>
                        </div>
                    </Link>
                ))}
                <button className="btn-icon" onClick={handleShowMore}>
                    <i
                        className={`btn-icon__icon fa-solid fa-angle-${
                            seeMore ? "up" : "down"
                        }`}
                    ></i>
                    <p>{seeMore ? "See Less" : "See More"}</p>
                </button>
            </div>
        </div>
    );
}

export default Education;
