import axios from "axios";

// const API_URL = "http://localhost:5000";
const API_URL = "https://cartas-app-1.onrender.com";

export const getUserDetails = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, getAuthConfig());
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user details:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updatePassword = async (currentPassword, newPassword) => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      throw new Error("Usuário não está logado");
    }

    const authConfig = getAuthConfig();
    await axios.put(
      `${API_URL}/users/${userId}`,
      { password: currentPassword, newPassword },
      authConfig
    );
    return "Senha atualizada com sucesso!";
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.response?.data || error.message;
    console.error("Error updating password:", errorMessage);
    throw new Error(`Erro ao atualizar a senha: ${errorMessage}`);
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
