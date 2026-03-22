import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Cpu, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Building scalable web applications from frontend to backend with a strong focus on performance, clean architecture, and efficient system design.",
  },
  {
    icon: Laptop,
    title: "Responsive Web Applications",
    description:
      "Creating modern, responsive applications that work seamlessly across all devices, ensuring usability, accessibility, and maintainable code.",
  },
  {
    icon: Cpu,
    title: "System-Oriented Development",
    description:
      "Designing applications with a focus on structured architecture, scalability, and efficient handling of real-world use cases.",
  },
  {
    icon: Rocket,
    title: "Open to Opportunities",
    description:
      "Actively seeking opportunities to contribute to real-world projects, collaborate with teams, and grow by solving meaningful problems.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative section-padding mb-16 md:mb-24 pb-8 overflow-hidden bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
            Leveraging modern technologies to build robost, scalable, and intuitive software solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm card-hover group text-center overflow-hidden relative transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.3)]">
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                <CardHeader className="pb-4 relative z-10 pt-8">
                  <div className="mx-auto p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300 w-fit">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-display mt-6 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pb-8 px-6">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
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
