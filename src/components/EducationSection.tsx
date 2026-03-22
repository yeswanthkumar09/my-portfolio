import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2023 – 2027",
    cgpa: "8.29",
    status: "Currently Pursuing",
    type: "university",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Sri Chaitanya",
    location: "Visakhapatnam, India",
    duration: "2021 – 2023",
    percentage: "97%",
    status: "Completed",
    type: "school",
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "Sun School",
    location: "Srikakulam, India",
    duration: "2020 – 2021",
    percentage: "97%",
    status: "Completed",
    type: "school",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative section-padding mb-16 md:mb-24 pb-8 overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my educational background and achievements.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-24 last:mb-0`}>

                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 * index }}
                    className={`w-12 h-12 rounded-full border-4 ${edu.status === "Currently Pursuing" ? 'border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]' : 'border-background bg-secondary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]'} flex items-center justify-center`}
                  >
                    <GraduationCap className={`w-6 h-6 ${edu.status === "Currently Pursuing" ? 'animate-pulse' : ''}`} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 * index }}
                  >
                    <Card className={`group bg-secondary/10 border-border/40 backdrop-blur-md card-hover transition-all duration-500 relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ${edu.status === "Currently Pursuing" ? 'border-primary/60 shadow-[0_0_20px_rgba(var(--primary),0.2)] ring-1 ring-primary/20' : 'hover:border-primary/40'}`}>
                      <CardContent className="p-8">
                        {/* Period Tag */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                            {edu.duration}
                          </span>
                          {edu.status === "Currently Pursuing" && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold shimmer">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              {edu.status}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-primary/80 font-semibold text-lg mt-1">
                          {edu.institution}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary/60" />
                            {edu.location}
                          </div>
                        </div>

                        {/* Grade Display */}
                        <div className="mt-8 pt-6 border-t border-border/30">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                              {edu.cgpa ? "CGPA" : "Percentage"}
                            </span>
                            <span className="text-3xl font-display font-black gradient-text">
                              {edu.cgpa || edu.percentage}
                            </span>
                          </div>
                        </div>
                      </CardContent>

                      {/* Decorative Corner Accent */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-primary/5 blur-2xl rounded-full -z-10`} />
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
