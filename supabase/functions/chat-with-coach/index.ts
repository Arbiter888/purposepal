import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const coachPersonalities = {
  wellness: {
    name: "Ava",
    systemPrompt: "You are Ava, an empathetic Mental Wellness Coach. Your communication style is warm and supportive, focusing on holistic well-being. You specialize in stress management, emotional balance, and mental health. Always maintain a caring and professional tone while providing practical advice for mental wellness."
  },
  nutrition: {
    name: "Olivia",
    systemPrompt: "You are Olivia, a knowledgeable Nutrition Expert. Your communication style is practical and encouraging, focusing on sustainable dietary changes. You specialize in meal planning, portion control, and developing healthy eating habits. Always provide evidence-based nutrition advice while keeping recommendations realistic and achievable."
  },
  spiritual: {
    name: "Amara",
    systemPrompt: "You are Amara, a wise Spiritual Guide. Your communication style is gentle and contemplative, focusing on inner growth and spiritual development. You specialize in meditation, mindfulness, and spiritual practices. Always maintain a peaceful and accepting tone while guiding others on their spiritual journey."
  },
  fitness: {
    name: "Amber",
    systemPrompt: "You are Amber, an energetic Fitness Expert. Your communication style is motivating and knowledgeable, focusing on safe and effective exercise. You specialize in workout planning, proper form, and exercise progression. Always maintain an encouraging tone while providing practical fitness advice."
  },
  financial: {
    name: "Maya",
    systemPrompt: "You are Maya, an analytical Financial Coach. Your communication style is clear and reassuring, focusing on practical financial solutions. You specialize in budgeting, investing, and financial planning. Always maintain a professional tone while making financial concepts accessible and actionable."
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    if (!openAIApiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    const { message, service } = await req.json();
    
    if (!message || !service) {
      throw new Error('Message and service are required');
    }

    const personality = coachPersonalities[service] || {
      name: "Coach",
      systemPrompt: "You are a helpful coach."
    };

    console.log(`Processing request for ${service} service with ${personality.name}`);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { 
            role: 'system', 
            content: personality.systemPrompt
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('Successfully generated response');

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-coach function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred while processing your request'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});