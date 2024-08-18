import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import Dashboard from "./components/Dashboard";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const AppRoutes = () => {
  const isLoggedIn = () => {
    return (
      localStorage.getItem("userId") !== null &&
      localStorage.getItem("token") !== null
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              isLoggedIn() ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/dashboard/tasks"
            element={
              isLoggedIn() ? <TasksPage /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              isLoggedIn() ? <SettingsPage /> : <Navigate to="/login" replace />
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
