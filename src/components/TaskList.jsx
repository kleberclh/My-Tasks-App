import { useState } from "react";
import { useUserTask } from "../hooks/userTask";
import TaskModal from "../components/TaskModalUser";
import { updateTask, deleteTask } from "../services/taskService";

export default function TaskList() {
  const { tasks, setTasks } = useUserTask();
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowEditModal(true);
  };

  const handleDeleteClick = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      const task = await updateTask(updatedTask.id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300 justify-center align-center"
            >
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p>Status: {task.status}</p>
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleEditClick(task)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleDeleteClick(task.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showEditModal && currentTask && (
        <TaskModal
          title="Editar Tarefa"
          taskData={currentTask}
          setTaskData={setCurrentTask}
          onCancel={() => setShowEditModal(false)}
          onSubmit={handleUpdateTask}
        />
      )}
    </div>
  );
}
