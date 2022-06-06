import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import SpeedDial from "./components/email/SpeedDial";
import GetData from "./services/getData";

function App() {
    const { loading, userData, projectsData } = GetData();

    return (
        <div className="container">
            {!loading && (
                <>
                    <div className="sidebar">
                        <UserCard />
                        <Education />
                        <Hobbies />
                    </div>
                    <div className="board">
                        <SkillsCard />
                        <Projects />
                    </div>
                    <SpeedDial />
                </>
            )}
        </div>
    );
}

export default App;
