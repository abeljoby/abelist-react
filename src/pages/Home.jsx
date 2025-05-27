import Header from '../components/Header';
import './Home.css';
import {projects} from '../data/projects';
import ProjectTile from '../components/ProjectTile';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header></Header>
      <section>
        <h1><Link to="../projects">Latest Projects →</Link></h1>
        <div className="projects">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} title={`.../${project.type}/${project.title}`}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
