import React, { useRef } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import SpeedDial from "./components/email/SpeedDial";
import GetData from "./services/getData";
import ScrollToTop from "./components/ScrollToTop";

import RiseLoader from "react-spinners/RiseLoader";

function App() {
    const { loading, user, projects, skills, education, hobbies } = GetData();
    const appRef = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    if (loading) {
        return (
            <div className="spinner">
                <RiseLoader color={"#2f80ed"} size={20} margin={3} />;
            </div>
        );
    }

    return (
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
    );
}

export default App;
