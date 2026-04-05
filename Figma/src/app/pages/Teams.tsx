import { useState } from "react";
import { Users, Mail, MoreVertical, Plus } from "lucide-react";
import MainLayout from "../components/MainLayout";
import InviteMemberModal from "../components/InviteMemberModal";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  status: "online" | "away" | "offline";
  tasksCompleted: number;
  tasksInProgress: number;
}

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showInvite, setShowInvite] = useState(false);

  const onlineCount = teamMembers.filter((m) => m.status === "online").length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":  return "bg-green-500";
      case "away":    return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default:        return "bg-gray-400";
    }
  };

  const getAvatarColor = (index: number) => {
    const colors = [
      "bg-blue-500", "bg-purple-500", "bg-pink-500",
      "bg-sky-500", "bg-green-500", "bg-orange-500",
    ];
    return colors[index % colors.length];
  };

  function handleInvite(name: string, email: string, role: string) {
    const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name,
      role,
      avatar: initials,
      email,
      status: "offline",
      tasksCompleted: 0,
      tasksInProgress: 0,
    };
    setTeamMembers((prev) => [...prev, newMember]);
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6 space-y-6" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[28px] text-gray-900" style={{ fontWeight: 700 }}>Teams</h1>
            <p className="text-[13px] text-gray-500 mt-1">Manage your team members and their workload</p>
          </div>
          <button
            onClick={() => setShowInvite(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition-colors text-[13px]"
            style={{ fontWeight: 500 }}
          >
            <Plus className="size-4" />
            Invite a Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="size-6 text-blue-600" />
              </div>
              <div>
                <p className="text-[13px] text-gray-600">Total Members</p>
                <p className="text-[24px] text-gray-900" style={{ fontWeight: 700 }}>{teamMembers.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <div className="size-3 bg-green-500 rounded-full" />
              </div>
              <div>
                <p className="text-[13px] text-gray-600">Online Now</p>
                <p className="text-[24px] text-gray-900" style={{ fontWeight: 700 }}>{onlineCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-lg flex items-center justify-center size-12">
                <span className="text-[18px] text-purple-600" style={{ fontWeight: 700 }}>
                  {teamMembers.reduce((s, m) => s + m.tasksInProgress, 0)}
                </span>
              </div>
              <div>
                <p className="text-[13px] text-gray-600">Active Tasks</p>
                <p className="text-[24px] text-gray-900" style={{ fontWeight: 700 }}>
                  {teamMembers.reduce((s, m) => s + m.tasksInProgress, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        {teamMembers.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-12 flex flex-col items-center text-center">
            <div className="bg-gray-100 size-16 rounded-full flex items-center justify-center mb-4">
              <Users className="size-8 text-gray-400" />
            </div>
            <h3 className="text-[17px] text-gray-900 mb-2" style={{ fontWeight: 600 }}>No team members yet</h3>
            <p className="text-[13px] text-gray-500 mb-5">Invite your teammates to start collaborating together.</p>
            <button
              onClick={() => setShowInvite(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition-colors text-[13px]"
              style={{ fontWeight: 500 }}
            >
              <Plus className="size-4" />
              Invite a Member
            </button>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>Team Members</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="p-6 flex items-center gap-6 hover:bg-gray-50 transition-colors">
                  <div className="relative">
                    <div className={`${getAvatarColor(index)} size-12 rounded-full flex items-center justify-center`}>
                      <span className="text-white text-[13px]" style={{ fontWeight: 600 }}>{member.avatar}</span>
                    </div>
                    <div className={`absolute bottom-0 right-0 ${getStatusColor(member.status)} size-3 border-2 border-white rounded-full`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>{member.name}</h3>
                    <p className="text-[13px] text-gray-600">{member.role}</p>
                    <div className="flex items-center gap-1 mt-1 text-[12px] text-gray-500">
                      <Mail className="size-3" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-[22px] text-gray-900" style={{ fontWeight: 700 }}>{member.tasksCompleted}</p>
                      <p className="text-[11px] text-gray-500">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[22px] text-blue-500" style={{ fontWeight: 700 }}>{member.tasksInProgress}</p>
                      <p className="text-[11px] text-gray-500">In Progress</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="size-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showInvite && (
        <InviteMemberModal
          onClose={() => setShowInvite(false)}
          onInvite={handleInvite}
        />
      )}
    </MainLayout>
  );
}
