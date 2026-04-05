import { FolderKanban, MoreVertical, Star, Users } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  tasks: { total: number; completed: number };
  members: number;
  starred: boolean;
}

interface DefaultViewProps {
  projects: Project[];
}

export default function DefaultView({ projects }: DefaultViewProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <div className="bg-gray-100 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <FolderKanban className="size-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
        <p className="text-gray-600 mb-4">Get started by creating your first project</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Create Project
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`${project.color} size-12 rounded-lg flex items-center justify-center`}>
                <FolderKanban className="size-6 text-white" />
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-400 hover:text-yellow-500 transition-colors">
                  <Star className={`size-5 ${project.starred ? "fill-yellow-400 text-yellow-400" : ""}`} />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical className="size-5" />
                </button>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 text-lg mb-1">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">
                  {project.tasks.completed}/{project.tasks.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${project.color} h-2 rounded-full transition-all`}
                  style={{ width: `${(project.tasks.completed / project.tasks.total) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="size-4" />
                <span>{project.members} members</span>
              </div>
              <span className="text-xs text-gray-500">
                {Math.round((project.tasks.completed / project.tasks.total) * 100)}% complete
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
