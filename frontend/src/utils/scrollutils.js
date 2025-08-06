// 📜 scrollUtils.js — Semantic Utility Scrolls

// 🔁 Repeat Check: Has the user echoed a phrase?
export const hasRepetition = (input, previousInputs) => {
  if (!input || !previousInputs || previousInputs.length === 0) return false;

  const normalizedInput = input.trim().toLowerCase();
  return previousInputs.some(
    (prev) => prev.trim().toLowerCase() === normalizedInput
  );
};

// 🔍 Detect Scroll Phase Keyword
export const detectPhase = (text) => {
  const phaseKeywords = {
    planting: ['begin', 'start', 'seed', 'initiate'],
    watering: ['learn', 'grow', 'feed', 'flow'],
    pruning: ['remove', 'cut', 'refine', 'cleanse'],
    harvest: ['output', 'share', 'manifest', 'release'],
  };

  const lowered = text.toLowerCase();

  for (const [phase, keywords] of Object.entries(phaseKeywords)) {
    if (keywords.some((word) => lowered.includes(word))) {
      return phase;
    }
  }

  return 'unknown';
};