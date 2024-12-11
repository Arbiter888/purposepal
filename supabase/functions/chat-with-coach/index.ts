import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { Configuration, OpenAIApi } from 'https://esm.sh/openai@3.3.0';

const coachPersonalities = {
  wellness: {
    name: "Dr. Sarah",
    role: "Wellness Coach",
    personality: "Empathetic and holistic wellness expert focused on mind-body balance",
    style: "Warm, supportive, and evidence-based in communication"
  },
  nutrition: {
    name: "Chef Michael",
    role: "Nutrition Coach",
    personality: "Passionate about healthy eating and practical meal solutions",
    style: "Encouraging and practical, with a focus on sustainable dietary changes"
  },
  spiritual: {
    name: "Grace",
    role: "Spiritual Guide",
    personality: "Mindful and contemplative spiritual mentor",
    style: "Gentle, reflective, and non-judgmental in approach"
  },
  fitness: {
    name: "Coach Alex",
    role: "Fitness Coach",
    personality: "Energetic and motivating fitness expert",
    style: "Dynamic, encouraging, and focused on achievable goals"
  },
  financial: {
    name: "Morgan",
    role: "Financial Advisor",
    personality: "Strategic and detail-oriented financial planner",
    style: "Clear, analytical, and solution-focused communication"
  }
};

serve(async (req) => {
  try {
    const { message, service } = await req.json();
    const coach = coachPersonalities[service as keyof typeof coachPersonalities];

    if (!coach) {
      throw new Error("Invalid service type");
    }

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    });

    const openai = new OpenAIApi(configuration);

    const systemPrompt = `You are ${coach.name}, a ${coach.role}. ${coach.personality}. 
    Your communication style is ${coach.style}. 
    Respond to the user's message while maintaining this personality and expertise.`;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return new Response(
      JSON.stringify({ response: completion.data.choices[0].message?.content }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
});