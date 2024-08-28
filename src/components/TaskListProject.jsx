/* eslint-disable react/prop-types */
export default function TaskListProject({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-md"
        >
          <div>
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p className="text-sm">{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={task.status}
              onChange={(e) => {
                console.log(
                  `Select changed for task ${task.id}: ${e.target.value}`
                ); // Adicione este log
                onStatusChange(task.id, e.target.value);
              }}
              className="px-2 py-1 border rounded-md"
            >
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Finalizada">Finalizada</option>
            </select>
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              onClick={() => onEdit(task)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
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
