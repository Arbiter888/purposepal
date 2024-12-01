import { motion } from "framer-motion";

const wellnessChat = [
  {
    type: "user",
    content: "Hi, I've been feeling overwhelmed lately and need help with managing stress and improving my overall well-being.",
    service: "wellness"
  },
  {
    type: "ai",
    content: "I understand you're dealing with stress. Let me assess your situation:\n\n1. You're seeking overall well-being improvement\n2. Stress is affecting your daily life\n3. You're ready to make positive changes\n\nBased on this, I recommend starting with stress management techniques and building a holistic wellness routine. To provide you with the most personalized support:\n\n1. Let's schedule a video consultation with one of our wellness experts:\n📅 Tomorrow at 2:00 PM\n📅 Wednesday at 11:00 AM\n📅 Friday at 3:30 PM\n\n2. I can also set up smart scheduling for:\n⏰ Daily meditation reminders\n🧘‍♀️ Stress-relief exercise prompts\n😌 Mindfulness practice notifications\n\nWould you like to book a consultation and set up these wellness reminders?",
    service: "wellness"
  }
];

const nutritionChat = [
  {
    type: "user",
    content: "Hello, I need help with developing better eating habits and meal planning. Can you assist me?",
    service: "nutrition"
  },
  {
    type: "ai",
    content: "Thank you for sharing. Let me analyze your concerns:\n\n1. You want to improve your eating habits\n2. Meal planning is a challenge\n3. Portion control is an area for improvement\n\nBased on this assessment, you would benefit from structured guidance and practical meal planning strategies. Here's what I recommend:\n\n1. Schedule a video consultation with our certified nutritionist:\n📅 Today at 4:00 PM\n📅 Thursday at 1:30 PM\n📅 Saturday at 10:00 AM\n\n2. Let's set up smart scheduling for:\n📱 Weekly meal prep reminders\n⏰ Regular eating schedule alerts\n📝 Guided portion control check-ins\n🛒 Grocery shopping reminders\n\nWould you like to book a consultation and activate these nutrition support tools?",
    service: "nutrition"
  }
];

const spiritualChat = [
  {
    type: "user",
    content: "I'm looking to deepen my spiritual practice and establish a more consistent daily routine. Can you help?",
    service: "spiritual"
  },
  {
    type: "ai",
    content: "I hear your desire for spiritual growth. Let me assess your situation:\n\n1. You're seeking a deeper spiritual connection\n2. Consistency is your main challenge\n3. You're looking for daily practice structure\n\nBased on this, I recommend a combination of guided support and structured practice. Here's my suggestion:\n\n1. Let's schedule a video session with one of our spiritual mentors:\n📅 Tomorrow at 9:00 AM\n📅 Thursday at 5:00 PM\n📅 Sunday at 2:00 PM\n\n2. I can help establish a consistent practice with:\n⏰ Daily devotional reminders\n🙏 Customized prayer time notifications\n📖 Scripture reading schedules\n✨ Reflection journal prompts\n\nWould you like to connect with a mentor and set up these spiritual practice reminders?",
    service: "spiritual"
  }
];

const fitnessChat = [
  {
    type: "user",
    content: "Hi, I want to start a fitness routine focusing on strength and flexibility. Where should I begin?",
    service: "fitness"
  },
  {
    type: "ai",
    content: "Let me analyze your fitness goals:\n\n1. You want to build strength\n2. Improving flexibility is important to you\n3. You need guidance on getting started\n\nBased on this assessment, I recommend a structured approach combining expert guidance with consistent practice. Here's my plan:\n\n1. Let's schedule a video session with a certified fitness trainer:\n📅 Today at 6:00 PM\n📅 Wednesday at 7:30 AM\n📅 Friday at 4:00 PM\n\n2. I'll set up smart scheduling for:\n💪 Progressive strength training reminders\n🧘‍♀️ Daily flexibility sessions\n📊 Progress tracking check-ins\n🎯 Goal milestone celebrations\n\nWould you like to book a trainer consultation and set up these fitness reminders?",
    service: "fitness"
  }
];

const EnhancedChatPreview = () => {
  const renderMessage = (message: any, index: number) => {
    const isAI = message.type === "ai";
    const messageContent = message.content.split('\n').map((line: string, i: number) => {
      if (line.startsWith('1.') || line.startsWith('2.')) {
        return (
          <h3 key={i} className="text-gradient-aurora font-semibold text-lg mb-2 mt-4">
            {line}
          </h3>
        );
      }
      if (line.includes('assessment') || line.includes('analyze') || line.includes('assess')) {
        return (
          <div key={i} className="text-gradient-candy font-medium mb-4">
            {line}
          </div>
        );
      }
      if (line.startsWith('📅')) {
        return (
          <div key={i} className="text-gradient-sunshine hover:scale-105 transition-transform cursor-pointer mb-2">
            {line}
          </div>
        );
      }
      if (line.startsWith('⏰') || line.startsWith('📱') || line.startsWith('🧘‍♀️') || 
          line.startsWith('😌') || line.startsWith('📝') || line.startsWith('🛒') || 
          line.startsWith('🙏') || line.startsWith('📖') || line.startsWith('✨') || 
          line.startsWith('💪') || line.startsWith('📊') || line.startsWith('🎯')) {
        return (
          <div key={i} className="text-gradient-ocean hover:scale-105 transition-transform cursor-pointer mb-2">
            {line}
          </div>
        );
      }
      return <div key={i} className="mb-2">{line}</div>;
    });

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`p-4 rounded-lg mb-4 ${
          isAI 
            ? 'glass ml-4' 
            : 'bg-gradient-to-r from-tertiary/10 to-accent/10 mr-4'
        }`}
      >
        <div className={`text-sm mb-2 ${
          isAI ? 'text-gradient-cosmic' : 'text-gradient-mystic'
        }`}>
          {isAI ? 'AI Assistant' : 'You'}
        </div>
        <div className={isAI ? 'text-white/90' : 'text-white/80'}>
          {messageContent}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass rounded-xl p-6">
        <h3 className="text-gradient-aurora text-xl font-semibold mb-4">Wellness Chat</h3>
        {wellnessChat.map((message, index) => renderMessage(message, index))}
      </div>
      <div className="glass rounded-xl p-6">
        <h3 className="text-gradient-candy text-xl font-semibold mb-4">Nutrition Chat</h3>
        {nutritionChat.map((message, index) => renderMessage(message, index))}
      </div>
      <div className="glass rounded-xl p-6">
        <h3 className="text-gradient-cosmic text-xl font-semibold mb-4">Spiritual Chat</h3>
        {spiritualChat.map((message, index) => renderMessage(message, index))}
      </div>
      <div className="glass rounded-xl p-6">
        <h3 className="text-gradient-ocean text-xl font-semibold mb-4">Fitness Chat</h3>
        {fitnessChat.map((message, index) => renderMessage(message, index))}
      </div>
    </div>
  );
};

export default EnhancedChatPreview;