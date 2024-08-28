// src/hooks/userTask.js

import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

export function useUserTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, setTasks };
}
