require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const franc = require('franc-min');

const app = express();
app.use(cors());
app.use(express.json());

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

// Detect language from text
app.post('/detect-language', (req, res) => {
    const { text } = req.body;
    const langCode = franc(text);
    res.json({ language: langCode });
});

// Convert text to speech using ElevenLabs
app.post('/speak', async (req, res) => {
    const { text, voiceId } = req.body;
    try {
        const response = await axios.post(
            `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
            {
                text,
                voice_settings: { stability: 0.5, similarity_boost: 0.5 }
            },
            {
                headers: {
                    'xi-api-key': ELEVENLABS_API_KEY,
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer'
            }
        );
        res.set('Content-Type', 'audio/mpeg');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating speech');
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});