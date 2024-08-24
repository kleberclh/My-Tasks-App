/* eslint-disable react/prop-types */
export default function TaskModal({
  title,
  taskData,
  setTaskData,
  onCancel,
  onSubmit,
}) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Nome da Tarefa"
          value={taskData.name}
          onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Descrição da Tarefa"
          value={taskData.description}
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
        />
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={onSubmit}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
