import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import franc from "franc-min";

// 🔹 Detect language from text
export function detectLanguage(text) {
  const langCode = franc(text);
  return langCode === "und" ? null : langCode;
}

// 🔹 Speech-to-text with ElevenLabs
export async function speechToText(audioFilePath) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const audioBuffer = fs.readFileSync(audioFilePath);

  const response = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "audio/mpeg"
    },
    body: audioBuffer
  });

  if (!response.ok) {
    throw new Error(`STT failed: ${response.statusText}`);
  }

  const result = await response.json();
  return result.text; // Transcribed text
}

// 🔹 Text-to-speech with ElevenLabs
export async function textToSpeech(text, voiceId = "Rachel") {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        voice_settings: { stability: 0.75, similarity_boost: 0.75 }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`TTS failed: ${response.statusText}`);
  }

  const audioBuffer = await response.arrayBuffer();
  const filePath = path.join("output", `tts_${Date.now()}.mp3`);
  fs.writeFileSync(filePath, Buffer.from(audioBuffer));
  return filePath;
}