/* eslint-disable react/prop-types */
export default function TaskListProject({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="mt-4 space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-4 rounded-md shadow-sm"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-gray-800">Status: {task.status}</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <select
              value={task.status}
              onChange={(e) => {
                console.log(
                  `Select changed for task ${task.id}: ${e.target.value}`
                );
                onStatusChange(task.id, e.target.value);
              }}
              className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Finalizada">Finalizada</option>
            </select>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded-md transition-colors duration-300"
              onClick={() => onEdit(task)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition-colors duration-300"
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
