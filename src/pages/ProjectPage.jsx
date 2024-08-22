import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch project data from API or local storage
    const fetchedProjects = [
      {
        id: 1,
        name: "Project 1",
        tasks: [
          { id: 1, name: "Task 1" },
          { id: 2, name: "Task 2" },
        ],
      },
      {
        id: 2,
        name: "Project 2",
        tasks: [
          { id: 3, name: "Task 3" },
          { id: 4, name: "Task 4" },
        ],
      },
      {
        id: 3,
        name: "Project 3",
        tasks: [
          { id: 5, name: "Task 5" },
          { id: 6, name: "Task 6" },
          { id: 6, name: "Task 6" },
        ],
      },
    ];
    setProjects(fetchedProjects);
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}/tasks`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            onClick={() => handleProjectClick(project)}
          >
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.tasks.length} tasks</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
