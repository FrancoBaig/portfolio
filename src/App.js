import React, { useEffect } from "react";
import "./App.css";
import UserCard from "./components/user/UserCard";
import SkillsCard from "./components/user/SkillsCard";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Hobbies from "./components/hobbies/Hobbies";
import Mail from "./components/email/Mail";
import ScrollToTop from "./components/ScrollToTop";
import OpenWindow from "./components/OpenWindow";

import RiseLoader from "react-spinners/RiseLoader";
import { useData } from "./services/DataProvider";
import orderEducation from "./helper/orderEducation";

function App() {
    const { loading, user, projects, skills, education, hobbies } = useData();

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    useEffect(() => {}, []);

    if (loading) {
        return (
            <div className="spinner">
                <RiseLoader color={"#2f80ed"} size={20} margin={3} />;
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <OpenWindow />
                {!loading && (
                    <>
                        <div className="sidebar">
                            <UserCard userData={user} />
                            <Education
                                educationData={orderEducation(education)}
                            />
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
                        <Mail />
                    </>
                )}
            </div>
        </>
    );
}

export default App;
