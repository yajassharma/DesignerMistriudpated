import type { Handler } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

const handler: Handler = async (event) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server misconfigured: GEMINI_API_KEY missing." })
      };
    }

    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing request body" }) };
    }

    const { input } = JSON.parse(event.body);
    if (!input || typeof input !== "string") {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid 'input' provided" }) };
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const model = "gemini-2.5-flash";

    const response = await ai.models.generateContent({
      model,
      contents: { parts: [{ text: input }] },
      config: {
        systemInstruction: "You are CAAT — follow construction packages and DPR rules as described in the app."
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.text ?? "No response." })
    };
  } catch (err) {
    console.error("chat function error", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "CAAT backend error." })
    };
  }
};

export { handler };
