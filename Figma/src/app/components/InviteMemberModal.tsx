import { useState } from "react";
import { X, UserPlus, Mail, Briefcase, ChevronDown } from "lucide-react";
import { useToast } from "../context/ToastContext";

const ROLES = [
  "Product Manager",
  "Engineer",
  "Designer",
  "QA Engineer",
  "DevOps Engineer",
  "Data Analyst",
  "Scrum Master",
];

interface Props {
  onClose: () => void;
  onInvite: (name: string, email: string, role: string) => void;
}

export default function InviteMemberModal({ onClose, onInvite }: Props) {
  const { showToast } = useToast();
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [role, setRole]       = useState("");
  const [roleOpen, setRoleOpen] = useState(false);
  const [errors, setErrors]   = useState<{ name?: string; email?: string; role?: string }>({});

  function validate() {
    const e: typeof errors = {};
    if (!name.trim())  e.name  = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    if (!role) e.role = "Please select a role.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onInvite(name.trim(), email.trim(), role);
    showToast({
      type: "invite",
      title: "Invitation Sent",
      body: `${name.trim()} (${email.trim()}) was invited as ${role}.`,
      duration: 5000,
    });
    onClose();
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,10,35,0.45)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Card */}
      <div
        className="w-full max-w-[480px] rounded-[20px] bg-white shadow-2xl flex flex-col"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5" style={{ borderBottom: "1px solid #f0f1f5" }}>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[10px] bg-blue-50 flex items-center justify-center">
              <UserPlus className="size-5 text-blue-500" />
            </div>
            <div>
              <h2 className="text-[17px] text-gray-900" style={{ fontWeight: 700 }}>
                Invite a Member
              </h2>
              <p className="text-[12px] text-gray-500 mt-0.5">
                Send an invite link to a new teammate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="size-4" strokeWidth={2.2} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-700" style={{ fontWeight: 500 }}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-shadow"
              style={{
                border: errors.name ? "1.5px solid #ef4444" : "1.5px solid #e5e7eb",
                background: "#fafafa",
              }}
            >
              <UserPlus className="size-4 text-gray-400 shrink-0" />
              <input
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                placeholder="e.g. Sarah Wilson"
                className="flex-1 bg-transparent outline-none text-[13px] text-gray-800 placeholder:text-gray-400"
              />
            </div>
            {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-700" style={{ fontWeight: 500 }}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-[10px] transition-shadow"
              style={{
                border: errors.email ? "1.5px solid #ef4444" : "1.5px solid #e5e7eb",
                background: "#fafafa",
              }}
            >
              <Mail className="size-4 text-gray-400 shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                placeholder="e.g. sarah@company.io"
                className="flex-1 bg-transparent outline-none text-[13px] text-gray-800 placeholder:text-gray-400"
              />
            </div>
            {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-700" style={{ fontWeight: 500 }}>
              Role <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setRoleOpen((o) => !o)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-left transition-shadow"
                style={{
                  border: errors.role ? "1.5px solid #ef4444" : "1.5px solid #e5e7eb",
                  background: "#fafafa",
                }}
              >
                <Briefcase className="size-4 text-gray-400 shrink-0" />
                <span className={`flex-1 text-[13px] ${role ? "text-gray-800" : "text-gray-400"}`}>
                  {role || "Select a role"}
                </span>
                <ChevronDown
                  className="size-4 text-gray-400 shrink-0 transition-transform"
                  style={{ transform: roleOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {roleOpen && (
                <div
                  className="absolute left-0 right-0 top-full mt-1 bg-white rounded-[10px] overflow-hidden z-10"
                  style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
                >
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => { setRole(r); setRoleOpen(false); setErrors((p) => ({ ...p, role: undefined })); }}
                      className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      style={{ fontWeight: role === r ? 600 : 400 }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.role && <p className="text-[11px] text-red-500">{errors.role}</p>}
          </div>

          {/* Info note */}
          <div className="flex items-start gap-2.5 px-4 py-3 rounded-[10px]" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
            <Mail className="size-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-[12px] text-blue-700">
              An invitation email will be sent to the address above with a link to join your workspace.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-[10px] text-[13px] text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-[10px] text-[13px] text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <UserPlus className="size-4" />
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}