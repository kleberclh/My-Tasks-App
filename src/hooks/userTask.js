// src/hooks/userTask.js
import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

export function useUserTask() {
  // Renomeei para useUserTask para seguir a convenção dos hooks
  const [tasks, setTasks] = useState([]); // Estado inicial deve ser um array vazio

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        if (Array.isArray(fetchedTasks)) {
          setTasks(fetchedTasks);
        } else {
          console.error("Fetched tasks is not an array:", fetchedTasks);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
    fetchTasks();
  }, []);

  return { tasks };
}
