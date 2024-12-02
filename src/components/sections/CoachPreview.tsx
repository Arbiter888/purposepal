import { motion } from "framer-motion";
import { MessageSquare, Star, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoachPreviewProps {
  activeService: string;
}

const coachData = {
  wellness: {
    title: "Mental Wellness Coach",
    description: "Transform your mental well-being with personalized guidance from your dedicated AI-powered Wellness Coach. Get expert advice on stress management, mindfulness, and emotional balance.",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    tags: ["Stress Management", "Mindfulness", "Emotional Balance", "Personal Growth"],
    videoUrl: "https://customer-6bwzxcz6kiyvxgqq.cloudflarestream.com/9a9d1d2f8d76cd6d8f4a7901ad44c2f3/manifest/video.m3u8"
  },
  nutrition: {
    title: "Nutrition Expert",
    description: "Transform your dietary habits with personalized guidance from your dedicated AI-powered Nutrition Coach. Get expert advice on meal planning, portion control, and healthy eating strategies.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    tags: ["Meal Planning", "Portion Control", "Dietary Analysis", "Nutritional Guidance"],
    videoUrl: "https://customer-6bwzxcz6kiyvxgqq.cloudflarestream.com/9a9d1d2f8d76cd6d8f4a7901ad44c2f3/manifest/video.m3u8"
  },
  spiritual: {
    title: "Spiritual Guide",
    description: "Transform your spiritual journey with personalized guidance from your dedicated AI-powered Spiritual Coach. Get expert advice on meditation, mindfulness, and personal development.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    tags: ["Meditation", "Mindfulness", "Spiritual Growth", "Inner Peace"],
    videoUrl: "https://customer-6bwzxcz6kiyvxgqq.cloudflarestream.com/9a9d1d2f8d76cd6d8f4a7901ad44c2f3/manifest/video.m3u8"
  },
  fitness: {
    title: "Fitness Expert",
    description: "Transform your fitness journey with personalized guidance from your dedicated AI-powered Fitness Coach. Get expert advice on workouts, form correction, and exercise planning.",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    tags: ["Workout Planning", "Form Guidance", "Exercise Tips", "Fitness Goals"],
    videoUrl: "https://customer-6bwzxcz6kiyvxgqq.cloudflarestream.com/9a9d1d2f8d76cd6d8f4a7901ad44c2f3/manifest/video.m3u8"
  },
  financial: {
    title: "Financial Coach",
    description: "Transform your financial future with personalized guidance from your dedicated AI-powered Financial Coach. Get expert advice on budgeting, investments, and wealth building strategies.",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    tags: ["Investment Planning", "Budgeting", "Wealth Building", "Tax Strategy"],
    videoUrl: "https://customer-6bwzxcz6kiyvxgqq.cloudflarestream.com/9a9d1d2f8d76cd6d8f4a7901ad44c2f3/manifest/video.m3u8"
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
      className="glass rounded-3xl p-8 backdrop-blur-xl"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className={`text-3xl font-bold bg-gradient-to-r ${coach.gradient} bg-clip-text text-transparent`}>
            Meet Your {coach.title}
          </h3>
          <p className="text-lg text-muted-foreground">
            {coach.description}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-background bg-gradient-to-r ${coach.gradient}`}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by 10,000+ users
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className={`bg-gradient-to-r ${coach.gradient}`}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
            <Button variant="outline" className="border-blue-400/20">
              <Video className="w-4 h-4 mr-2" />
              Schedule Video Call
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${coach.gradient.replace(/(from-|via-|to-)/g, "$1opacity-20")} rounded-3xl blur-3xl`} />
          <div className="relative bg-muted/80 rounded-3xl overflow-hidden">
            <video 
              className="w-full aspect-video object-cover rounded-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={coach.videoUrl} type="application/x-mpegURL" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${coach.gradient}`} />
                  <div>
                    <p className="font-medium text-white">{coach.title}</p>
                    <p className="text-sm text-white/80">Online now</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coach.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-sm text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoachPreview;