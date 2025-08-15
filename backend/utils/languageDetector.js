// languageDetector.js
// Detects the language of a given text input without translation
// Uses 'franc-min' for lightweight language detection

const franc = require('franc-min');

/**
 * Detect language from user text
 * @param {string} text - Input from user (transcribed if voice)
 * @returns {string} ISO 639-3 language code
 */
function detectLanguage(text) {
    if (!text || typeof text !== 'string') {
        return 'und'; // undefined
    }

    const langCode = franc(text);

    return langCode; // example: 'ibo' for Igbo, 'eng' for English
}

module.exports = detectLanguage;