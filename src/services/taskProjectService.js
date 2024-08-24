// src/services/taskProjectService.js
import axios from "axios";
import { getAuthConfig } from "../services/UserService"; // Ajuste o caminho conforme necessário

const API_URL = "http://localhost:5000"; // Ajuste o URL da API conforme necessário

// Obtém as tarefas de um projeto específico
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

// Cria uma nova tarefa para um projeto específico
export const createTask = async (projectId, task) => {
  try {
    const response = await axios.post(
      `${API_URL}/projects/${projectId}/tarefas`,
      task,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error.message);
    throw error;
  }
};

// Atualiza uma tarefa existente em um projeto específico
export const updateTask = async (projectId, taskId, task) => {
  try {
    const response = await axios.put(
      `${API_URL}/projects/${projectId}/tarefas/${taskId}`,
      task,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error.message);
    throw error;
  }
};

// Deleta uma tarefa existente em um projeto específico
export const deleteTask = async (projectId, taskId) => {
  try {
    await axios.delete(
      `${API_URL}/projects/${projectId}/tarefas/${taskId}`,
      getAuthConfig()
    );
  } catch (error) {
    console.error("Error deleting task:", error.message);
    throw error;
  }
};
