// src/services/taskService.js
import axios from "axios";
import { getAuthConfig } from "../services/UserService"; // Ajuste o caminho conforme necessário

const API_URL = "http://localhost:5000"; // Ajuste o URL da API conforme necessário

export const getTasksByProject = async (projectId) => {
  try {
    const response = await axios.get(
      `${API_URL}/projects/${projectId}/tarefas`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    throw error;
  }
};
