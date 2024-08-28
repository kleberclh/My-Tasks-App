/* eslint-disable react/prop-types */
// src/components/TaskModal.jsx

import { useState, useEffect } from "react";

export default function TaskModal({ title, taskData, onCancel, onSubmit }) {
  const [task, setTask] = useState(taskData);

  useEffect(() => {
    setTask(taskData);
  }, [taskData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(task);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Título</label>
            <input
              type="text"
              name="title"
              value={task.title || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Descrição</label>
            <textarea
              name="description"
              value={task.description || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={task.status || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              required
            >
              <option value="pendente">Pendente</option>
              <option value="concluída">Concluída</option>
              <option value="finalizada">Finalizada</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
