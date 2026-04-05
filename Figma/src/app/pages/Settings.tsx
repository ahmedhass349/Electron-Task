import { useState } from "react";
import {
  User, Bell, Shield, Palette, Globe, CreditCard,
  KeyRound, Trash2, Camera, Check, MessageSquare,
} from "lucide-react";
import MainLayout from "../components/MainLayout";

const TABS = [
  { id: "profile",       label: "Profile",       icon: User          },
  { id: "notifications", label: "Notifications", icon: Bell          },
  { id: "messages",      label: "Messages",      icon: MessageSquare },
  { id: "security",      label: "Security",      icon: Shield        },
  { id: "appearance",    label: "Appearance",    icon: Palette       },
  { id: "language",      label: "Language",      icon: Globe         },
  { id: "billing",       label: "Billing",       icon: CreditCard    },
];

// ── Reusable sub-components ──────────────────────────────────────────────────
function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-[16px] text-[#0a0a0a]" style={{ fontWeight: 600 }}>{title}</h3>
        {description && <p className="text-[13px] text-[#787486] mt-0.5">{description}</p>}
      </div>
      <div
        className="rounded-[12px] bg-white border border-[#e8e5f7] overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}

function FieldRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 px-5 py-4" style={{ borderBottom: "1px solid #f4f2ff" }}>
      <div className="min-w-[180px]">
        <p className="text-[14px] text-[#0a0a0a]" style={{ fontWeight: 500 }}>{label}</p>
        {description && <p className="text-[12px] text-[#787486] mt-0.5">{description}</p>}
      </div>
      <div className="flex-1 max-w-[360px]">{children}</div>
    </div>
  );
}

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] text-[#0a0a0a] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#b0a9d5]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    />
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative inline-flex items-center h-6 w-11 rounded-full transition-colors shrink-0"
      style={{ background: checked ? "#3B82F6" : "#d1d5db" }}
    >
      <span
        className="size-5 bg-white rounded-full shadow transition-transform"
        style={{ transform: checked ? "translateX(22px)" : "translateX(2px)" }}
      />
    </button>
  );
}

// ── Tab content components ───────────────────────────────────────────────────
function ProfileTab() {
  const [form, setForm] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@taskflow.io",
    company: "TaskFlow Inc.",
    country: "United States",
    phone: "+1 555 234 5678",
    timezone: "GMT-5",
    jobTitle: "Product Manager",
    bio: "Product Manager passionate about building tools that help teams work smarter and ship faster.",
  });
  const [saved, setSaved] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const initials = `${form.firstName.charAt(0)}${form.lastName.charAt(0)}`.toUpperCase();

  return (
    <div>
      {/* Avatar */}
      <Section title="Profile Photo" description="This will be displayed on your profile across TaskFlow Pro.">
        <div className="flex items-center gap-6 px-5 py-5">
          <div className="relative">
            <div
              className="size-20 rounded-full flex items-center justify-center text-white text-[24px]"
              style={{ background: "#3B82F6", fontWeight: 700 }}
            >
              {initials}
            </div>
            <button className="absolute bottom-0 right-0 size-7 rounded-full bg-white border border-[#e8e5f7] flex items-center justify-center shadow hover:bg-gray-50 transition-colors">
              <Camera className="size-3.5 text-[#787486]" />
            </button>
          </div>
          <div>
            <button className="px-4 py-2 rounded-[8px] border border-[#e8e5f7] text-[13px] text-[#0a0a0a] hover:bg-[#f4f2ff] transition-colors mr-2" style={{ fontWeight: 500 }}>
              Upload photo
            </button>
            <button className="px-4 py-2 rounded-[8px] text-[13px] text-red-500 hover:bg-red-50 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </Section>

      {/* Name row */}
      <Section title="Personal Information">
        {/* First & Last name side by side */}
        <div className="flex gap-4 px-5 py-4" style={{ borderBottom: "1px solid #f4f2ff" }}>
          <div className="flex-1">
            <label className="block text-[12px] text-[#787486] mb-1.5" style={{ fontWeight: 500 }}>First Name</label>
            <TextInput value={form.firstName} onChange={(v) => update("firstName", v)} placeholder="First name" />
          </div>
          <div className="flex-1">
            <label className="block text-[12px] text-[#787486] mb-1.5" style={{ fontWeight: 500 }}>Last Name</label>
            <TextInput value={form.lastName} onChange={(v) => update("lastName", v)} placeholder="Last name" />
          </div>
        </div>

        <FieldRow label="Email Address" description="Used for login and notifications">
          <TextInput value={form.email} onChange={(v) => update("email", v)} placeholder="your@email.com" />
        </FieldRow>

        <FieldRow label="Company Name">
          <TextInput value={form.company} onChange={(v) => update("company", v)} placeholder="Your company" />
        </FieldRow>

        {/* Country & Phone side by side */}
        <div className="flex gap-4 px-5 py-4" style={{ borderBottom: "1px solid #f4f2ff" }}>
          <div className="flex-1">
            <label className="block text-[12px] text-[#787486] mb-1.5" style={{ fontWeight: 500 }}>Country</label>
            <select
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] text-[#0a0a0a] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {["United States", "United Kingdom", "Canada", "Australia", "Germany", "Egypt", "France", "Japan"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[12px] text-[#787486] mb-1.5" style={{ fontWeight: 500 }}>Phone Number</label>
            <TextInput value={form.phone} onChange={(v) => update("phone", v)} placeholder="+1 000 000 0000" />
          </div>
        </div>

        <FieldRow label="Default Timezone">
          <select
            value={form.timezone}
            onChange={(e) => update("timezone", e.target.value)}
            className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] text-[#0a0a0a] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {["GMT-8", "GMT-7", "GMT-6", "GMT-5", "GMT-4", "GMT+0", "GMT+1", "GMT+2", "GMT+3", "GMT+5:30", "GMT+8"].map((z) => (
              <option key={z}>{z}</option>
            ))}
          </select>
        </FieldRow>

        <FieldRow label="Job Title">
          <TextInput value={form.jobTitle} onChange={(v) => update("jobTitle", v)} placeholder="e.g. Product Manager" />
        </FieldRow>

        <FieldRow label="Bio" description="Brief description for your profile">
          <textarea
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
            placeholder="Tell your team about yourself…"
            rows={3}
            className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] text-[#0a0a0a] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors resize-none placeholder:text-[#b0a9d5]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </FieldRow>
      </Section>

      <div className="flex justify-end">
        <button
          onClick={save}
          className="flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-white text-[14px] transition-colors"
          style={{ background: saved ? "#22c55e" : "#3B82F6", fontWeight: 600 }}
        >
          {saved ? <><Check className="size-4" /> Saved!</> : "Save changes"}
        </button>
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [prefs, setPrefs] = useState({
    emailTaskAssigned: true,
    emailMentions: true,
    emailWeeklyDigest: false,
    pushTaskAssigned: true,
    pushMentions: false,
    pushDueDates: true,
    inAppAll: true,
  });

  function toggle(key: keyof typeof prefs) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <div>
      <Section title="Email Notifications" description="Choose what emails you receive from TaskFlow Pro.">
        <FieldRow label="Task assigned to you"><Toggle checked={prefs.emailTaskAssigned} onChange={() => toggle("emailTaskAssigned")} /></FieldRow>
        <FieldRow label="Mentions & comments"><Toggle checked={prefs.emailMentions} onChange={() => toggle("emailMentions")} /></FieldRow>
        <FieldRow label="Weekly digest" description="A summary of your week every Monday"><Toggle checked={prefs.emailWeeklyDigest} onChange={() => toggle("emailWeeklyDigest")} /></FieldRow>
      </Section>
      <Section title="Push Notifications" description="Sent to your device when the app is in the background.">
        <FieldRow label="Task assigned to you"><Toggle checked={prefs.pushTaskAssigned} onChange={() => toggle("pushTaskAssigned")} /></FieldRow>
        <FieldRow label="Mentions"><Toggle checked={prefs.pushMentions} onChange={() => toggle("pushMentions")} /></FieldRow>
        <FieldRow label="Due date reminders"><Toggle checked={prefs.pushDueDates} onChange={() => toggle("pushDueDates")} /></FieldRow>
      </Section>
      <Section title="In-App Notifications">
        <FieldRow label="All activity" description="Show all notifications in the notification centre"><Toggle checked={prefs.inAppAll} onChange={() => toggle("inAppAll")} /></FieldRow>
      </Section>
    </div>
  );
}

function MessagesTab() {
  const [prefs, setPrefs] = useState({
    readReceipts:      true,
    onlineStatus:      true,
    typingIndicators:  true,
    messagePreview:    true,
    soundNewMessage:   true,
    soundMentions:     true,
    desktopNotifs:     false,
    archiveOnRead:     false,
    compactMode:       false,
  });

  function toggle(key: keyof typeof prefs) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <div>
      <Section title="Privacy" description="Control what others can see when you're messaging.">
        <FieldRow label="Read receipts" description="Let others know when you've read their messages">
          <Toggle checked={prefs.readReceipts} onChange={() => toggle("readReceipts")} />
        </FieldRow>
        <FieldRow label="Online status" description="Show when you're active in the app">
          <Toggle checked={prefs.onlineStatus} onChange={() => toggle("onlineStatus")} />
        </FieldRow>
        <FieldRow label="Typing indicators" description="Show when you're composing a reply">
          <Toggle checked={prefs.typingIndicators} onChange={() => toggle("typingIndicators")} />
        </FieldRow>
        <FieldRow label="Message preview" description="Show message content in notifications">
          <Toggle checked={prefs.messagePreview} onChange={() => toggle("messagePreview")} />
        </FieldRow>
      </Section>

      <Section title="Sounds" description="Manage audio alerts for incoming messages.">
        <FieldRow label="New message sound">
          <Toggle checked={prefs.soundNewMessage} onChange={() => toggle("soundNewMessage")} />
        </FieldRow>
        <FieldRow label="Mention & reaction sounds">
          <Toggle checked={prefs.soundMentions} onChange={() => toggle("soundMentions")} />
        </FieldRow>
        <FieldRow label="Desktop notifications" description="Pop-up alerts even when the app is minimised">
          <Toggle checked={prefs.desktopNotifs} onChange={() => toggle("desktopNotifs")} />
        </FieldRow>
      </Section>

      <Section title="Display" description="Personalise how your inbox looks and behaves.">
        <FieldRow label="Archive on read" description="Automatically archive a thread after you read it">
          <Toggle checked={prefs.archiveOnRead} onChange={() => toggle("archiveOnRead")} />
        </FieldRow>
        <FieldRow label="Compact message list" description="Fit more conversations on screen at once">
          <Toggle checked={prefs.compactMode} onChange={() => toggle("compactMode")} />
        </FieldRow>
      </Section>
    </div>
  );
}

function SecurityTab() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [twoFa, setTwoFa] = useState(false);

  return (
    <div>
      <Section title="Change Password">
        <FieldRow label="Current password">
          <input type="password" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="••••••••" className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }} />
        </FieldRow>
        <FieldRow label="New password">
          <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="••••••••" className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }} />
        </FieldRow>
        <FieldRow label="Confirm password">
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }} />
        </FieldRow>
        <div className="px-5 py-4">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-white text-[13px]"
            style={{ background: "#3B82F6", fontWeight: 600 }}
          >
            <KeyRound className="size-4" />
            Update password
          </button>
        </div>
      </Section>

      <Section title="Two-Factor Authentication" description="Add an extra layer of security to your account.">
        <FieldRow label="Enable 2FA" description={twoFa ? "2FA is active on your account" : "Protect your account with an authenticator app"}>
          <Toggle checked={twoFa} onChange={setTwoFa} />
        </FieldRow>
      </Section>

      <Section title="Danger Zone">
        <div className="px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-[14px] text-red-600" style={{ fontWeight: 500 }}>Delete account</p>
            <p className="text-[12px] text-[#787486] mt-0.5">Permanently delete your account and all data. This cannot be undone.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-red-200 text-red-600 text-[13px] hover:bg-red-50 transition-colors" style={{ fontWeight: 500 }}>
            <Trash2 className="size-4" />
            Delete account
          </button>
        </div>
      </Section>
    </div>
  );
}

function AppearanceTab() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [accent, setAccent] = useState("#3B82F6");
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");

  const ACCENTS = ["#3B82F6", "#8b5cf6", "#22c55e", "#f97316", "#ef4444", "#14b8a6"];

  return (
    <div>
      <Section title="Theme" description="Choose how TaskFlow Pro looks to you.">
        <div className="px-5 py-5 flex gap-4">
          {(["light", "dark", "system"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className="flex-1 py-3 rounded-[10px] border text-[13px] capitalize transition-all"
              style={{
                borderColor: theme === t ? "#3B82F6" : "#e8e5f7",
                background: theme === t ? "#eff6ff" : "white",
                color: theme === t ? "#3B82F6" : "#0a0a0a",
                fontWeight: theme === t ? 600 : 400,
              }}
            >
              {t === "light" ? "☀️" : t === "dark" ? "🌙" : "💻"} {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Accent Color" description="Choose your primary brand colour.">
        <div className="px-5 py-5 flex items-center gap-3">
          {ACCENTS.map((c) => (
            <button
              key={c}
              onClick={() => setAccent(c)}
              className="size-8 rounded-full transition-transform hover:scale-110"
              style={{ background: c, outline: accent === c ? `3px solid ${c}` : undefined, outlineOffset: 2 }}
            />
          ))}
        </div>
      </Section>

      <Section title="Layout Density">
        <FieldRow label="Comfortable" description="More spacing between elements">
          <Toggle checked={density === "comfortable"} onChange={() => setDensity("comfortable")} />
        </FieldRow>
        <FieldRow label="Compact" description="Tighter layout for more content">
          <Toggle checked={density === "compact"} onChange={() => setDensity("compact")} />
        </FieldRow>
      </Section>
    </div>
  );
}

function LanguageTab() {
  const [lang, setLang] = useState("en");
  const [tz, setTz] = useState("UTC+0");
  const [dateFormat, setDateFormat] = useState("MMM D, YYYY");

  const LANGS = [
    { code: "en", label: "English (US)" },
    { code: "ar", label: "Arabic (العربية)" },
    { code: "fr", label: "French (Français)" },
    { code: "de", label: "German (Deutsch)" },
    { code: "es", label: "Spanish (Español)" },
  ];

  return (
    <Section title="Language & Region">
      <FieldRow label="Language">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
      </FieldRow>
      <FieldRow label="Timezone">
        <select
          value={tz}
          onChange={(e) => setTz(e.target.value)}
          className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {["UTC-8", "UTC-5", "UTC+0", "UTC+1", "UTC+3", "UTC+5:30", "UTC+8"].map((z) => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>
      </FieldRow>
      <FieldRow label="Date Format">
        <select
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
          className="w-full px-3 py-2 rounded-[8px] border border-[#e8e5f7] text-[14px] bg-[#faf9ff] outline-none focus:border-[#3B82F6] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {["MMM D, YYYY", "DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"].map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </FieldRow>
    </Section>
  );
}

function BillingTab() {
  return (
    <div>
      <Section title="Current Plan">
        <div className="px-5 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[16px] text-[#0a0a0a]" style={{ fontWeight: 700 }}>Free Plan</p>
              <p className="text-[13px] text-[#787486] mt-0.5">Up to 5 members · 5 projects · 100MB storage</p>
            </div>
            <button
              className="px-5 py-2.5 rounded-[8px] text-white text-[13px]"
              style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8b5cf6 100%)", fontWeight: 600 }}
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </Section>
      <Section title="Payment Method">
        <div className="px-5 py-8 flex flex-col items-center justify-center text-center gap-2">
          <CreditCard className="size-8 text-[#b0a9d5]" />
          <p className="text-[14px] text-[#0a0a0a]" style={{ fontWeight: 500 }}>No payment method added</p>
          <p className="text-[13px] text-[#787486]">Add a payment method to upgrade your plan.</p>
          <button className="mt-2 px-4 py-2 rounded-[8px] border border-[#e8e5f7] text-[13px] text-[#0a0a0a] hover:bg-[#f4f2ff] transition-colors" style={{ fontWeight: 500 }}>
            Add card
          </button>
        </div>
      </Section>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const content: Record<string, React.ReactNode> = {
    profile:       <ProfileTab />,
    notifications: <NotificationsTab />,
    messages:      <MessagesTab />,
    security:      <SecurityTab />,
    appearance:    <AppearanceTab />,
    language:      <LanguageTab />,
    billing:       <BillingTab />,
  };

  return (
    <MainLayout>
      <div
        className="flex h-full overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* ── Settings sidebar ── */}
        <div
          className="w-[220px] shrink-0 py-6 overflow-y-auto"
          style={{ background: "#faf9ff", borderRight: "1px solid #e8e5f7" }}
        >
          <p className="px-5 text-[11px] text-[#b0a9d5] uppercase tracking-[0.8px] mb-3" style={{ fontWeight: 600 }}>
            Settings
          </p>
          <nav className="space-y-0.5 px-2">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-colors"
                style={{
                  background: activeTab === id ? "white" : "transparent",
                  color: activeTab === id ? "#3B82F6" : "#45556c",
                  fontWeight: activeTab === id ? 600 : 400,
                  boxShadow: activeTab === id ? "0 1px 3px rgba(0,0,0,0.06)" : undefined,
                }}
              >
                <Icon className="size-4 shrink-0" />
                <span className="text-[13px]">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* ── Content area ── */}
        <div className="flex-1 overflow-y-auto px-8 py-8 bg-[#f8f7ff]">
          <div className="max-w-[680px]">
            <h2 className="text-[22px] text-[#0a0a0a] mb-6" style={{ fontWeight: 700 }}>
              {TABS.find((t) => t.id === activeTab)?.label}
            </h2>
            {content[activeTab]}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}