import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden mb-16 md:mb-24 pb-8 group"
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${smoothMouseX}px ${smoothMouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 md:pt-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Emoji Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl md:text-7xl shadow-2xl border border-primary/20 backdrop-blur-sm">
              👨‍💼
            </div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 bg-background p-2 rounded-full border border-primary/20 shadow-lg"
            >
              💻
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold flex flex-col items-center"
          >
            <span className="gradient-text glow-text flex flex-wrap justify-center">
              {"Yeswanth Kumar".split("").map((char, index) => (
                <motion.span
                  key={`first-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="text-foreground flex flex-wrap justify-center">
              {"Agathamudi".split("").map((char, index) => (
                <motion.span
                  key={`last-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-primary font-medium"
          >
            Full-Stack Software Developer
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl"
          >
            Passionate about building scalable and high-performance full-stack applications. Focused on delivering clean, efficient, and production-ready solutions that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="glow-sm hover:glow transition-all duration-300"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="hover:bg-secondary/80"
              asChild
            >
              <a href="/new-cv-06.pdf" target="_blank" rel="noopener noreferrer" download="Yeswanth_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://github.com/yeswanthkumar09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:glow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yeswanthkumaragathamudi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:glow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yashagathamudi@gmail.com"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:glow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </motion.section>
  );
};
