import axios from "axios";

const API_URL = "http://localhost:5000";

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
    console.log("Server response:", response.data);
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
      // Faz uma requisição para /me, mas não usa o resultado aqui.
      await axios.get(`${API_URL}/me`, getAuthConfig());
  
      // Faz a requisição para /projects e retorna os dados
      const projectResponse = await axios.get(`${API_URL}/projects`, getAuthConfig());
  
      
      // Verifica se projectResponse.data é um array
      if (Array.isArray(projectResponse.data)) {
        return projectResponse.data;
      } else {
        
        return []; // Retorna um array vazio se a resposta não estiver no formato esperado
      }
    } catch (error) {
      console.error(
        "Erro ao buscar projetos:",
        error.response?.data || error.message
      );
      throw error;
    }
  };