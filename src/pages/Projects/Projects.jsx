import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Expense – Money Planner",
    category: "company",
    description:
      "A comprehensive personal finance management application designed to track daily spending, organize income, and provide practical financial insights with a focus on simplicity and user experience.",
    color: "#6366f1",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.moneytracker.financecontrol.dailybudget.expenses",
  },
  {
    title: "Auto Clicker – Tap Tool",
    category: "company",
    description:
      "A powerful touch automation tool designed to automate repetitive screen taps and gestures with precision. Features an intuitive setup for hands-free interaction, making it ideal for gaming and productivity tasks.",
    color: "#f43f5e",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.autoclicker.tap.automation",
  },
  {
    title: "Walk Log – Pedometer Counter",
    category: "company",
    description:
      "A sophisticated health and fitness application designed to monitor daily physical activity. Tracks steps, distance covered, calories burned, and active duration with personalized goal setting and detailed activity analytics.",
    color: "#f59e0b",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.pedometer.steptracker.runwalk.dailytrack",
  },
  {
    title: "Money Tracker: Budget Manager",
    category: "personal",
    description:
      "A personal finance tool designed to help users track daily expenses and understand their spending habits through a simple, clear, and intuitive interface. Features include multi-wallet management and detailed transaction history.",
    color: "#22c55e",
    githubLink: "#",
    iosLink: "https://apps.apple.com/us/app/money-tracker-budget-manager/id6757209828",
  },
  {
    title: "ETAX MOBILE",
    category: "company",
    description:
      "A comprehensive mobile application for tax services, allowing users to pay taxes, look up registrations, and manage financial documents seamlessly. Built for both iOS and Android.",
    color: "#4ade80",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.etax.icanhan",
    iosLink: "https://apps.apple.com/vn/app/etax-mobile/id1589750682?l=vi",
  },
  {
    title: "Coloring Book - Paint & Color Art",
    category: "personal",
    description:
      "A relaxing and creative coloring book application for all ages, featuring a wide variety of artworks to color and share. High performance with smooth rendering.",
    color: "#fb923c",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.fillcolor.coloringbook.paint.colorart",
  },
  {
    title: "App Lock – Protect Privacy",
    category: "personal",
    description:
      "A professional privacy-focused application designed to safeguard personal data by locking sensitive apps with a secure PIN. Features a streamlined interface, multimedia protection for galleries, and real-time security overlays.",
    color: "#3b82f6",
    githubLink: "#",
    androidLink: "https://play.google.com/store/apps/details?id=com.app.lockit.smartlock",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("company");

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
              />
            ))}
          </AnimatePresence>
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
