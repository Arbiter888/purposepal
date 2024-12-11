import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { coachPersonalities } from "@/data/chatMessages";

const getInitialMessage = (service: string) => {
  const coach = coachPersonalities[service as keyof typeof coachPersonalities];
  if (!coach) return [];
  
  return [{
    type: 'ai',
    content: `Hi! I'm ${coach.name}, your ${coach.role}. How can I help you today?`,
    service,
  }];
};

export const useChat = (service: string) => {
  const [messages, setMessages] = useState(getInitialMessage(service));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages(getInitialMessage(service));
  }, [service]);

  const sendMessage = async (content: string) => {
    const userMessage = {
      type: 'user',
      content,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-coach', {
        body: { message: content, service }
      });

      if (error) throw error;

      const aiResponse = {
        type: 'ai',
        content: data.response,
        service,
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        type: 'ai',
        content: "I apologize, but I'm having trouble responding right now. Please try again later.",
        service,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading
  };
};