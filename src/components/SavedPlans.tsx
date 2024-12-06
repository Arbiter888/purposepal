import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Clock, Archive } from "lucide-react";
import KanbanColumn from "./KanbanBoard";

export interface Plan {
  id: string;
  title: string;
  content: string;
  type: 'plan' | 'suggestion';
  status: 'active' | 'archived' | 'completed';
  service: string;
  created_at: string;
  user_id: string; // Added this field since it comes from Supabase
}

interface SavedPlansProps {
  plans: Plan[];
  isLoading: boolean;
}

const SavedPlans = ({ plans, isLoading }: SavedPlansProps) => {
  const activePlans = plans.filter(plan => plan.status === 'active');
  const completedPlans = plans.filter(plan => plan.status === 'completed');
  const archivedPlans = plans.filter(plan => plan.status === 'archived');

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-[600px] w-full" />
          <Skeleton className="h-[600px] w-full" />
          <Skeleton className="h-[600px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full glass rounded-3xl p-8"
    >
      <h2 className="text-3xl font-bold mb-8">Your Plans & Suggestions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
        <KanbanColumn
          title="Active"
          plans={activePlans}
          icon={<Clock className="w-5 h-5" />}
          className="bg-blue-500/10"
        />
        <KanbanColumn
          title="Completed"
          plans={completedPlans}
          icon={<CheckCircle2 className="w-5 h-5" />}
          className="bg-green-500/10"
        />
        <KanbanColumn
          title="Archived"
          plans={archivedPlans}
          icon={<Archive className="w-5 h-5" />}
          className="bg-yellow-500/10"
        />
      </div>
    </motion.div>
  );
};

export default SavedPlans;