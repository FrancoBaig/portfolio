import React, { useLayoutEffect, useState, useRef } from "react";
import Filter from "./Filter";
import getIconFromTag from "../../helper/getIconFromTag";
import getPaginationButtons from "../../helper/getPaginationButtons";

function Projects({ projectsData, scrollToSection }) {
    const data = projectsData;
    const [page, setPage] = useState(0);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(data);
    const [buttonsText, setButtonsText] = useState(
        getPaginationButtons(filteredProjects)
    );
    const [active, setActive] = useState(1);
    const lastPage = buttonsText[buttonsText.length - 1];
    const projectRef = useRef(null);

    useLayoutEffect(() => {
        handleSetPages(filteredProjects, page);
        setButtonsText(getPaginationButtons(filteredProjects));

        /* pagination - active page */
        setActive(page + 1);
    }, [page, filteredProjects]);

    useLayoutEffect(() => {
        addIcon();
    }, [projects]);

    const addIcon = () => {
        const projects = document.getElementsByClassName("fa-brands");
        for (let i = 0; i < projects.length; i++) {
            let tag = projects[i].attributes.tag.value;
            let iconForTag = getIconFromTag(tag);
            projects[i].classList.add(iconForTag);
        }
    };

    const handleSetPages = (data, page) => {
        const per_page = 5;
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
                break;
        }
        scrollToSection(projectRef);
    };

    const handleFilter = (e) => {
        const filter = e.target.id;
        if (e.target.id === "All") {
            return setFilteredProjects(data);
        }
        setFilteredProjects(
            data.filter((elem) => elem.filter.includes(filter))
        );
    };

    return (
        <div className="project-container" ref={projectRef}>
            <Filter
                handleFilter={handleFilter}
                title="Projects"
                optionsArray={["All", "Full-Stack", "Front-end", "Responsive"]}
                setPage={setPage}
            />
            <div className="projects">
                {projects.map((proj) => (
                    <div className="project paper" key={proj.id}>
                        <a
                            className="project__thumbnail"
                            href="http://placehold.com"
                        >
                            <img
                                className="project__image"
                                src={proj.image}
                                alt={proj.name}
                            />
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
                                <a href={proj.demo} target="_black">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn--blue"
                                    >
                                        Demo
                                    </button>
                                </a>

                                <a href={proj.code} target="_black">
                                    <button
                                        type="button"
                                        className="btn btn-lg btn--border-blue"
                                    >
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {active > 1 && (
                    <button
                        className={`btn btn--pagination`}
                        id={"left"}
                        onClick={(e) => handlePagination(e)}
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                )}
                {buttonsText.map((btn) => (
                    <button
                        className={`btn btn--pagination ${
                            active === btn ? "btn--blue" : ""
                        }`}
                        id={btn}
                        key={btn}
                        onClick={(e) => handlePagination(e)}
                    >
                        {btn}
                    </button>
                ))}
                {active !== lastPage && (
                    <button
                        className="btn btn--pagination"
                        id={"right"}
                        onClick={(e) => handlePagination(e)}
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Projects;
