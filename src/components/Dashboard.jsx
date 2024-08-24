// src/components/Dashboard.jsx

import { useProjects } from '../hooks/useProjects';
import { useTasksTamanho } from '../hooks/userTasksTamanho';
import { useUserName } from '../hooks/useUserName';

export default function Dashboard() {
  const projectCount = useProjects();
  const tasksCount = useTasksTamanho()
  const name = useUserName();

  const data = {
    completedTasks: 0,
    pendingTasks: 0,
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        Olá, <strong>{name}</strong>! Seja bem-vindo!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total de Projetos</h2>
          <p className="text-3xl font-bold">{projectCount}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total de Tarefas</h2>
          <p className="text-3xl font-bold">{tasksCount}</p>
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
