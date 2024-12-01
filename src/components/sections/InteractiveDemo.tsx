import EnhancedChatPreview from "@/components/EnhancedChatPreview";

interface InteractiveDemoProps {
  onServiceChange: (service: string) => void;
}

const InteractiveDemo = ({ onServiceChange }: InteractiveDemoProps) => {
  return (
    <section className="section-padding">
      <EnhancedChatPreview onServiceChange={onServiceChange} />
    </section>
  );
};

export default InteractiveDemo;