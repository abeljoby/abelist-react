import Header from '../components/Header';
import './Home.css';
import {projects} from '../data/projects';
import ProjectTile from '../components/ProjectTile';

function Home() {
  return (
    <>
      <Header></Header>
      <section>
        <h1><a href="../projects">Latest Projects →</a></h1>
        <div class="projects">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
