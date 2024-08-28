/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { getUserDetails, updatePassword } from "../services/UserService";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUserDetails();
        setUser(userData);
      } catch (error) {
        setErrorMessage("Erro ao carregar as informações do usuário");
      }
    };
    fetchUserDetails();
  }, []);
  const handlePasswordReset = async () => {
    try {
      await updatePassword(currentPassword, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      setErrorMessage("");
      alert("Senha atualizada com sucesso!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Informações do Usuário</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Nome
          </label>
          <input
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="name"
            value={user.name}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            value={user.email}
            readOnly
          />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Redefinir Senha</h2>
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="currentPassword">
            Senha Atual
          </label>
          <input
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="newPassword">
            Nova Senha
          </label>
          <input
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handlePasswordReset}
        >
          Redefinir Senha
        </button>
      </div>
    </div>
  );
};

export default UserPage;
