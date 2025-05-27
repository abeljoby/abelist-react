import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';
import {projects} from '../data/projects';
import ProjectTile from '../components/ProjectTile';

function Projects() {
const pProjects = projects.filter((project) => project.type === "projects");
return (
    <>
        <Header></Header>
        <section>
            <h1><Link to="../projects">Latest Projects →</Link></h1>
            <div className="projects">
                {pProjects.map((project) => (
                    <ProjectTile key={project.id} project={project} title={project.title}/>
                ))}
            </div>
        </section>
    </>
)
}

export default Projects
