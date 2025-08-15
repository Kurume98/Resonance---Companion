// vowelEmotionMapper.js
// Maps Igbo vowels to emotional / resonance states

/**
 * Map dominant vowel to its resonance meaning
 * @param {string} vowel - Igbo vowel
 * @returns {Object} containing meaning and suggested response tone
 */
function mapVowelToEmotion(vowel) {
    const map = {
        'a': { meaning: "Openness, expansion, courage", tone: "warm" },
        'e': { meaning: "Clarity, sharp focus, decisiveness", tone: "bright" },
        'ẹ': { meaning: "Depth, patience, grounding", tone: "calm" },
        'i': { meaning: "Forward motion, exploration", tone: "energized" },
        'ị': { meaning: "Introspection, reflection", tone: "soft" },
        'o': { meaning: "Connection, unity", tone: "balanced" },
        'ọ': { meaning: "Authority, foundation, presence", tone: "steady" },
        'u': { meaning: "Continuity, flow, nurturing", tone: "gentle" }
    };

    return map[vowel] || { meaning: "Unknown", tone: "neutral" };
}

module.exports = mapVowelToEmotion;