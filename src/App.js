import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import SpeedDial from "./components/email/SpeedDial";
import GetData from "./services/getData";

import RiseLoader from "react-spinners/RiseLoader";

function App() {
    const { loading, userData, projectsData } = GetData();

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
                        <UserCard userData={userData} />
                        <Education />
                        <Hobbies />
                    </div>
                    <div className="board">
                        <SkillsCard />
                        <Projects projectsData={projectsData} />
                    </div>
                    <SpeedDial />
                </>
            )}
        </div>
    );
}

export default App;
