import axios from "axios";

const API_URL = "http://localhost:5000";
// const API_URL = "https://www.api.waxystore.shop";

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/registrar`, {
    name,
    email,
    password,
  });
  localStorage.setItem("userId", response.data.id);
  return response.data;
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data.token) {
      // Salvar o token no localStorage
      localStorage.setItem("token", response.data.token);

      // Salvar o ID do usuário no localStorage
      localStorage.setItem("userId", response.data.userId);

      // Retornar um objeto com o ID do usuário e o token
      return response.data.userId;
    } else {
      throw new Error("Falha no login");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getUsers = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/users`, config);
  return response.data;
};

export const getUser = async (id) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/users/${id}`, config);
  return response.data;
};
