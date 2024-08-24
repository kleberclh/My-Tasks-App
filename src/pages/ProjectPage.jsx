import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { getProjects } from "../services/projectService";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        if (Array.isArray(fetchedProjects)) {
          setProjects(fetchedProjects);
        } else {
          console.error("Fetched projects is not an array:", fetchedProjects);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    // Navegar para a página de tarefas do projeto
    navigate(`/dashboard/projects/${projectId}/tarefas`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Projetos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            onClick={() => handleProjectClick(project.id)} // Adicionar o evento onClick
          >
            <h3 className="text-xl font-semibold text-center">
              ID: {project.id}
            </h3>
            <h3 className="text-xl font-semibold text-center">
              {project.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
