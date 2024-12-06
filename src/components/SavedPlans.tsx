import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Clock, Archive } from "lucide-react";

interface Plan {
  id: string;
  title: string;
  content: string;
  type: 'plan' | 'suggestion';
  status: 'active' | 'archived' | 'completed';
  service: string;
  created_at: string;
}

interface SavedPlansProps {
  plans: Plan[];
  isLoading: boolean;
}

const SavedPlans = ({ plans, isLoading }: SavedPlansProps) => {
  const activePlans = plans.filter(plan => plan.status === 'active');
  const completedPlans = plans.filter(plan => plan.status === 'completed');
  const archivedPlans = plans.filter(plan => plan.status === 'archived');

  const renderPlanList = (planList: Plan[]) => (
    <ScrollArea className="h-[400px] w-full pr-4">
      <div className="space-y-4">
        {planList.map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-white/70 line-clamp-2">{plan.content}</p>
              </div>
              <span className="text-sm text-white/50">
                {new Date(plan.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className={`text-sm px-3 py-1 rounded-full glass ${
                plan.type === 'plan' ? 'bg-blue-500/20' : 'bg-green-500/20'
              }`}>
                {plan.type}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full glass ${
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
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-[400px] w-full" />
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
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Your Plans & Suggestions</h2>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Active ({activePlans.length})
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Completed ({completedPlans.length})
          </span>
          <span className="flex items-center gap-2">
            <Archive className="w-4 h-4" /> Archived ({archivedPlans.length})
          </span>
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          {renderPlanList(activePlans)}
        </TabsContent>
        <TabsContent value="completed">
          {renderPlanList(completedPlans)}
        </TabsContent>
        <TabsContent value="archived">
          {renderPlanList(archivedPlans)}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default SavedPlans;