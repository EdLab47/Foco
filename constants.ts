import { InstructionStep, ChecklistItem } from './types';

export const INSTRUCTIONS: InstructionStep[] = [
  {
    id: 1,
    title: "PASO 1: Inicio y Guardado",
    content: [
      "Abrir: Busca el icono naranja con la 'P' (PowerPoint) y elige 'Presentación en blanco'.",
      "Nombre del archivo: Ve a ARCHIVO > Guardar como > Examinar.",
      "Escribe: 2F_Apellido_Nombre_Electronica."
    ]
  },
  {
    id: 2,
    title: "PASO 2: Portada e Identificación (Hoja 1)",
    content: [
      "Ve a INSERTAR > Cuadro de texto.",
      "Dibuja un rectángulo y escribe tus datos.",
      "¡IMPORTANTE!: Revisa que los nombres propios y el nombre de la escuela empiecen con Mayúscula y lleven Acentos."
    ]
  },
  {
    id: 3,
    title: "PASO 3: Construcción del Circuito (Hoja 2 y 3)",
    content: [
      "Hoja 2 (Estado APAGADO): Fondo Negro, Foco Gris y Botón Rojo. Escribe: 'ENCENDER'.",
      "Hoja 3 (Estado ENCENDIDO): Haz clic derecho en la miniatura de la Hoja 2 y elige DUPLICAR.",
      "Cambia fondo a Amarillo, foco a Blanco y botón a Verde. Escribe: 'APAGAR'."
    ]
  },
  {
    id: 4,
    title: "PASO 4: Programación y Blindaje",
    content: [
      "Conectar: En la Hoja 2, toca el botón rojo. Ve a INSERTAR > ACCIÓN > Hipervínculo a: Diapositiva siguiente.",
      "Retornar: En la Hoja 3, toca el botón verde. Ve a INSERTAR > ACCIÓN > Hipervínculo a: Diapositiva anterior.",
      "BLOQUEAR CLICS FUERA: Ve a la pestaña TRANSICIONES.",
      "QUITA LA PALOMITA donde dice 'Al hacer clic con el mouse'.",
      "Haz clic en APLICAR A TODAS."
    ]
  },
  {
    id: 5,
    title: "PASO 5: Revisión de Ortografía",
    content: [
      "Ve a la pestaña REVISAR.",
      "Haz clic en el botón ORTOGRAFÍA (ABC).",
      "Corrige errores hasta ver 'Revisión ortográfica completada'."
    ]
  },
  {
    id: 6,
    title: "PASO 6: Verificación Final",
    content: [
      "Presiona F5 para probar.",
      "Clic en fondo negro/amarillo: NO debe pasar nada.",
      "Clic en botones: La luz debe prender y apagar.",
      "Presiona ESC para salir y guarda con el icono del Disquete."
    ]
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', text: '3 Diapositivas en total', checked: false },
  { id: 'c2', text: 'Cero faltas de ortografía (Mayúsculas y acentos)', checked: false },
  { id: 'c3', text: 'Blindaje: No cambia de hoja si haces clic fuera', checked: false },
  { id: 'c4', text: 'Identificación: Nombre de archivo correcto', checked: false },
];