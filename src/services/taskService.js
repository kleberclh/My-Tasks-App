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

export const createTask = async (data) => {
  const userId = getUserId();
  if (!userId) {
    console.error("User ID is missing");
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/tasks`, data, {
      headers: {
        "Content-Type": "application/json",
        ...getAuthConfig().headers,
      },
    });
    console.log("Server response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating task:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getTasks = async () => {
  try {
    await axios.get(`${API_URL}/me`, getAuthConfig());

    const tasksResponse = await axios.get(`${API_URL}/tasks`, getAuthConfig());
    return tasksResponse.data;
  } catch (error) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Atualizado para incluir o ID da tarefa
export const updateTask = async (taskId, updatedTask) => {
  try {
    console.log("Updating task:", { taskId, updatedTask }); // Adicione este log
    const response = await axios.put(
      `${API_URL}/tasks/${taskId}`,
      updatedTask,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error.message);
    throw error;
  }
};

// Novo método para deletar tarefa
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/tasks/${taskId}`, getAuthConfig());
  } catch (error) {
    console.error("Error deleting task:", error.message);
    throw error;
  }
};
