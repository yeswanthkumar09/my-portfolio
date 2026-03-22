import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Server, Terminal, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreExpertise = [
  {
    icon: Code2,
    title: "Data Structures & Algorithms",
    description: "Strong problem-solving skills with a focus on optimizing time and space complexity",
  },
  {
    icon: Server,
    title: "System Design",
    description: "Understanding of scalable architectures, modular design, and real-world application structuring",
  },
  {
    icon: Terminal,
    title: "Programming",
    description: "Proficient in writing clean and efficient code with strong fundamentals in core programming concepts",
  },
  {
    icon: Laptop,
    title: "Full-Stack Development",
    description: "Experience in building responsive and dynamic web applications using modern technologies",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative section-padding bg-card/30 mb-16 md:mb-24 pb-8">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate about software development, with a strong drive to understand how systems work and how to build them efficiently. This curiosity has evolved into a commitment to creating scalable and impactful applications.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I focus on writing clean, maintainable code and building solutions that solve real-world problems, emphasizing performance, scalability, and solid design principles.
              </p>
            </div>

            {/* Education Card */}
            {/* <Card className="bg-secondary/20 border-primary/20 backdrop-blur-sm card-hover mt-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/20 text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">
                      B.Tech in Computer Science Engineering
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      Lovely Professional University
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                      Expected Graduation: 2027
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </motion.div>

          {/* Core Expertise (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Background Decorative Glow */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                <h3 className="text-2xl font-display font-bold tracking-tight">
                  Core Expertise
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {coreExpertise.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="h-full bg-secondary/10 border-border/40 backdrop-blur-sm card-hover hover:border-primary/40 group transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="p-3 w-fit rounded-lg bg-primary/5 text-primary group-hover:bg-primary/20 transition-colors duration-500 shadow-sm">
                            <skill.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-500">
                              {skill.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
