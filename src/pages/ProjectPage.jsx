import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [projectData, setProjectData] = useState({ name: "" });
  const navigate = useNavigate();

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

  const handleCreateProject = async () => {
    try {
      const createdProject = await createProject(projectData);
      setProjects([...projects, createdProject]);
      setProjectData({ name: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error creating project:", error.message);
    }
  };

  const handleUpdateProject = async () => {
    try {
      const updatedProject = await updateProject(
        currentProject.id,
        projectData
      );
      setProjects(
        projects.map((project) =>
          project.id === currentProject.id ? updatedProject : project
        )
      );
      setProjectData({ name: "" });
      setCurrentProject(null);
      setEditModal(false);
    } catch (error) {
      console.error("Error updating project:", error.message);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error deleting project:", error.message);
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/dashboard/projects/${projectId}/tarefas`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Projetos</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Adicionar Projeto
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-center">
              {project.name}
            </h3>
            <div className="flex justify-around mt-4">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                onClick={() => {
                  setCurrentProject(project);
                  setProjectData({ name: project.name });
                  setEditModal(true);
                }}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => handleDeleteProject(project.id)}
              >
                Excluir
              </button>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
                onClick={() => handleProjectClick(project.id)}
              >
                Ver Tarefas
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Criar Novo Projeto</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Nome do Projeto"
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleCreateProject}
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

      {editModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Editar Projeto</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Nome do Projeto"
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setEditModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleUpdateProject}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
