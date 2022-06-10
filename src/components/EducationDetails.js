import React, { useLayoutEffect, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../services/DataProvider";
import moment from "moment";
import Content from "../services/Content";
import ReactMarkdown from "react-markdown";
import RiseLoader from "react-spinners/RiseLoader";
import SpeedDial from "./email/SpeedDial";

function EducationDetails() {
    const { loading, education } = useData();
    const { title } = useParams();
    const [item] = education.filter((item) => item.title === title);
    const { loading: dataLoading, data, getData } = Content();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    useEffect(() => {
        if (!loading && education.length > 0) {
            getData(item.plan);
            getEducationIcon(item.type);
        }
    }, [loading]);

    const getEducationIcon = (type) => {
        const obj = document.getElementsByClassName("fa-solid")[0];
        let icon = "";
        console.log(type);
        switch (type.toLowerCase()) {
            case "course":
                icon = "fa-video";
                break;
            case "book":
                icon = "fa-book";
                break;
            case "career":
                icon = "fa-graduation-cap";
                break;
            default:
                icon = "fa-lines-leaning";
        }

        obj.classList.add(icon);
    };

    if (loading) {
        return (
            <div className="spinner">
                <RiseLoader color={"#2f80ed"} size={15} margin={3} />;
            </div>
        );
    }

    const getDate = (seconds, isCurrent = false) => {
        let result = moment(seconds * 1000).format("MMM YYYY");

        if (isCurrent) {
            result += " - Current";
        }

        return result;
    };

    const getTypeIcon = (e) => {};

    return (
        <>
            <div className="education paper m-3">
                <h4 className="education__title mt-2">{item.title}</h4>
                <div className="education__item education__item--details">
                    <img
                        className="education__image"
                        src={item.image}
                        alt={item.title}
                    />
                    <div className="education__text--details">
                        <div className="education__type">
                            <div className="pill">
                                <i className="fa-solid "></i>
                                {item.type}
                            </div>
                            <div className="pill">
                                <i className="fa-regular fa-calendar"></i>
                                {getDate(item.date.seconds, item.isCurrent)}
                            </div>
                        </div>
                        <p className="education__description">
                            {item.description}
                        </p>
                    </div>
                </div>
                {dataLoading && (
                    <div className="spinner">
                        <RiseLoader color={"#2f80ed"} size={15} margin={3} />;
                    </div>
                )}

                {!dataLoading && data && (
                    <div className="education__syllabus">
                        <ReactMarkdown children={data} />
                    </div>
                )}
                <button
                    type="button"
                    className="btn btn-lg btn--blue"
                    style={{ marginTop: "4rem" }}
                    onClick={() => navigate(-1)}
                >
                    Go back
                </button>
            </div>
            <SpeedDial />
        </>
    );
}

export default EducationDetails;
