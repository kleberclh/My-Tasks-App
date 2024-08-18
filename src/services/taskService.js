import axios from "axios";

const API_URL = "https://cartas-app-1.onrender.com";

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
    const response = await axios.post(
      `${API_URL}/users/${userId}/tasks`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          ...getAuthConfig().headers,
        },
      }
    );
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
  const userId = getUserId();
  if (!userId) {
    console.error("User ID is missing");
    return;
  }

  try {
    const response = await axios.get(
      `${API_URL}/users/${userId}/tasks`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
    throw error;
  }
};
