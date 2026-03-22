import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Clock, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["Web Development", "Programming", "AI", "Others"];

const certifications = [
  // Web Development
  {
    title: "Build Responsive Real World Websites with HTML and CSS",
    issuer: "Udemy",
    date: "2025",
    duration: "40+ hours",
    category: "Web Development",
    credentialUrl: "https://www.udemy.com/certificate/UC-67fe1ac2-ca7a-413d-a604-3d5bf1098a1c/",
    image: null,
  },
  {
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    issuer: "Udemy",
    date: "2025",
    duration: "70+ hours",
    category: "Web Development",
    credentialUrl: "https://www.udemy.com/certificate/UC-8327a9af-3f0d-4c17-afb9-804228ab1652/",
    image: null,
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Udemy",
    date: "2025",
    duration: "80+ hours",
    category: "Web Development",
    credentialUrl: "https://www.udemy.com/certificate/UC-7fbdec49-3d8a-4133-a62f-32d6d137c2fb/",
    image: null,
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    date: "2026",
    duration: "40+ hours",
    category: "Web Development",
    credentialUrl: "https://www.udemy.com/certificate/UC-6953c6c1-9340-4c96-89b7-2f35e6172ce1/",
    image: null,
  },

  // Programming
  {
    title: "Learn Java Programming: Beginner to Master",
    issuer: "Udemy",
    date: "2025",
    duration: "60+ hours",
    category: "Programming",
    credentialUrl: "https://www.udemy.com/certificate/UC-f7f2ba8f-1675-4512-858c-c2b3ef241ade/",
    image: null,
  },
  {
    title: "Data Structures and Algorithms Complete Course - C++ & Java",
    issuer: "Udemy",
    date: "2025",
    duration: "80+ hours",
    category: "Programming",
    credentialUrl: "https://www.udemy.com/certificate/UC-ceddeb7b-fb65-4f41-82d5-fbb15b15e657/",
    image: null,
  },
  {
    title: "C++ Programming: OOPs & DSA",
    issuer: "CSE Pathshala",
    date: "2024",
    duration: "35+ hours",
    category: "Programming",
    credentialUrl: "#",
    image: null,
  },

  // AI
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    duration: "N/A",
    category: "AI",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E2F942686DDC1C474B7276EAC2DC231F3ED74D84EFD39D544DFF723C787BC940",
    image: null,
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const filteredCertifications = certifications.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <section id="certifications" className="relative section-padding mb-16 md:mb-24 pb-8 overflow-hidden bg-card/5">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuous learning and mastery of modern technologies through recognized certifications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 pointer-events-auto shadow-sm
                ${activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-primary/30 scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">No Certificates Yet</h3>
                <p className="text-muted-foreground">Check back later for updates in this category.</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredCertifications.map((cert) => (
                  <motion.div
                    layout
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="group bg-card/50 border-border/50 backdrop-blur-sm h-full overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                      <CardContent className="p-6 flex flex-col h-full relative z-10">
                        {/* Decorative Top Glow */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <Award className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0 pt-1">
                            <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-muted-foreground font-medium text-sm mt-1">{cert.issuer}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6 pb-6 border-b border-border/50">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary/60" />
                            <span>{cert.date}</span>
                          </div>
                          {cert.duration && cert.duration !== "N/A" && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary/60" />
                              <span>{cert.duration}</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-auto">
                          <Button
                            variant="outline"
                            className="w-full h-11 rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5 group/btn overflow-hidden relative"
                            asChild
                          >
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <span className="font-medium transition-transform group-hover/btn:-translate-x-1">View Credential</span>
                              <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />

                              {/* Shimmer effect */}
                              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
