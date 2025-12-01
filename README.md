# 🧩 ParkQuiz: La Plataforma Interactiva del Parque Jaime Duque

## 🚀 Visión General del Proyecto

**ParkQuiz** es una aplicación web progresiva (PWA) diseñada para enriquecer la experiencia de los visitantes del Parque Jaime Duque y el Bioparque Wakatá. El objetivo principal es ofrecer entretenimiento interactivo y valor educativo a través de minijuegos y trivias accesibles instantáneamente mediante códigos QR ubicados en las zonas de descanso y restaurantes del parque.

El proyecto está construido bajo una arquitectura moderna y de alto rendimiento, optimizada para **velocidad**, **responsividad** y **facilidad de mantenimiento** en entornos *serverless*.

---

## 💻 Stack Tecnológico

Este proyecto ha sido desarrollado utilizando herramientas de vanguardia en el ecosistema de JavaScript y React.

### Tecnologías Clave

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-343434?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-000000?style=for-the-badge&logo=shadcn%2Fui&logoColor=white)](https://ui.shadcn.com/)
[![Better Auth (NextAuth)](https://img.shields.io/badge/Better%20Auth-063970?style=for-the-badge&logo=nextauth&logoColor=white)](https://authjs.dev/)

### ✨ Características Principales

* **Acceso Instantáneo por QR:** Experiencia *server-side rendered* (SSR) y estática (SSG) para una carga ultrarrápida desde cualquier dispositivo móvil.
* **Juego Anónimo & Progreso Persistente:** Permite a los usuarios jugar inmediatamente sin registro. El registro es opcional a través de Google para guardar puntajes en la nube y acceder a rankings.
* **Minijuegos Modulares:** Estructura de base de datos diseñada para la expansión constante del catálogo de juegos.
* **Ranking y Gamificación:** Gestión de puntajes altos y *leaderboards* para fomentar la competencia familiar sana.

---

## ⚙️ Arquitectura de Datos y ORM

La base de datos está modelada para la modularidad y el crecimiento. Se eligió **Drizzle ORM** por su bajo *footprint* y tipado estricto, ideal para la rapidez de las funciones *serverless* y el rendimiento en Vercel.

### Esquema Central
La lógica se centra en desacoplar el contenido del progreso:
* **`users`:** Gestiona a usuarios registrados y jugadores anónimos.
* **`games`:** Catálogo maestro para definir tipos de minijuegos.
* **`triviaQuestions` / `rouletteItems`:** Tablas de contenido que permiten agregar datos educativos sin tocar el código (*CMS Ligero*).
* **`leaderboards`:** Tabla optimizada para *queries* de ranking globales.

---

## 🛠️ Instalación y Desarrollo Local

Para levantar el proyecto en tu entorno local, sigue los siguientes pasos, utilizando los scripts ya configurados:

1.  **Clonar el repositorio:**
```bash
git clone https://github.com/BradMoyetones/parkquiz.git
cd parkquiz
```

2.  **Instalar dependencias:**
```bash
npm install
```

3.  **Configurar Variables de Entorno:**
Crea un archivo `.env.local` y configura las credenciales de Google OAuth y los *secrets* necesarios para Better Auth y la conexión a la DB.

4.  **Configuración de Autenticación y Base de Datos (Drizzle):**

Ejecuta los siguientes comandos para configurar el *schema* de autenticación y la base de datos:

```bash
# 1. Inicializa el schema de Better Auth
npm run auth:generate

# 2. Genera y aplica las migraciones de Drizzle
npm run db:push
```
*(Opcional: Seed de Contenido:* Carga el contenido inicial de trivias y ruletas si tienes un script de `seed`.)

5.  **Ejecutar la aplicación:**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Themes and components

- https://21st.dev/

- https://tweakcn.com/editor/theme

- https://animate-ui.com/

- https://ui.shadcn.com/

- https://tailark.com

- https://ui.aceternity.com/

- https://www.originui-ng.com/

- https://www.heroui.com/

---

<p align="center">
  Hecho con 💛💙❤️ y JavaScript por Brad
</p>