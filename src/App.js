import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

function App() {
    return (
        <div className="container">
            <div className="sidebar">
                <UserCard />
                <Education />
                <Hobbies />
            </div>
            <div className="board">
                <SkillsCard />
                <Projects />
            </div>
        </div>
    );
}

export default App;
