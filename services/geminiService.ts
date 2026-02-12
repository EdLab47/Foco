import { GoogleGenAI } from "@google/genai";

// Función segura para obtener la API Key sin causar crash si process no está definido (navegador)
const getApiKey = (): string | undefined => {
  try {
    return process.env.API_KEY;
  } catch (e) {
    return undefined;
  }
};

const apiKey = getApiKey();
// Inicializamos el cliente solo si existe la key, para evitar errores prematuros
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

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
    if (!apiKey || !ai) {
      return "⚠️ Error de Configuración: No se detectó la API Key.\n\nSi subiste tu proyecto a GitHub, el 'Profe IA' no funcionará automáticamente porque GitHub no tiene acceso a tu archivo .env local.\n\nSolución:\n1. Ve a Settings > Secrets and variables > Actions en tu repositorio.\n2. Agrega un 'Repository secret' llamado API_KEY.\n3. Asegúrate de que tu proceso de construcción (build) use esta variable.";
    }

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
    return "Hubo un error al conectar con el asistente. Por favor verifica tu conexión o la configuración de la API Key.";
  }
};