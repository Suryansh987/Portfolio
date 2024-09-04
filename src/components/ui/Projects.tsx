'use client'

import { useState, useEffect } from "react";

interface Project {
    title: string;
    description: string;
    techUsed: string[];
    linkToProject: string;
    projectImage: string;
  }

function Projects() {
    const [Projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
          const response = await fetch('/projects.json');
          const data = await response.json();
          setProjects(data);
        };
    
        fetchProjects();
      }, []);

  return (

    <div className="p-4">
      <h1 className="text-3xl flex justify-center sm:text-4xl font-bold text-gray-900 mb-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div
              className="h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.projectImage})` }}
            ></div>
            <div className="p-4">
              <h6 className="text-xl font-semibold mb-2">{project.title}</h6>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap mt-2">
                {project.techUsed.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 m-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={project.linkToProject}
                  className="inline-block bg-slate-800 text-white text-sm px-4 py-2 rounded-full hover:bg-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
