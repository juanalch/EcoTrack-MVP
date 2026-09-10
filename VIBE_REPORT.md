# Vibe Report — EcoTrack

## Configuración del agente
Para configurar mi agente, definí un archivo `.cursorrules` que actúa como una "constitución"
del proyecto: le indiqué al modelo qué stack usar (HTML/CSS/JS vanilla para despliegue
inmediato en Replit), qué prioridades técnicas tener (modularidad, manejo de errores, código
limpio) y cuál era el objetivo funcional final: EcoTrack, una app de registro de huella de
carbono por lenguaje natural. Esto redujo drásticamente la ambigüedad en cada prompt
posterior, porque el agente ya "sabía" el contexto del proyecto sin que yo tuviera que
repetirlo en cada instrucción.

## Dificultades al delegar código a la IA
La principal dificultad no fue técnica, sino de comunicación: al inicio pedía funcionalidades
de forma muy general y la IA interpretaba cosas distintas a las que yo imaginaba. Aprendí que
el Vibe Coding no elimina la necesidad de precisión, la traslada: en vez de escribir sintaxis,
hay que escribir intención clara. También tuve que aprender a no intervenir manualmente ante
cada error, sino confiar el diagnóstico al agente, lo cual al principio generó cierta
resistencia porque mi instinto era "arreglarlo yo mismo más rápido". Con la iteración, entendí
que describir bien el error (contexto, mensaje completo, comportamiento esperado) era más
eficiente que corregirlo línea por línea.

## De "escribir código" a "orquestar una visión"
Este cambio de mentalidad fue el aprendizaje más importante del proyecto. Pasar de ser quien
teclea cada función a ser quien define arquitectura, reglas y criterios de calidad se siente
como pasar de operario a director de orquesta. Mi valor ya no está en recordar sintaxis, sino
en tener claridad sobre qué debe hacer el producto, cómo debe sentirse el usuario al usarlo, y
qué estándares de calidad no son negociables. Esto exige una disciplina distinta: hay que ser
explícito, anticipar ambigüedades y validar constantemente que la IA no se haya desviado del
objetivo original. Al mismo tiempo, libera tiempo cognitivo para pensar en el producto como un
todo —experiencia de usuario, propósito, escalabilidad— en lugar de quedar atrapado en
detalles de implementación. EcoTrack, como MVP, no habría sido posible construirlo tan rápido
escribiendo cada línea manualmente; la orquestación de agentes permitió validar la idea de
negocio en horas, no días. Concluyo que el Vibe Coding no reemplaza el criterio técnico, lo
eleva a un nivel más estratégico: el desarrollador se convierte en curador y validador de
soluciones generadas, no en su único autor.
