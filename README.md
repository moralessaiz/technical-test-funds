## Prueba Técnica – Ingeniero de Desarrollo Front-End

Este proyecto corresponde a una **prueba técnica desarrollada en Angular**, cuyo objetivo es demostrar conocimientos en arquitectura, manejo de estado, componentes standalone y buenas prácticas.

---

## 🧩 Tecnologías utilizadas

- Angular 17+
- TypeScript
- RxJS
- SCSS
- Angular Standalone Components

---

## 📌 Funcionalidades

- Visualización de fondos disponibles
- Suscripción a fondos con validaciones de saldo
- Historial de transacciones
- Manejo de estado reactivo con `BehaviorSubject`
- Uso de pipes personalizados
- Navegación mediante Angular Router

---

## Arquitectura

La aplicación utiliza Standalone Components (Angular 17), eliminando la necesidad de NgModules y alineándose con las mejores prácticas actuales del framework.

## Configuración de datos

La aplicación consume datos simulados desde un archivo JSON ubicado en `assets/data/app-config.json`, el cual contiene:
- Saldo inicial del usuario
- Fondos disponibles

Esto permite modificar reglas de negocio sin alterar el código fuente.

## Estado de la aplicación
- Las transacciones se gestionan en memoria mediante servicios y observables.
- No se persiste información ya que no forma parte del alcance del ejercicio.

## Pipes reutilizables

Se implementan pipes compartidos para la transformación de valores de dominio a textos de presentación,
manteniendo los componentes libres de lógica innecesaria.

## Estilos globales

Se utilizaron estilos globales para que la aplicación sea más facil de mantener y agregar funcionalidades.

---

