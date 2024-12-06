import { useState } from "react";
import ChatPreview from "./ChatPreview";
import { Button } from "@/components/ui/button";
import { wellnessMessages, nutritionMessages, spiritualMessages, fitnessMessages, financialMessages } from "@/data/chatMessages";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
  onSimulatePlan?: (type: 'plan' | 'suggestion', service: string) => void;
}

const EnhancedChatPreview = ({ onServiceChange, onSimulatePlan }: EnhancedChatPreviewProps) => {
  const [selectedService, setSelectedService] = useState("wellness");

  const handleServiceChange = (service: string) => {
    setSelectedService(service);
    onServiceChange(service);
  };

  const messages = {
    wellness: wellnessMessages,
    nutrition: nutritionMessages,
    spiritual: spiritualMessages,
    fitness: fitnessMessages,
    financial: financialMessages,
  }[selectedService];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedService === "wellness" ? "default" : "outline"}
          onClick={() => handleServiceChange("wellness")}
        >
          Wellness
        </Button>
        <Button
          variant={selectedService === "nutrition" ? "default" : "outline"}
          onClick={() => handleServiceChange("nutrition")}
        >
          Nutrition
        </Button>
        <Button
          variant={selectedService === "spiritual" ? "default" : "outline"}
          onClick={() => handleServiceChange("spiritual")}
        >
          Spiritual
        </Button>
        <Button
          variant={selectedService === "fitness" ? "default" : "outline"}
          onClick={() => handleServiceChange("fitness")}
        >
          Fitness
        </Button>
        <Button
          variant={selectedService === "financial" ? "default" : "outline"}
          onClick={() => handleServiceChange("financial")}
        >
          Financial
        </Button>
      </div>

      <ChatPreview messages={messages} service={selectedService} onSimulatePlan={onSimulatePlan} />

      {onSimulatePlan && (
        <div className="flex gap-4 mt-4">
          <Button 
            onClick={() => onSimulatePlan('plan', selectedService)}
            variant="outline"
          >
            Simulate Plan
          </Button>
          <Button 
            onClick={() => onSimulatePlan('suggestion', selectedService)}
            variant="outline"
          >
            Simulate Suggestion
          </Button>
        </div>
      )}
    </div>
  );
};

export default EnhancedChatPreview;