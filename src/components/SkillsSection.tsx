import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Database,
  Workflow,
  Github,
  Figma,
  Laptop,
  Braces,
  Eye,
  Settings,
  Cloud,
  FileCode2,
  Package,
  Coffee,
  Atom,
  Zap,
  Server,
  FileJson,
  Layout,
  MousePointer2,
  Search,
  Binary
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: Coffee, color: "#f89820" },
      { name: "C++", icon: Braces, color: "#00599c" },
      { name: "Python", icon: FileJson, color: "#3776ab" },
      { name: "C", icon: Terminal, color: "#a8b9cc" },

    ],
  },
  {
    title: "Full-Stack Development",
    icon: Globe,
    skills: [
      { name: "HTML", icon: Layers, color: "#e34f26" },
      { name: "CSS", icon: Eye, color: "#1572b6" },
      { name: "Tailwind CSS", icon: Cloud, color: "#06b6d4" },
      { name: "JavaScript", icon: FileCode2, color: "#f7df1e" },
      { name: "React.js", icon: Atom, color: "#61dafb" },
      { name: "Node.js", icon: Zap, color: "#339933" },
      { name: "Express.js", icon: Package, color: "#000000" },
      { name: "MongoDB", icon: Database, color: "#47a248" },
      { name: "MySQL", icon: Database, color: "#4479a1" },
    ],
  },
  {
    title: "Tools",
    icon: Laptop,
    skills: [
      { name: "VS Code", icon: Code2, color: "#007acc" },
      { name: "IntelliJ IDEA", icon: Laptop, color: "#fe315d" },
      { name: "Postman", icon: Workflow, color: "#ff6c37" },
      { name: "Git & GitHub", icon: Github, color: "#f05032" },
      { name: "Figma", icon: Figma, color: "#f24e1e" },
    ],
  },
];

const SkillItem = ({ skill, index, isInView }: { skill: { name: string, icon: React.ElementType, color: string }, index: number, isInView: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-full"
    >
      <div className="relative p-4 md:p-6 rounded-2xl bg-secondary/10 border border-border/50 backdrop-blur-sm group-hover:border-primary/40 group-hover:bg-primary/[0.05] transition-all duration-500 shadow-lg group-hover:shadow-primary/20 overflow-hidden flex flex-col items-center justify-center gap-4 h-full">
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4 text-center" style={{ transform: "translateZ(50px)" }}>
          <div
            className="p-4 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 shadow-[5px_5px_15px_rgba(0,0,0,0.3),inset_0_0_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-500 transform group-hover:scale-110"
            style={{ color: skill.color }}
          >
            <skill.icon className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <span className="text-sm md:text-base font-display font-bold text-foreground/80 group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </span>
        </div>

        {/* 3D Reflection Flare */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative section-padding mb-16 md:mb-24 pb-12 overflow-hidden bg-card/5">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed">
            A specialized collection of modern technologies and tools that power my development workflow.
          </p>
        </motion.div>

        <div className="space-y-24">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * catIndex }}
              className="flex flex-col gap-10"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-0.5 w-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent rounded-full" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index + catIndex * 5}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Custom styles for 3D perspective */}
      <style dangerouslySetInnerHTML={{
        __html: `
        #skills {
          perspective: 1500px;
        }
      `}} />
    </section>
  );
};
