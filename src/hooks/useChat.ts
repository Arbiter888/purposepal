import { useState, useEffect } from 'react';
import { wellnessMessages, nutritionMessages, spiritualMessages, fitnessMessages, financialMessages } from "@/data/chatMessages";

const initialMessages = {
  wellness: wellnessMessages,
  nutrition: nutritionMessages,
  spiritual: spiritualMessages,
  fitness: fitnessMessages,
  financial: financialMessages,
};

export const useChat = (service: string) => {
  const [messages, setMessages] = useState(initialMessages[service as keyof typeof initialMessages] || []);

  useEffect(() => {
    // Reset messages when service changes
    setMessages(initialMessages[service as keyof typeof initialMessages] || []);
  }, [service]);

  const sendMessage = (content: string) => {
    // Add user message
    const userMessage = {
      type: 'user',
      content,
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: `Thank you for your message about "${content}". As your ${service} coach, I'm here to help! Let me know what specific guidance you're looking for.`,
        service,
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return {
    messages,
    sendMessage,
  };
};