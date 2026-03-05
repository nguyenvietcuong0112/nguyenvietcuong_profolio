import React from "react";
import { Code2, Briefcase, Calendar, Star, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExperienceCard = ({
  title,
  period,
  role,
  functions,
  specificWork,
  technologies,
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
            <div className="flex items-center gap-2 mt-2 text-cyan-400/80 font-medium">
              <Briefcase className="w-4 h-4" />
              <span>{role}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50 whitespace-nowrap self-start">
          <Calendar className="w-4 h-4 text-blue-400" />
          {period}
        </div>
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
              <span className="leading-relaxed">{item}</span>
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
  const experiences = [
    {
      icon: Code2,
      title: "Build multiple mobile apps with Flutter and Android",
      period: "07/2023 - Now",
      role: "Mobile Developer",
      functions: "Data analytics and data aggregation platform",
      specificWork: [
        "Developed and maintained multiple mobile applications across productivity and utility domains",
        "Implemented core features including Maps, Push Notifications, Home Widgets, and background services",
        "Integrated Firebase services (Auth, Remote Config, FCM, Firestore, Analytics, Crashlytics)",
        "Applied Modular & Clean Architecture with MVVM, Bloc, and Provider (Flutter)",
        "Integrated RESTful APIs with secure data handling",
        "Integrated Unity modules into Android and iOS applications",
        "Implemented monetization strategies (Ad integration & optimization)",
        "CI/CD: Bitbucket Pipelines, Automated Build & Deployment, Code Signing, Google Play Publishing",
        "Published, maintained, and enhanced apps on Google Play Store and Apple App Store",
      ],
      technologies: ["Flutter", "Android Java", "Android Kotlin", "Swift"],
    },
    {
      icon: Star,
      title: "Viettel Data Mining Platform",
      period: "01/2023 - 07/2023",
      role: "Frontend Developer",
      functions: "Data analytics and data aggregation platform",
      specificWork: [
        "Analyze requirements, operations, new features to create the right interface with customer requirements",
        "Feature development for charts (Echart, ChartJs, D3Js)",
        "Optimized interface",
        "Support fixbug directly with customers",
        "Maintain, develop new features based on the existing system",
      ],
      technologies: ["ReactJS"],
    },
    {
      icon: Briefcase,
      title: "ETAX MOBILE",
      period: "06/2022 - 12/2022",
      role: "Mobile Developer",
      functions: "Pay tax, look up tax registration information, look up payable tax amount: GTGT, TNCN, LBTB ...",
      specificWork: [
        "Analysis of new requirements and operations from customers",
        "Interface builder",
        "Maintain, develop new features based on the existing system",
        "Support fixbug directly with customers",
        "Optimized interface",
        "Build, release App to AppStore, Google Play",
      ],
      technologies: ["Flutter", "Java"],
    },
    {
      icon: Book,
      title: "Jasu",
      period: "10/2021 - 05/2022",
      role: "Mobile Developer",
      functions: "Build a system of tutors and students with basic functions such as Login, Register, Create class, Register to teach, display class list...",
      specificWork: [
        "Analysis of requirements, business",
        "System Design",
        "Build interface for registration, login, class list display, class creation, API integration",
        "Team Management",
      ],
      technologies: ["React Native", "Java"],
    },
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
            Professional History
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A chronological look at my professional growth and the projects that have shaped my career as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
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
