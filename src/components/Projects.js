import React, { useLayoutEffect, useState, useEffect } from "react";
import Filter from "./Filter";
import Projectos from "../data/Projectos.json";
import getIconFromTag from "../helper/getIconFromTag";

function Projects() {
    const data = Projectos;
    const [page, setPage] = useState(0);
    const [projects, setProjects] = useState([]);

    useLayoutEffect(() => {
        // handleSetPages(data, 1, 5);
    }, []);

    useLayoutEffect(() => {
        handleSetPages(data, page, 5);
    }, [page]);

    useLayoutEffect(() => {
        addIcon();
    }, [projects]);

    const handlePaginationButtons = () => {};

    const addIcon = () => {
        const projects = document.getElementsByClassName("fa-brands");
        for (let i = 0; i < projects.length; i++) {
            let tag = projects[i].attributes.tag.value;
            let iconForTag = getIconFromTag(tag);
            projects[i].classList.add(iconForTag);
        }
    };

    const handleSetPages = (data, page, per_page = 5) => {
        let start = page === 0 ? 0 : page * per_page;
        setProjects(data.slice(start, start + per_page));
    };

    const handlePagination = (e) => {
        let id = e.target.id;
        switch (id) {
            case "left":
                setPage(page - 1);
                break;
            case "right":
                setPage(page + 1);
                break;
            default:
                setPage(id - 1);
        }
    };

    return (
        <div className="project-container">
            <Filter
                title="Proyects"
                optionsArray={["All", "React", "HTML/CSS/JS"]}
            />
            <div className="projects">
                {projects.map((proj) => (
                    <div className="project paper" key={proj.id}>
                        <a
                            className="project__thumbnail"
                            href="http://placehold.com"
                        >
                            <img className="project__image" src={proj.image} />
                        </a>
                        <div className="project__body">
                            <div className="project__labels">
                                {proj.tags.map((tag) => (
                                    <span className="project__label" key={tag}>
                                        <i className="fa-brands" tag={tag}></i>
                                    </span>
                                ))}
                            </div>
                            <h2 className="project__title">{proj.title}</h2>
                            <p className="project__description">
                                {proj.description}
                            </p>
                            <div className="project__buttons">
                                <button
                                    type="button"
                                    className="btn btn-lg btn--blue"
                                >
                                    Demo
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-lg btn--border-blue"
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    className={`btn btn--pagination`}
                    id={"left"}
                    onClick={(e) => handlePagination(e)}
                >
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button
                    className="btn btn--pagination"
                    id={1}
                    onClick={(e) => handlePagination(e)}
                >
                    1
                </button>
                <button
                    className="btn btn--pagination"
                    id={2}
                    onClick={(e) => handlePagination(e)}
                >
                    2
                </button>
                <button
                    className="btn btn--pagination"
                    id={3}
                    onClick={(e) => handlePagination(e)}
                >
                    3
                </button>
                <button
                    className="btn btn--pagination"
                    id={"right"}
                    onClick={(e) => handlePagination(e)}
                >
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Projects;
