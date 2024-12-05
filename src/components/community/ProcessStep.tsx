import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ProcessStep = ({ icon: Icon, title, description }: ProcessStepProps) => (
  <div className="glass p-4 rounded-xl">
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-gradient-sunshine" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);