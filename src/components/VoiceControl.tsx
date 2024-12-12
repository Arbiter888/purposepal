import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface VoiceControlProps {
  onVolumeChange: (volume: number) => void;
}

const VoiceControl = ({ onVolumeChange }: VoiceControlProps) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    onVolumeChange(isMuted ? 1 : 0);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMute}
      className="hover:bg-white/10"
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-white" />
      ) : (
        <Volume2 className="h-5 w-5 text-white" />
      )}
    </Button>
  );
};

export default VoiceControl;