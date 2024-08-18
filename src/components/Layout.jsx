import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="bg-gray-800 text-white h-screen w-64 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard">
              <h2 className="text-xl font-bold">My Dashboard</h2>
            </Link>
          </div>
          <nav className="flex flex-col">
            <li className="mb-5">
              <Link to="/dashboard/tasks">Tarefas</Link>
            </li>
            <li className="mb-5">
              <Link to="/dashboard/settings">Configurações</Link>
            </li>
          </nav>
        </div>
        <div>
          <li className="mb-5">
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700"
            >
              Sair
            </button>
          </li>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
