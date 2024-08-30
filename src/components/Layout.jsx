import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Exit, { Dash, Project, Report, Settings, Tasks, User } from "./ui/Icons";

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Menu lateral */}
      <div
        className={`bg-gray-800 text-white fixed top-0 left-0 h-full w-64 p-6 flex flex-col justify-between transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard">
              <h2 className="text-xl font-bold">My Dashboard</h2>
            </Link>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <Link to="/dashboard/informations">
              <li className="flex">
                <div className="mr-4">
                  <Dash />
                </div>
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to="/dashboard/tasks">
              <li className="flex">
                <div className="mr-4">
                  <Tasks />
                </div>
                <p>Tarefas</p>
              </li>
            </Link>
            <Link to="/dashboard/projects">
              <li className="flex items-center">
                <div className="mr-4">
                  <Project />
                </div>
                Meus Projetos
              </li>
            </Link>
            <Link to="/dashboard/settings">
              <li className="flex items-center">
                <div className="mr-4">
                  <Settings />
                </div>
                Configurações
              </li>
            </Link>
            <Link to="/dashboard/report">
              <li className="flex items-center">
                <div className="mr-4">
                  <Report />
                </div>
                Relatórios
              </li>
            </Link>

            <Link to="/dashboard/myaccount">
              <li className="flex items-center">
                <div className="mr-4">
                  <User />
                </div>
                Minha Conta
              </li>
            </Link>
          </nav>
        </div>
        <div>
          <li className="mb-5 flex">
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700 flex"
            >
              <div className="mr-4">
                <Exit />
              </div>
              Logout
            </button>
          </li>
        </div>
      </div>

      {/* Botão para abrir o menu em mobile */}
      <button
        className="md:hidden text-black fixed top-6 left-6 z-50"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Conteúdo principal */}
      <div className="flex-1 ml-0 md:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
