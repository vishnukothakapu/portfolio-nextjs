"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiMongodb,
    SiNextdotjs,
    SiExpress,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiExpo,
    SiCss3,
    SiHtml5,
    SiRemix,
    SiCplusplus,
    SiGit,
    SiPostman,
    SiWebstorm,
    SiWordpress,
    SiFigma
} from "react-icons/si";
import { useState, useEffect } from "react";

const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#00BCFF]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
    { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "React Native", icon: SiReact, color: "text-[#00DBFF]" },
    { name: "WordPress", icon: SiWordpress, color: "text-[#21759B]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Expo", icon: SiExpo, color: "text-[#1C2024] dark:text-white" },
    { name: "WebStorm", icon: SiWebstorm, color: "text-blue-500" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    { name: "Remix", icon: SiRemix, color: "text-black dark:text-white" },
];

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="py-20 bg-white dark:bg-black relative overflow-hidden" id="skills">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    My Skills
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Technologies & tools I work with
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 dark:text-white">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <skill.icon className={`text-4xl ${skill.color}`} />
                        <Badge variant="secondary" className="mt-3 px-3 py-1 text-sm whitespace-nowrap">
                            {skill.name}
                        </Badge>

                    </motion.div>
                ))}

            </div>

            {hoveredSkill && (
                <motion.div
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: cursorPos.x + 10,
                        top: cursorPos.y + 10,
                    }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <hoveredSkill.icon className={`text-4xl ${hoveredSkill.color}`} />
                </motion.div>
            )}
        </section>
    );
};

export default Skills;
