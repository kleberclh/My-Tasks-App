import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTasksByProject } from "../services/taskProjectService"; // Importe o serviço criado

export default function TarefasProjetoPage() {
  const { id } = useParams(); // Extrai o ID do projeto da URL
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasksByProject(id);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error.message);
      }
    };

    fetchTasks();
  }, [id]); // Executa o useEffect toda vez que o ID do projeto mudar

  return (
    <div>
      <h1>TAREFAS DO PROJETO</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
