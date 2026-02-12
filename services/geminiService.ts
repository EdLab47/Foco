import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres el Profesor de Tecnología de la Secundaria Técnica No. 47. 
Tu objetivo es ayudar a los alumnos con su proyecto de "Simulador Eléctrico" en PowerPoint.
Sé amable, paciente y explica las cosas de manera sencilla para un estudiante de secundaria.
Si preguntan sobre electrónica (voltaje, corriente, circuitos), explica conceptos básicos.
Si preguntan sobre PowerPoint, guíalos con los menús exactos.
Tus respuestas deben ser breves y motivadoras.
`;

export const sendMessageToTutor = async (userMessage: string): Promise<string> => {
  try {
    if (!apiKey) return "Error: API Key no configurada.";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Lo siento, no pude procesar tu pregunta en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un error al conectar con el asistente.";
  }
};