import "./App.css";
import UserCard from "./components/UserCard";
import SkillsCard from "./components/SkillsCard";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

function App() {
    return (
        <div className="container">
            <UserCard />
            <SkillsCard />
            <Education />
            <Projects />
            <Hobbies />
        </div>
    );
}

export default App;
