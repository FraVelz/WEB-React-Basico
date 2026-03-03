# Proyecto de practica React (Hooks)

[English version](./README.EN.md)

![Captura de pantalla 1](./images/screenshot1.png)

![Captura de pantalla 2](./images/screenshot2.png)

Proyecto creado para practicar React con TypeScript usando Vite.

El enfoque principal es reforzar:

- `useState` para manejo de estado local.
- `useEffect` para efectos secundarios y limpieza.
- Separacion de responsabilidades con `components`, `hooks` y `utils`.

## Modulos del proyecto

### 1) Contador

Ubicacion: `src/Contador/`

Objetivos de practica:

- Actualizar estado numerico con acciones de incremento/decremento.
- Mostrar alertas temporales cuando se intenta bajar de 0.
- Extraer logica de negocio a hook (`useContador`) y utilidades (`counterHelpers`).

### 2) TicTacToe (3 en raya)

Ubicacion: `src/TicTacToe/`

Objetivos de practica:

- Renderizado dinamico del tablero.
- Manejo de turno (`X`/`O`) y deteccion de ganador.
- Control de estado del juego (reinicio, modal de ganador, etc).

## Estructura general

```txt
src/
  components/
    Container.tsx
  Contador/
    components/
    hooks/
    utils/
    page.tsx
  TicTacToe/
    components/
    hooks/
    utils/
    page.tsx
  App.tsx
  main.tsx
```

## Scripts

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: compila TypeScript y genera build de produccion.
- `npm run lint`: revisa buenas practicas con ESLint.
- `npm run preview`: levanta la build para previsualizacion local.

## Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

## Stack

- React
- TypeScript
- Vite
- ESLint
- Tailwind CSS

## Notas de aprendizaje

Este repo no busca ser una app final de produccion, sino un espacio de practica guiada para consolidar hooks y mejorar calidad de codigo paso a paso (nombres consistentes, logica clara y lint limpio).

## Informacion extra

**Autor:** [Fravelz](https://github.com/fravelz)
