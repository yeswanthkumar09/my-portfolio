import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, Play, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: ShoppingCart,
    title: "Product Store Full-Stack Website",
    description:
      "A complete full-stack e-commerce style application featuring product management, user authentication, shopping cart functionality, and database integration for seamless CRUD operations.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveDemo: "#",
    sourceCode: "https://github.com/yeswanthkumar09/ProductStore",
    image: "/e-commerce-photo.png",
  },
  {
    icon: Play,
    title: "Netflix Clone (Full-Stack)",
    description:
      "A Netflix-inspired full-stack web application with user authentication, dynamic content rendering, responsive UI design, and integration with movie databases for real-time content display.",
    techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "TMDB API"],
    liveDemo: "#",
    sourceCode: "https://github.com/yeswanthkumar09/NetflixClone",
    image: "/netflix-photo.png",
  },
  {
    icon: Music,
    title: "Echo Stream – Music Streaming Web App",
    description:
      "A full-stack music streaming platform featuring smooth audio playback, playlist management, user accounts, and a modern UI focused on delivering an excellent listening experience.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Web Audio API"],
    liveDemo: "#",
    sourceCode: "https://github.com/yeswanthkumar09/EchoStream-Real-Time-Social-Music-Platform",
    image: "/spotify-photo.png",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative section-padding bg-card/30 mb-16 md:mb-24 pb-8">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent full-stack projects demonstrating my skills in building complete web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <Card className="h-full bg-card/50 border-border/50 card-hover group flex flex-col overflow-hidden">
                {/* Project Demo Image */}
                <div className="relative w-full h-48 overflow-hidden bg-secondary/30">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm text-primary">
                    <project.icon className="w-5 h-5" />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.liveDemo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:bg-secondary"
                      asChild
                    >
                      <a href={project.sourceCode}>
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
