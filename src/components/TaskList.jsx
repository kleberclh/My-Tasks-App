
import { useUserTask } from '../hooks/userTask'; // Corrija o caminho se necessário

export default function TaskList() {
  const { tasks } = useUserTask(); // Use o hook renomeado

  return (
    <div className="bg-white rounded-lg shadow-md mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
