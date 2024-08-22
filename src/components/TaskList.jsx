import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        if (Array.isArray(fetchedTasks)) {
          setTasks(fetchedTasks);
        } else {
          console.error('Fetched tasks is not an array:', fetchedTasks);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 ">Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map((tasks) => (
            <div
              key={tasks.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold">{tasks.title}</h3>
              <p className="text-gray-600">{tasks.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;