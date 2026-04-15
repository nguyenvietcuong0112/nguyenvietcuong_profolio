import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiFlutter,
  SiAndroid,
  SiMysql,
} from "react-icons/si";
import { TbBrandVscode, TbApi } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
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
    color: "text-blue-400",
    skills: [
      { name: "Android Native", icon: <SiAndroid className="w-4 h-4 text-[#3DDC84]" /> },
      { name: "Kotlin / Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
      { name: "Flutter / Dart", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
      { name: "React Native", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
    ],
  },
  {
    icon: Layout,
    title: "Architecture & Reactive",
    color: "text-purple-400",
    skills: [
      { name: "MVVM / MVI", icon: <BsGrid1X2 className="w-4 h-4 text-purple-400" /> },
      { name: "Clean Architecture", icon: <FcWorkflow className="w-4 h-4" /> },
      { name: "Coroutines / Flow", icon: <MdAnimation className="w-4 h-4 text-cyan-400" /> },
      { name: "Hilt / Dagger", icon: <Cpu className="w-4 h-4 text-amber-400" /> },
      { name: "Firebase / Room", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
    ],
  },
  {
    icon: Cloud,
    title: "Engineering Excellence",
    color: "text-orange-400",
    skills: [
      { name: "CI / CD", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Performance Profiling", icon: <Database className="w-4 h-4 text-green-400" /> },
      { name: "Unit / UI Testing", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
      { name: "REST / GraphQL", icon: <TbApi className="w-4 h-4 text-[#FF6C37]" /> },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
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
