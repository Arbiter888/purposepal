import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages(initialMessages[service as keyof typeof initialMessages] || []);
  }, [service]);

  const sendMessage = async (content: string) => {
    // Add user message
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