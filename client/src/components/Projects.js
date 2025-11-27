import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;