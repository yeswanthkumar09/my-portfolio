import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Trophy, Target, Flame, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "yeswanth _09",
    profileUrl: "https://leetcode.com/u/QTTpkb8Una/",
    color: "from-[#FFA116] to-[#FFD43B]",
    shadowColor: "shadow-orange-500/20",
    bgColor: "bg-[#FFA116]/10",
    textColor: "text-[#FFA116]",
    solved: "150+",
  },
  {
    platform: "GeeksforGeeks",
    username: "yeswanth _09",
    profileUrl: "https://www.geeksforgeeks.org/profile/yashagat10a2?tab=activity",
    color: "from-[#2F8D46] to-[#60BC6E]",
    shadowColor: "shadow-green-500/20",
    bgColor: "bg-[#2F8D46]/10",
    textColor: "text-[#2F8D46]",
    solved: "100+",
  },
];

export const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding-profiles" className="relative section-padding mb-16 md:mb-24 pb-12 overflow-hidden bg-card/10">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing my problem-solving prowess and consistency across competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group"
            >
              <Card className={`relative h-full bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl ${profile.shadowColor}`}>
                {/* Accent Gradient Spine */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${profile.color}`} />

                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6">
                    {/* Platform Logo Circle */}
                    <div className={`w-20 h-20 rounded-2xl ${profile.bgColor} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                      <Code className={`w-10 h-10 ${profile.textColor}`} />
                      <div className={`absolute inset-0 rounded-2xl ${profile.bgColor} animate-pulse -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-display font-bold mb-1">
                        {profile.platform}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-4">
                        @{profile.username}
                      </p>

                      <div className="flex items-center justify-center gap-3 py-3 px-6 rounded-full bg-secondary/50 border border-border/50 mb-8 group-hover:border-primary/30 transition-colors">
                        <Target className={`w-5 h-5 ${profile.textColor}`} />
                        <span className="text-lg font-bold">
                          {profile.solved} <span className="text-sm font-medium text-muted-foreground">Solved</span>
                        </span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 rounded-xl border-primary/20 hover:border-primary hover:bg-primary/5 group/btn overflow-hidden relative"
                    >
                      <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold transition-transform group-hover/btn:-translate-x-1">View Profile</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />

                        {/* Shimmer effect */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Decorative background element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${profile.bgColor} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
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
