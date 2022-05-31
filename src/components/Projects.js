import React, { useLayoutEffect } from "react";
import Filter from "./Filter";
import Projectos from "../data/Projectos.json";

function Projects() {
    const data = Projectos;

    useLayoutEffect(() => {
        addIcon();
    }, []);

    const switchTag = (tag) => {
        switch (tag) {
            case "HTML":
                return "fa-html5";
            case "CSS":
                return "fa-css3-alt";
            case "SCSS":
                return "fa-sass";
            case "React":
                return "fa-react";
            default:
                break;
        }
    };

    const addIcon = () => {
        const projects = document.getElementsByClassName("fa-brands");
        for (let i = 0; i < projects.length; i++) {
            let tag = projects[i].attributes.tag.value;
            let iconForTag = switchTag(tag);
            projects[i].classList.add(iconForTag);
        }
    };

    return (
        <div className="project-container">
            <Filter
                title="Proyects"
                optionsArray={["All", "React", "HTML/CSS/JS"]}
            />
            <div className="projects">
                {data.map((proj) => (
                    <div className="project paper" key={proj.id}>
                        <a
                            className="project__thumbnail"
                            href="http://placehold.com"
                        >
                            <img
                                className="project__image"
                                src="https://via.placeholder.com/322x274.png"
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
                                In this project, I work with HTML and CSS to
                                create a responsive page . The design is from
                                devchallenge.io. Donec aliquam est dui, vel
                                vestibulum diam sollicitudin id. Quisque feugiat
                                malesuada molestie.
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
        </div>
    );
}

export default Projects;
