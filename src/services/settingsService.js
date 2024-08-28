// src/services/settingsService.js
import axios from "axios";

const API_URL = "https://cartas-app-1.onrender.com"; // Ajuste o URL da API conforme necessário

const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Obter informações do perfil
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    throw error;
  }
};

// Atualizar perfil
export const updateUserProfile = async (data) => {
  try {
    const response = await axios.put(`${API_URL}/me`, data, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error.message);
    throw error;
  }
};

// Atualizar senha
export const updatePassword = async (data) => {
  try {
    const response = await axios.put(
      `${API_URL}/user/password`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error.message);
    throw error;
  }
};

// Excluir conta
export const deleteUserAccount = async () => {
  try {
    await axios.delete(`${API_URL}/me`, getAuthConfig());
  } catch (error) {
    console.error("Error deleting account:", error.message);
    throw error;
  }
};
