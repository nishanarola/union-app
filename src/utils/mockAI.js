const RESPONSES = {
  interview: [
    "Great! Let's start with a classic one: Tell me about yourself.",
    "Here's a common question: Why do you want this role?",
    "Let's try a behavioral question: Describe a time you handled a conflict at work."
  ],
  exam: [
    "Sure, let's break that topic down. What specific concept are you stuck on?",
    "Good question! Let's review the key points step by step.",
    "Try explaining it back to me in your own words — that usually helps it stick."
  ],
  resume: [
    "Let's strengthen that. Can you share the bullet point you're working on?",
    "A good tip: start each bullet with an action verb and include a measurable result.",
    "That's a solid start — want me to suggest a stronger phrasing?"
  ],
  default: [
    "Got it! Tell me more so I can help better.",
    "Interesting — could you elaborate a bit?",
    "I'm here to help with interviews, exams, or your resume. What would you like to focus on?"
  ]
};

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAIResponse(userText) {
  const lower = userText.toLowerCase();

  await delay(1000 + Math.random() * 800);

  if (lower.includes('interview')) return pickRandom(RESPONSES.interview);
  if (lower.includes('exam') || lower.includes('study')) return pickRandom(RESPONSES.exam);
  if (lower.includes('resume') || lower.includes('cv')) return pickRandom(RESPONSES.resume);

  return pickRandom(RESPONSES.default);
}