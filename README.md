## Prueba Técnica – Ingeniero de Desarrollo Front-End

Este proyecto corresponde a una **prueba técnica desarrollada en Angular**, cuyo objetivo es demostrar conocimientos en arquitectura, manejo de estado, componentes standalone y buenas prácticas.

---

## Demo en producción

La aplicación se encuentra desplegada en AWS S3:

🔗 http://technical-test-cristhian-morales.s3-website.us-east-2.amazonaws.com/

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

## TechnicalTestFunds

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
