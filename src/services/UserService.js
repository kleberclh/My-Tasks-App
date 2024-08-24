import axios from "axios";

const API_URL = "http://localhost:5000";

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
    const response = await axios.put(
      `${API_URL}/users/${userId}`,
      { password: currentPassword, newPassword },
      authConfig
    );

    console.log("Response:", response.data);
    if (response.status === 200) {
      return "Senha atualizada com sucesso!";
    } else {
      throw new Error(`Erro ao atualizar a senha: ${response.data.message}`);
    }
  } catch (error) {
    console.error("Error updating password:", error);
    let errorMessage;
    if (error.response) {
      errorMessage = `Erro ${error.response.status}: ${error.response.data.message}`;
    } else {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

export const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
