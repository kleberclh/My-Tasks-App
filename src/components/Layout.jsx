import { Outlet, Link, useNavigate } from "react-router-dom";
import Exit, { Dash, Report, Settings, Tasks } from "./ui/Icons";

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
          <nav className="flex flex-col gap-6">
            <Link to="/dashboard/informations">
              <li className=" flex">
                <div className="mr-4">
                  <Dash />
                </div>
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to="/dashboard/tasks">
              <li className=" flex">
                <div className="mr-4">
                  <Tasks />
                </div>
                <p>Tarefas</p>
              </li>
            </Link>
            <Link to="/dashboard/settings">
              <li className=" flex items-center">
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
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
