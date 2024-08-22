import { useState, useEffect } from 'react';
import { fetchUserName } from '../services/authUser'; // Ajuste o caminho conforme necessário

export default function Dashboard() {
  const [name, setName] = useState(null);

  // Dados fictícios para o dashboard
  const [data] = useState({
    totalProjects: 10,
    totalTasks: 25,
    completedTasks: 15,
    pendingTasks: 10,
  });

  useEffect(() => {
    const fetchAndSetUserName = async () => {
      const userName = await fetchUserName();
      setName(userName);
    };
    fetchAndSetUserName();
  }, []);

  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-6">Olá, <strong>{name}</strong>! Seja bem-vindo!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total de Projetos</h2>
          <p className="text-3xl font-bold">{data.totalProjects}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total de Tarefas</h2>
          <p className="text-3xl font-bold">{data.totalTasks}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Tarefas Concluídas</h2>
          <p className="text-3xl font-bold">{data.completedTasks}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Tarefas Pendentes</h2>
          <p className="text-3xl font-bold">{data.pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}