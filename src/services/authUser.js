import axios from 'axios';

// const API_URL = "http://localhost:5000";
const API_URL = "https://cartas-app-1.onrender.com";

export const fetchUserName = async () => {
  try {
    const token = localStorage.getItem("token"); // Assumindo que você armazena o token no localStorage
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.name; // Retorna o nome do usuário
  } catch (error) {
    console.error("Error fetching user name:", error);
    return null;
  }
};