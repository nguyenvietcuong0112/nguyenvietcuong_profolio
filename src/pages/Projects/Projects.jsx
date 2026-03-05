import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "ETAX MOBILE",
    description:
      "A comprehensive mobile application for tax services, allowing users to pay taxes, look up registrations, and manage financial documents seamlessly. Built for both iOS and Android.",
    link: "/projects/etax_mobile.png",
    color: "#4ade80",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Viettel Data Mining Platform",
    description:
      "A high-performance data analytics and aggregation platform featuring advanced visualization with Echarts, ChartJs, and D3Js for complex data insights.",
    link: "/projects/viettel_mining.png",
    color: "#f87171",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Jasu (Tutor Connection App)",
    description:
      "An innovative platform connecting tutors and students, featuring real-time class registration, tutor profiles, and a streamlined educational management system.",
    link: "/projects/jasu_app.png",
    color: "#60a5fa",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Productivity & Utility Apps",
    description:
      "A suite of modular mobile applications across productivity and utility domains, implementing core features like background services, push notifications, and Firebase integration.",
    link: "/projects/mobile_apps.png",
    color: "#c084fc",
    githubLink: "#",
    liveLink: "#",
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[15%] h-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Simplified modern card design without image */}
        <div className="w-full bg-zinc-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}40` }}
                />
                <div className="h-[1px] w-12 md:w-24 bg-gray-700" />
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md text-gray-400 px-4 py-1.5 rounded-xl text-xs font-mono border border-gray-700/50">
                PROJECT {i + 1}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              {title}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>

            <div className="mt-auto">
              <div className="w-full h-[1px] bg-gray-800/50 mb-8" />

              <div className="flex items-center gap-8">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:opacity-80"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color }}
                  >
                    View Source
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:opacity-80"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color }}
                  >
                    Live Demo
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
