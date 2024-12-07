import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

const ConvaiWidget = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <elevenlabs-convai agent-id="WO8DnLMvodLhjPDCkk24"></elevenlabs-convai>
    </div>
  );
};

export default ConvaiWidget;