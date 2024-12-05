import { motion } from "framer-motion";
import { MessageSquare, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoachPreviewProps {
  activeService: string;
}

const coachData = {
  wellness: {
    name: "Ava",
    title: "Mental Wellness Coach",
    description: "Transform your mental well-being with personalized guidance from your dedicated AI-powered Wellness Coach.",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    tags: ["Stress Management", "Mindfulness", "Emotional Balance"],
    videoUrl: "https://www.youtube.com/embed/GkOue0KxWaQ",
    backgroundImage: "/lovable-uploads/440c76a5-97ea-4586-87db-b7ad21444b16.png"
  },
  nutrition: {
    name: "Olivia",
    title: "Nutrition Expert",
    description: "Transform your dietary habits with personalized guidance from your dedicated AI-powered Nutrition Coach.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    tags: ["Meal Planning", "Portion Control", "Dietary Analysis"],
    videoUrl: "https://www.youtube.com/embed/_9x2l119RGw",
    backgroundImage: "/lovable-uploads/4335b249-4c44-4b85-bbbf-fa72d693bc4f.png"
  },
  spiritual: {
    name: "Amara",
    title: "Spiritual Guide",
    description: "Transform your spiritual journey with personalized guidance from your dedicated AI-powered Spiritual Coach.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    tags: ["Meditation", "Mindfulness", "Spiritual Growth"],
    videoUrl: "https://www.youtube.com/embed/4cmO7dEGQBk",
    backgroundImage: "/lovable-uploads/440c76a5-97ea-4586-87db-b7ad21444b16.png"
  },
  fitness: {
    name: "Amber",
    title: "Fitness Expert",
    description: "Transform your fitness journey with personalized guidance from your dedicated AI-powered Fitness Coach.",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    tags: ["Workout Planning", "Form Guidance", "Exercise Tips"],
    videoUrl: "https://www.youtube.com/embed/O0o-Y25rv7c",
    backgroundImage: "/lovable-uploads/2b866cad-b0b6-4291-b93e-404f8ef8e0e4.png"
  },
  financial: {
    name: "Maya",
    title: "Financial Coach",
    description: "Transform your financial future with personalized guidance from your dedicated AI-powered Financial Coach.",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    tags: ["Investment Planning", "Budgeting", "Wealth Building"],
    videoUrl: "https://www.youtube.com/embed/UiJ0OfgSt1M",
    backgroundImage: "/lovable-uploads/e1950664-3053-4b9a-aed1-78f46c6e7573.png"
  },
};

const CoachPreview = ({ activeService }: CoachPreviewProps) => {
  const coach = coachData[activeService as keyof typeof coachData];

  return (
    <motion.div
      key={activeService}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-3xl p-4 md:p-6 lg:p-8 h-full flex flex-col"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="space-y-4 mb-6">
          <motion.h3 
            className={`text-3xl md:text-4xl font-bold text-[#4ADE80] mb-2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meet {coach.name}
          </motion.h3>
          <motion.p 
            className="text-base md:text-lg text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {coach.description}
          </motion.p>
        </div>

        <motion.div 
          className="relative rounded-2xl overflow-hidden aspect-video mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <iframe 
            src={coach.videoUrl}
            title={`Meet ${coach.name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {coach.tags.map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm bg-[#4ADE80]/20 text-[#4ADE80]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div 
          className="mt-auto space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            className="w-full h-14 text-base font-medium bg-gradient-to-r from-[#4ADE80] to-[#2DD4BF] hover:opacity-90 transition-opacity rounded-2xl"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Chat Now
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-14 text-base font-medium border-none bg-white/5 hover:bg-white/10 rounded-2xl"
          >
            <Video className="w-5 h-5 mr-2" />
            Schedule Video Call
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoachPreview;