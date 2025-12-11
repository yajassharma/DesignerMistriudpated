import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8787;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  try {
    const input: string = req.body?.input;
    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: "Invalid 'input' provided" });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY missing in local .env' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';

    const response = await ai.models.generateContent({
      model,
      contents: { parts: [{ text: input }] },
      config: {
        systemInstruction: 'You are CAAT — follow construction packages and DPR rules as described in the app.'
      }
    });

    return res.json({ text: response.text ?? 'No response.' });
  } catch (err) {
    console.error('Local chat error', err);
    return res.status(500).json({ error: 'CAAT local backend error.' });
  }
});

app.listen(port, () => {
  console.log(`CAAT local server running on http://localhost:${port}`);
});
