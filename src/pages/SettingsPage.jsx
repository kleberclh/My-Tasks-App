// src/pages/SettingsPage.jsx
import { useEffect, useState } from "react";
import {
  getUserProfile,
  updateUserProfile,
  updatePassword,
  deleteUserAccount,
} from "../services/settingsService";

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({ name: "", email: "" });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setProfileData({ name: userProfile.name, email: userProfile.email });
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateUserProfile(profileData);
      setShowProfileModal(false);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(passwordData);
      setShowPasswordModal(false);
    } catch (error) {
      console.error("Error updating password:", error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUserAccount();
      // Redirecionar para a página de login ou outro comportamento desejado
    } catch (error) {
      console.error("Error deleting account:", error.message);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Configurações</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowProfileModal(true)}
      >
        Atualizar Perfil
      </button>

      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowPasswordModal(true)}
      >
        Alterar Senha
      </button>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowDeleteModal(true)}
      >
        Excluir Conta
      </button>

      {/* Modal Atualizar Perfil */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Atualizar Perfil</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Nome"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
            />
            <input
              type="email"
              className="border p-2 w-full mb-4"
              placeholder="Email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setShowProfileModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleUpdateProfile}
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Alterar Senha */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Alterar Senha</h2>
            <input
              type="password"
              className="border p-2 w-full mb-4"
              placeholder="Senha Atual"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  currentPassword: e.target.value,
                })
              }
            />
            <input
              type="password"
              className="border p-2 w-full mb-4"
              placeholder="Nova Senha"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  newPassword: e.target.value,
                })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setShowPasswordModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleUpdatePassword}
              >
                Alterar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Excluir Conta */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Excluir Conta</h2>
            <p className="mb-4">Tem certeza de que deseja excluir sua conta?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-red-700 text-white px-4 py-2 rounded-md"
                onClick={handleDeleteAccount}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
