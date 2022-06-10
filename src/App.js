import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import SpeedDial from "./components/email/SpeedDial";
import ScrollToTop from "./components/ScrollToTop";
import OpenWindow from "./components/OpenWindow";

import RiseLoader from "react-spinners/RiseLoader";
import { useData } from "./services/DataProvider";

import Content from "./services/Content";

function App() {
    const { loading, user, projects, skills, education, hobbies } = useData();
    const appRef = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // setMyWindow(window.open("", "", "width=200, height=100"));
    }, []);

    if (loading) {
        return (
            <div className="spinner">
                <RiseLoader color={"#2f80ed"} size={20} margin={3} />;
            </div>
        );
    }

    const handlePrueba = (e) => {
        let size = {
            width: 0,
            height: 0
        };
        let device = e.target.id;

        switch (device) {
            case "mobile":
                size = {
                    width: 450,
                    height: 700
                };
                break;
            default:
                break;
        }

        let myExternalWindow = window.open(
            "https://country-quiz-fb.netlify.app/",
            "resizable",
            "resizable"
        );

        myExternalWindow.resizeTo(size.width, size.height);
    };

    return (
        <>
            <div className="container">
                {!loading && (
                    <>
                        <div className="sidebar">
                            <UserCard userData={user} />
                            <Education educationData={education} />
                            <Hobbies hobbies={hobbies} />
                        </div>
                        <div className="board">
                            <SkillsCard skills={skills} />
                            <Projects
                                projectsData={projects}
                                scrollToSection={scrollToSection}
                            />
                        </div>
                        <ScrollToTop />
                        <SpeedDial />
                    </>
                )}
            </div>
            <OpenWindow />
        </>
    );
}

export default App;
