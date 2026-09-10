# 🌱 EcoTrack MVP

Prototipo funcional de EcoTrack: una app web que permite a los usuarios registrar su huella
de carbono diaria escribiendo en lenguaje natural, por ejemplo:

> "Hoy comí carne y viajé 20km en bus"

La aplicación interpreta el texto, detecta actividades clave (transporte, alimentación, energía)
y calcula un estimado de emisiones de CO2 en kilogramos.

## 🚀 Cómo ejecutar el proyecto

### Opción 1: Replit
1. Sube esta carpeta a un nuevo Repl (tipo "HTML, CSS, JS").
2. Haz clic en **Run**.
3. Usa el botón **Deploy** de Replit para obtener una URL pública.

### Opción 2: Local
Simplemente abre `index.html` en tu navegador, o usa un servidor local:
```bash
npx http-server .
```

## 📂 Estructura del proyecto
```
ecotrack-mvp/
├── .cursorrules        # Reglas del agente de IA en Cursor
├── README.md           # Este archivo
├── VIBE_REPORT.md       # Reflexión del proceso (entregable de Fase 3)
├── index.html           # Interfaz principal
├── style.css             # Estilos
└── script.js             # Lógica de cálculo de CO2
```

## 🧠 Sobre el desarrollo
Este proyecto fue construido siguiendo la metodología de **Vibe Coding**: se usó Cursor con
un archivo `.cursorrules` personalizado como "copiloto" de desarrollo, delegando la resolución
de errores y la generación de código a la IA, y priorizando la orquestación de alto nivel
sobre la escritura manual de cada línea. Ver `VIBE_REPORT.md` para la reflexión completa.
