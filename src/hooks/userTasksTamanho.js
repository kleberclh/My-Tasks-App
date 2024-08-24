// src/hooks/useProjects.js
import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

export function useTasksTamanho() {
  const [tasksCount, settasksCount] = useState(0);

  useEffect(() => {
    async function fetchtaskss() {
      try {
        const response = await getTasks();
        const tasks = response.data || response; // Ajuste com base na estrutura da resposta
        if (Array.isArray(tasks)) {
          settasksCount(tasks.length);
        } else {
          console.error("A resposta não é um array:", tasks);
        }
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error.message);
      }
    }

    fetchtaskss();
  }, []);

  return tasksCount;
}
