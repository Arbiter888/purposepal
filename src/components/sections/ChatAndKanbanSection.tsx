import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import SavedPlans from "@/components/SavedPlans";
import EnhancedChatPreview from "@/components/EnhancedChatPreview";
import { Plan } from "@/components/SavedPlans";

interface ChatAndKanbanSectionProps {
  onServiceChange: (service: string) => void;
}

const ChatAndKanbanSection = ({ onServiceChange }: ChatAndKanbanSectionProps) => {
  const { data: savedPlans, isLoading, refetch } = useQuery({
    queryKey: ['saved-plans'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('saved_plans')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        toast({
          title: "Error loading saved plans",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }

      return (data as Plan[]) || [];
    },
  });

  const handleSimulatedPlan = async (type: 'plan' | 'suggestion', service: string) => {
    const newPlan = {
      title: `${type === 'plan' ? 'New Plan' : 'New Suggestion'} for ${service}`,
      content: `This is a simulated ${type} for ${service} created from the chat interface.`,
      type,
      service,
      status: 'active',
      user_id: (await supabase.auth.getUser()).data.user?.id,
    };

    const { error } = await supabase
      .from('saved_plans')
      .insert(newPlan);

    if (error) {
      toast({
        title: "Error creating plan",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: `${type === 'plan' ? 'Plan' : 'Suggestion'} created successfully!`,
    });

    refetch();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto">
      <div className="w-full">
        <EnhancedChatPreview 
          onServiceChange={onServiceChange} 
          onSimulatePlan={handleSimulatedPlan}
        />
      </div>
      <div className="w-full">
        <SavedPlans plans={savedPlans || []} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatAndKanbanSection;