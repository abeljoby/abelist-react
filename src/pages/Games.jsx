import Header from '../components/Header';
import './Home.css';
import {projects} from '../data/projects';
import ProjectTile from '../components/ProjectTile';

function Games() {
const gameProjects = projects.filter((project) => project.type === "games");
return (
    <>
        <Header></Header>
        <section>
            <h1><a href="../games">Latest Games →</a></h1>
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
