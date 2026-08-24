import { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>My Projects</h2>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '20px' }}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects match your search.</p>
      )}
    </div>
  );
};

export default ProjectsPage;