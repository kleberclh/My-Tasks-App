import axios from "axios";

// const API_URL = "http://localhost:5000";
const API_URL = "https://www.api.waxystore.shop";

const getUserId = () => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    return userId;
  } else {
    console.error("userId not found in localStorage");
    return null;
  }
};

const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createProject = async (data) => {
  const userId = getUserId();
  if (!userId) {
    console.error("User ID is missing");
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/projects`, data, {
      headers: {
        "Content-Type": "application/json",
        ...getAuthConfig().headers,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating project:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getProjects = async () => {
  try {
    await axios.get(`${API_URL}/me`, getAuthConfig());

    const projectResponse = await axios.get(
      `${API_URL}/projects`,
      getAuthConfig()
    );

    if (Array.isArray(projectResponse.data)) {
      return projectResponse.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(
      "Erro ao buscar projetos:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateProject = async (projectId, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/projects/${projectId}`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating project:", error.message);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    await axios.delete(`${API_URL}/projects/${projectId}`, getAuthConfig());
  } catch (error) {
    console.error("Error deleting project:", error.message);
    throw error;
  }
};
