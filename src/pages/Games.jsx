import Header from '../components/Header';
import './Home.css';
import {projects} from '../data/projects';
import ProjectTile from '../components/ProjectTile';
import { Link } from 'react-router-dom';

function Games() {
const gameProjects = projects.filter((project) => project.type === "games");
return (
    <>
        <Header></Header>
        <section>
            <h1><Link to="../games">Latest Games →</Link></h1>
            <div className="projects">
                {gameProjects.map((project) => (
                    <ProjectTile key={project.id} project={project} title={project.title}/>
                ))}
            </div>
        </section>
    </>
)
}

export default Games
