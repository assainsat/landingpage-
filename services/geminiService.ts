
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing Gemini with the API key from environment variables as per guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // Fixing missing method error reported in AiAssistant.tsx
  async generateMarketingCopy(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a sophisticated, high-end marketing sentence for an artisanal coffee brand regarding this topic: ${topic}. Keep it under 20 words.`,
      });
      // Correct extraction using .text property
      return response.text || "Crafting excellence in every single origin pour.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The perfect roast for your daily ritual.";
    }
  }

  async curateContent(author: string, type: string, text: string): Promise<{ approved: boolean; feedback: string; curatedText?: string }> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Review the following submission for a high-end artisanal coffee shop community wall.
        Author: ${author}
        Type: ${type}
        Content: "${text}"

        Guidelines:
        1. Content must be positive, coffee-related, or community-focused.
        2. No profanity or offensive language.
        3. If it's a "story", make it sound slightly more poetic and warm.
        4. If it's an "idea", evaluate if it's creative.

        Return a JSON object with:
        - approved: boolean
        - feedback: short message for the user
        - curatedText: (optional) a polished version of the user's text to make it sound more artisanal.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              approved: { type: Type.BOOLEAN },
              feedback: { type: Type.STRING },
              curatedText: { type: Type.STRING }
            },
            required: ['approved', 'feedback']
          }
        }
      });
      
      // Correct extraction using .text property
      const textResponse = response.text;
      return JSON.parse(textResponse || '{}');
    } catch (error) {
      console.error("Gemini Error:", error);
      return { approved: true, feedback: "Your contribution is being processed by our roasters.", curatedText: text };
    }
  }
}

export const gemini = new GeminiService();
