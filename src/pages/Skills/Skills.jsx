import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJest,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiAndroid,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, description, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-xl bg-gray-800/80 ${color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 rounded-full"></div>
        </div>
      </div>
      
      <p className="text-xs text-gray-400 mb-6 leading-relaxed font-medium">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/30 hover:bg-blue-500/10 text-gray-300 border-gray-700/50 hover:border-blue-500/30 flex items-center gap-2 py-1.5 px-3 transition-all duration-300"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium text-[13px]">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Mobile Engineering",
      description: "Mastering complex mobile ecosystems to build modular, highly scalable, and performance-driven applications.",
      color: "text-blue-400",
      skills: [
        { name: "Android Native", icon: <SiAndroid className="w-4 h-4 text-[#3DDC84]" /> },
        { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "React Native", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Crafting pixel-perfect, responsive interfaces with clean code and distributed state management systems.",
      color: "text-purple-400",
      skills: [
        { name: "ReactJS", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38BDF8]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Systems",
      description: "Architecting microservices, scalable RESTful APIs, and robust database schemas for high-concurrency systems.",
      color: "text-emerald-400",
      skills: [
        { name: "Java / Kotlin", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Architecture & Delivery",
      description: "Implementing Clean Architecture, reactive programming patterns, and automated CI/CD for enterprise-grade stability.",
      color: "text-orange-400",
      skills: [
        { name: "Clean Architecture", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "CI / CD", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Performance Profiling", icon: <Database className="w-4 h-4 text-green-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
