# Portfolio - Marco Caamal

Portafolio personal desarrollado con React, TypeScript y Tailwind CSS. Diseño moderno y minimalista que muestra mi experiencia como Full Stack Developer, proyectos destacados y stack tecnológico.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)

## Características

- **Diseño Moderno**: Interfaz elegante con efectos glassmorphism y gradientes
- **Totalmente Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- **Alto Rendimiento**: Construido con Vite para carga ultrarrápida
- **Animaciones Suaves**: Transiciones y efectos hover profesionales
- **Arquitectura Modular**: Componentes reutilizables y código limpio
- **Formulario de Contacto**: Integración funcional para recibir mensajes
- **Tema Oscuro**: Paleta de colores profesional slate/sky

## Secciones

1. **Hero** - Presentación principal con snippet de código animado
2. **Experiencia** - Timeline de mi trayectoria laboral
3. **Proyectos** - Casos de estudio con capturas y descripciones técnicas
4. **Stack Tecnológico** - Tecnologías y herramientas que domino
5. **Sobre Mí** - Biografía y formación académica
6. **Contacto** - Formulario y enlaces a redes sociales

## Stack Tecnológico

### Frontend
- **React 19.2** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.1** - Estilos utility-first
- **Lucide React** - Iconos modernos

### Tooling
- **Vite** - Build tool y dev server
- **ESLint** - Linting y buenas prácticas
- **SWC** - Compilador ultra-rápido

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MarcoCaamal/Portfolio.git

# Entrar al directorio
cd Portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎯 Scripts Disponibles

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción
npm run build

# Vista previa de la build
npm run preview

# Linting
npm run lint
```

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── icons/
│   │   ├── GithubIcon.tsx
│   │   └── LinkedinIcon.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Paleta de Colores

- **Background**: `slate-900` (#0f172a)
- **Cards**: `slate-800` (#1e293b)
- **Primary**: `sky-500` (#0ea5e9)
- **Secondary**: `indigo-500` (#6366f1)
- **Accent**: `emerald-500` (#10b981)
- **Text**: `slate-100` / `slate-400`

## Despliegue

El proyecto está optimizado para ser desplegado en:

- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

## Personalización

Para adaptar este portafolio a tus necesidades:

1. **Información Personal**: Edita `src/components/Hero.tsx` y `src/components/About.tsx`
2. **Experiencia Laboral**: Modifica `src/components/Experience.tsx`
3. **Proyectos**: Actualiza `src/components/Projects.tsx` con tus proyectos
4. **Stack**: Ajusta las tecnologías en `src/components/TechStack.tsx`
5. **Contacto**: Cambia los enlaces en `src/components/Footer.tsx`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portafolio.

## Autor

**Marco Antonio Caamal Chi**

- LinkedIn: [Marco Antonio Caamal Chi](https://www.linkedin.com/in/marco-antonio-caamal-chi-965941283/)
- GitHub: [@MarcoCaamal](https://github.com/MarcoCaamal)
- Email: caamalmarco99@gmail.com

---

Si te ha gustado este proyecto, no olvides darle una estrella en GitHub!

**Desarrollado con ❤️ por Marco Caamal**