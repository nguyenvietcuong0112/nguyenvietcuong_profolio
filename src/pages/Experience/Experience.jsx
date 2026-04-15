import React from "react";
import { Code2, Briefcase, Calendar, Star, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formatSpecificWorkItem = (item) => {
  if (typeof item !== "string") return { lead: "", body: "" };
  const idx = item.indexOf(":");
  if (idx === -1) return { lead: "", body: item };
  return {
    lead: item.slice(0, idx + 1),
    body: item.slice(idx + 1).trimStart(),
  };
};

const ExperienceCard = ({
  title,
  period,
  role,
  functions,
  specificWork = [],
  technologies = [],
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
    {/* Glass morphism effect background */}
    <div className="absolute inset-0 backdrop-blur-xl bg-gray-900/40 rounded-2xl border border-gray-800/50" />

    {/* Animated gradient border accent */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <div className="relative p-8 h-full flex flex-col">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="relative mt-1">
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-lg blur-lg group-hover:bg-cyan-500/40 transition-colors duration-500" />
            <Icon className="w-8 h-8 text-cyan-400 relative z-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
              {title}
            </h3>
            {role && (
              <div className="flex items-center gap-2 mt-2 text-cyan-400/80 font-medium">
                <Briefcase className="w-4 h-4" />
                <span>{role}</span>
              </div>
            )}
          </div>
        </div>
        {period && (
          <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50 whitespace-nowrap self-start">
            <Calendar className="w-4 h-4 text-blue-400" />
            {period}
          </div>
        )}
      </div>

      {/* Project Functions */}
      {functions && (
        <div className="mb-6">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" /> Functions
          </p>
          <p className="text-gray-200 leading-relaxed bg-blue-500/5 p-3 rounded-xl border border-blue-500/10">
            {functions}
          </p>
        </div>
      )}

      {/* Specific Work - Responsibilities */}
      <div className="flex-grow space-y-3 mb-8">
        <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
          Specific Work
        </p>
        <ul className="space-y-3">
          {specificWork.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm group/item">
              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 group-hover/item:text-cyan-400 transition-colors" />
              <span className="leading-relaxed">
                {(() => {
                  const { lead, body } = formatSpecificWorkItem(item);
                  if (!lead) return body;
                  return (
                    <>
                      <span className="text-white font-semibold">{lead}</span>{" "}
                      <span className="text-gray-300">{body}</span>
                    </>
                  );
                })()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="pt-6 border-t border-gray-800/50">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="bg-blue-500/5 hover:bg-blue-500/10 text-blue-300 border-blue-500/20 py-1 px-3 rounded-lg text-xs font-medium transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const workExperience = {
    icon: Code2,
    title: "Work Experience",
    functions:
      "Mobile Developer focused on Flutter and Android (Java/Kotlin), shipping production apps with strong performance, reliability, and monetization.",
    specificWork: [
      "🚀 Mobile App Scaling: Built and scaled Android & Flutter apps in productivity/utility domains for a global audience; reached 5M+ total downloads.",
      "🧠 Architecture: Migrated legacy monoliths to Multi-Module + Clean Architecture with MVVM/MVI (Android) and Bloc/Provider (Flutter), improving maintainability and delivery speed.",
      "🛠️ Core Engineering: Implemented Maps, Push Notifications (FCM), Home Screen Widgets, and Background Services for persistent utility workflows.",
      "☁️ Cloud Ecosystem: Leveraged Firebase (Auth, Remote Config, Firestore, Analytics, Crashlytics) for experiments, feature rollout, and real-time monitoring.",
      "🔐 API Integration: Integrated RESTful APIs with secure data handling, robust error handling, and offline-friendly flows where needed.",
      "⚡ Performance & Stability: Profiled and optimized UI/IO paths; targeted smooth 60FPS UX and maintained crash rate under 1%.",
      "💰 Monetization: Integrated and optimized Google AdMob (mediation, load strategy, frequency capping) to grow revenue without hurting UX.",
      "🎮 Engine Bridging: Integrated Unity modules into Android/iOS apps with low-latency communication and cross-module state synchronization.",
      "🧩 SDK & Ads Library: Built reusable Android SDK/libraries and integrated ads SDKs for Unity games, including bridge layers, callback handling, and runtime optimization.",
      "🧪 CI/CD & Release: Built pipelines (GitHub Actions / Bitbucket Pipelines) with automated build, code signing, staged rollouts, and store publishing.",
    ],
    technologies: [
      "Flutter",
      "Android (Java/Kotlin)",
      "MVVM/MVI",
      "Clean/Modular Architecture",
      "Hilt",
      "Coroutines/Flow",
      "Room",
      "AdMob",
      "Firebase",
      "CI/CD",
    ],
  };

  const selectedCompanies = [
    { name: "Trip Global Studio" },
    { name: "Viettel Software" },
    { name: "Seatech Jsc" },
  ];

  return (
    <main className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Work Experience
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A focused summary of what I deliver in production mobile apps: architecture, core features, performance, monetization, and release pipelines.
          </p>
        </div>

        {/* Selected Companies / Products */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-purple-500/0 opacity-60" />
            <div className="relative p-6">
              <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Selected Companies / Products
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCompanies.map((c) => (
                  <Badge
                    key={c.name}
                    variant="outline"
                    className="bg-blue-500/5 hover:bg-blue-500/10 text-blue-200 border-blue-500/20 py-1 px-3 rounded-lg text-xs font-medium transition-all duration-300"
                    title={c.note}
                  >
                    {c.name}
                    {c.note ? <span className="text-gray-400"> · {c.note}</span> : null}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <ExperienceCard {...workExperience} />
        </div>
      </div>

    </main>
  );
};

// Simple Fallback for Book icon if Lucide doesn't have it in current version
const Book = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default ExperienceSection;
