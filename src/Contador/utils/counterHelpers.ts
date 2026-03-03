// src/utils/counterHelpers.ts

interface CounterMessage {
  text: string;
  bg: string;
}

/**
 * Función que determina qué mensaje mostrar según el valor del contador.
 * Es una función pura: a misma entrada, misma salida. No depende de React.
 */
export const getCounterMessage = (count: number): CounterMessage => {
  const defaultBg = "bg-[var(--color-primary)]";

  if (count === 0) {
    return { text: "contador en cero :)", bg: defaultBg };
  }
  
  if (count < 5) {
    return { text: "contador bajo", bg: defaultBg };
  }
  
  if (count < 10) {
    return { text: "contador medio", bg: defaultBg };
  }
  
  return { text: "contador alto", bg: defaultBg };
};