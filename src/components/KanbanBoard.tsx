import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plan } from "./SavedPlans";

interface KanbanColumnProps {
  title: string;
  plans: Plan[];
  icon: React.ReactNode;
  className?: string;
}

const KanbanColumn = ({ title, plans, icon, className = "" }: KanbanColumnProps) => (
  <div className={`flex-1 min-w-[300px] glass rounded-xl p-6 ${className}`}>
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="ml-auto text-sm text-white/50">({plans.length})</span>
    </div>
    <ScrollArea className="h-[500px]">
      <div className="space-y-4 pr-4">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold mb-2">{plan.title}</h4>
                <p className="text-sm text-white/70 line-clamp-2">{plan.content}</p>
              </div>
              <span className="text-xs text-white/50">
                {new Date(plan.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full glass ${
                plan.type === 'plan' ? 'bg-blue-500/20' : 'bg-green-500/20'
              }`}>
                {plan.type}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full glass ${
                plan.service === 'wellness' ? 'bg-purple-500/20' :
                plan.service === 'nutrition' ? 'bg-green-500/20' :
                plan.service === 'spiritual' ? 'bg-yellow-500/20' :
                plan.service === 'fitness' ? 'bg-blue-500/20' :
                'bg-pink-500/20'
              }`}>
                {plan.service}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default KanbanColumn;