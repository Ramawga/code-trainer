import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export async function generateChallenge(language: string, difficulty: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

  const prompt = `
Generate a programming challenge.

Language: ${language}
Difficulty: ${difficulty}

Return the result in JSON with this structure:

{
  "title": "string",
  "description": "string",
  "hint": "string",
  "starterCode": "string"
}

Rules:
- The starterCode must contain a function signature for the language
- Do not include explanations outside JSON
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
console.log("Resposta bruta da IA:");
console.log(text);
  return JSON.parse(text);
}