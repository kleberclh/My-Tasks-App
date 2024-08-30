/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import background from "../assets/background.jpeg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = await login(email, password);
      if (userId) {
        localStorage.setItem("userId", userId);

        // Adicione um atraso para diagnóstico
        setTimeout(() => {
          navigate("/dashboard");
        }, 100);
      } else {
        console.error("Login falhou");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#1F2937] to-gray-900">
      {/* Seção do formulário à esquerda */}
      <div className="flex flex-col justify-center w-full max-w-lg p-10 bg-white/10 backdrop-blur-md rounded-r-2xl shadow-2xl border border-white/20">
        <h2 className="text-4xl font-extrabold text-white mb-8">
          Seja Bem-Vindo!
        </h2>
        <p className="text-white mb-10">
          Realize seu login com as suas credenciais
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-2 text-gray-200"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-400 rounded-md bg-gray-900 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2 text-gray-200"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-400 rounded-md bg-gray-900 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-[#1F2937]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1F2937] to-gray-700 text-white py-3 rounded-md text-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
          <div className="mt-6 text-center">
            <Link
              to="/register"
              className="text-[#ffffff] hover:text-gray-500 transition-colors duration-300"
            >
              <p>Você não tem uma conta? Cadastre-se hoje!</p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/dashboard"
              className="text-[#ffffff] hover:text-gray-500 transition-colors duration-300"
            >
              <p>
                Se você realizou o login e não foi redirecionado ao Dashboard,
                clique aqui!
              </p>
            </Link>
          </div>
        </form>
      </div>

      {/* Seção da imagem à direita */}
      <div className="flex-grow hidden md:flex justify-center items-center p-10">
        <img
          src={background}
          alt="Login Illustration"
          className="w-full h-auto object-cover rounded-l-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LoginForm;
