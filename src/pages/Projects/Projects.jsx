import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Core Monetization & Tracking SDK",
    category: "company",
    description:
      "A proprietary centralized Android/Unity SDK built to unify AdMob, AppLovin MAX, Adjust, AppsFlyer, and Firebase. Integrated across 30+ applications, it manages complex ad bidding, waterfall strategies, UMP consent, and precise event postbacks to maximize ARPDAU and ensure accurate ROAS tracking.",
    color: "#a855f7",
    tech: ["Android AAR", "Unity Bridge", "AdMob/MAX", "AppsFlyer/Adjust", "Analytics"],
  },
    {
        title: "ETAX MOBILE",
        category: "company",
        description:
          "Official government tax service application. Optimized for secure RESTful communication and high-volume document handling across Android and iOS.",
        color: "#4ade80",
        tech: ["Flutter", "Kotlin", "REST API", "JSON Web Tokens", "TLS Encryption"],
        androidLink: "https://play.google.com/store/apps/details?id=com.etax.icanhan",
        iosLink: "https://apps.apple.com/vn/app/etax-mobile/id1589750682?l=vi",
      },
  {
    title: "Smart Expense – Money Planner",
    category: "company",
    description:
      "A comprehensive personal finance management application designed to track daily spending and provide financial insights. Optimized for billion-scale data sync and real-time analytics.",
    color: "#6366f1",
    tech: ["Kotlin", "Clean Architecture", "Firebase", "SQLite", "FCM"],
    androidLink: "https://play.google.com/store/apps/details?id=com.moneytracker.financecontrol.dailybudget.expenses",
  },
  {
    title: "Auto Clicker – Tap Tool",
    category: "company",
    description:
      "High-precision touch automation tool. Engineered with low-latency foreground services and custom view overlays for seamless user interaction.",
    color: "#f43f5e",
    tech: ["Kotlin", "Accessibility Service", "Foreground Service", "Advanced UI Overlays"],
    androidLink: "https://play.google.com/store/apps/details?id=com.autoclicker.tap.automation",
  },
  {
    title: "Walk Log – Pedometer Counter",
    category: "company",
    description:
      "Advanced health tracker with real-time step counting. Implemented custom sensor processing algorithms and optimized battery consumption for background tracking.",
    color: "#f59e0b",
    tech: ["Kotlin", "Sensor APIs", "Google Maps", "WorkManager"],
    androidLink: "https://play.google.com/store/apps/details?id=com.pedometer.steptracker.runwalk.dailytrack",
  },
  {
    title: "Money Tracker: Budget Manager",
    category: "company",
    description:
      "A Flutter personal finance app focused on intuitive UX and high-performance local data handling. Features multi-wallet management and cloud synchronization.",
    color: "#22c55e",
    tech: ["Flutter", "Dart", "SQLite", "Firebase Sync", "Bloc"],
    iosLink: "https://apps.apple.com/us/app/money-tracker-budget-manager/id6757209828",
  },

  {
    title: "Coloring Book - Paint & Color Art",
    category: "personal",
    description:
      "Creative Flutter art platform featuring smooth 2D rendering, custom canvas drawing, and an optimized Flood Fill algorithm for high-performance coloring experiences.",
    color: "#fb923c",
    tech: ["Flutter", "Custom Canvas", "Flood Fill Algorithm", "AdMob Mediation", "Billing API"],
    androidLink: "https://play.google.com/store/apps/details?id=com.fillcolor.coloringbook.paint.colorart",
  },
{
    title: "Football Live Score: MatchLive",
    category: "personal",
    description:
      "Live football scores, fixtures, standings, match statistics, and real-time notifications from leagues around the world.",
    color: "#fb523c",
    tech: ["Android", "Kotlin", "REST API","MVVM","AdMob Mediation", "Billing API"],
    androidLink: "https://play.google.com/store/apps/details?id=com.livescore.football.livescores.footballscores",
  },
  {
    title: "App Lock – Protect Privacy",
    category: "company",
    description:
      "Privacy-first application utilizing system-level security overlays and biometric authentication to safeguard user data.",
    color: "#3b82f6",
    tech: ["Kotlin", "Room DB", "Biometrics", "Dagger Hilt"],
    androidLink: "https://play.google.com/store/apps/details?id=com.app.lockit.smartlock",
  },
];

const additionalApps = [
  "BloodPressure",
  "Clap Find Phone",
  "Weather",
  "QR Code",
  "Photo Cleaner",
  "Call Themes",
  "Don't Touch My Phone",
  "PDF",
  "Spin Wheel",
  "Game Love",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("personal");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="bg-slate-950 py-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            MY PROJECTS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-teal-400" />
        </motion.div>

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16"
        >
          {[
            { label: "Total Downloads", value: "30M+", sub: "Across global markets" },
            { label: "Products", value: "30+", sub: "Published on Play Store" },
            { label: "Avg Rating", value: "4.0+", sub: "High user satisfaction" },
            { label: "Crash Rate", value: "< 1%", sub: "High app stability" },
          ].map((stat, index) => (
            <div key={index} className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-16">
          <button
            onClick={() => setActiveTab("company")}
            className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
              activeTab === "company"
                ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800"
            }`}
          >
            COMPANY
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800"
            }`}
          >
            PERSONAL
          </button>
        </div>
        
        {activeTab === "company" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10 flex items-center gap-4 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <i className="fas fa-info-circle text-blue-400"></i>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-blue-400 font-bold">Note:</span> These represent my most recent professional contributions and high-impact products. I have successfully delivered <span className="text-white font-medium">30+ additional applications</span> across various domains that are not featured in this highlighted selection.
            </p>
          </motion.div>
        )}

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Card
                key={project.title}
                i={i}
                title={project.title}
                color={project.color}
                description={project.description}
                githubLink={project.githubLink}
                androidLink={project.androidLink}
                iosLink={project.iosLink}
                tech={project.tech}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 rounded-3xl border border-gray-800/50 bg-zinc-900/40 p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Other Apps I Have Built
          </h3>
          <p className="text-gray-400 mb-5">
            Products delivered across different domains (store links are not available for all apps).
          </p>
          <div className="flex flex-wrap gap-2">
            {additionalApps.map((app) => (
              <span
                key={app}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {app}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Card({
  i,
  title,
  description,
  color,
  githubLink,
  androidLink,
  iosLink,
  tech = [],
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="h-full bg-zinc-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden flex flex-col p-8 transition-all duration-300 hover:border-gray-700 hover:bg-zinc-900 shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            {i + 1}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 line-clamp-4 mb-8 leading-relaxed">
          {description}
        </p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((t, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] font-mono rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto space-y-4">
          <div className="h-[1px] w-full bg-gray-800/50" />
          <div className="flex flex-wrap gap-4">
            {githubLink && githubLink !== "#" && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 transition-colors"
                title="View Source"
              >
                <FaGithub size={20} className="text-white" />
              </a>
            )}
            {androidLink && (
              <a
                href={androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 transition-colors"
                title="Android"
              >
                <FaAndroid size={20} color={color} />
              </a>
            )}
            {iosLink && (
              <a
                href={iosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700 transition-colors"
                title="iOS"
              >
                <FaApple size={20} color={color} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  androidLink: PropTypes.string,
  iosLink: PropTypes.string,
};
