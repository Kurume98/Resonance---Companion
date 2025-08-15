// vowelRootAnalyzer.js
// Igbo Vowel Root Resonance Analyzer

const IGBO_VOWELS = ['a', 'e', 'ẹ', 'i', 'ị', 'o', 'ọ', 'u'];

/**
 * Analyze the vowel pattern in the given text
 * @param {string} input - User input text
 * @returns {Object} containing vowel counts, dominant vowel, and frequency score
 */
function analyzeVowelRoots(input) {
    if (!input || typeof input !== 'string') return null;

    let vowelCount = {};
    IGBO_VOWELS.forEach(vowel => {
        vowelCount[vowel] = 0;
    });

    // Normalize text: lowercase, strip punctuation
    const normalized = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Count each vowel occurrence
    for (let char of normalized) {
        if (IGBO_VOWELS.includes(char)) {
            vowelCount[char]++;
        }
    }

    // Find dominant vowel
    let dominantVowel = null;
    let maxCount = 0;
    for (let vowel in vowelCount) {
        if (vowelCount[vowel] > maxCount) {
            dominantVowel = vowel;
            maxCount = vowelCount[vowel];
        }
    }

    // Create a "frequency resonance score"
    const totalVowels = Object.values(vowelCount).reduce((a, b) => a + b, 0);
    const resonanceScore = totalVowels > 0 ? (maxCount / totalVowels) : 0;

    return {
        vowelCount,
        dominantVowel,
        resonanceScore
    };
}

module.exports = analyzeVowelRoots;