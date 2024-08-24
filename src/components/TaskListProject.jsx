/* eslint-disable react/prop-types */
export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-100 p-4 mb-2 rounded-lg flex justify-between items-center"
        >
          <div>
            <h3 className="text-xl font-semibold">{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded-md"
              onClick={() => onEdit(task)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => onDelete(task.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
