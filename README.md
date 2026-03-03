# Portfolio Personal

Mi portafolio web personal desarrollado con las últimas tecnologías del ecosistema React. Un sitio moderno, rápido y accesible que presenta mi trabajo, habilidades y experiencia de manera profesional.

## Sobre el Proyecto

Este portfolio fue creado para mostrar mis proyectos y habilidades como desarrollador web. Cuenta con un diseño limpio y moderno, con soporte para múltiples idiomas y temas personalizables. La arquitectura está pensada para ser escalable y fácil de mantener.

## Tecnologías Utilizadas

El proyecto está construido con un stack moderno de JavaScript/TypeScript:

- **Next.js 16** - Framework de React con App Router para renderizado híbrido
- **TypeScript** - Tipado estático para mayor robustez del código
- **Tailwind CSS** - Framework de utilidades CSS para diseño rápido y consistente
- **Framer Motion** - Librería para animaciones fluidas y declarativas
- **Radix UI** - Componentes accesibles y sin estilos predefinidos
- **Lucide React** - Iconos consistentes y optimizados
- **next-themes** - Sistema de temas con soporte para modo oscuro

## Características Principales

El portfolio incluye varias funcionalidades pensadas para mejorar la experiencia de usuario:

- **Diseño Responsive**: Adaptado para funcionar perfectamente en móviles, tablets y escritorio
- **Sistema de Temas**: Alternancia entre modo claro y oscuro con persistencia en el navegador
- **Multiidioma**: Contenido disponible en español e inglés con cambio dinámico
- **Animaciones Suaves**: Transiciones y efectos visuales que mejoran la interactividad
- **Optimización de Imágenes**: Carga lazy y optimización automática con Next.js Image
- **SEO Optimizado**: Metadatos configurados para mejor posicionamiento en buscadores
- **Rendimiento**: Código optimizado con tree-shaking y división de código automática

## Estructura del Código

El proyecto sigue una arquitectura modular y organizada:

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx
│   │   └── contact.tsx
│   └── ui/
│       ├── section-header.tsx
│       └── scroll-to-top.tsx
├── lib/
│   ├── translations.ts
│   ├── language-context.tsx
│   └── utils.ts
└── public/
```

Los componentes están separados en carpetas lógicas: `layout` para estructura general, `sections` para las diferentes secciones del portfolio, y `ui` para componentes reutilizables.

## Desarrollo Local

Para ejecutar el proyecto en tu máquina local:

```bash
# Clonar el repositorio
git clone https://github.com/crissXcoder/Portafolio-Cristhian.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev      # Modo desarrollo con hot reload
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código con ESLint
```

## Configuración

El archivo `next.config.js` incluye configuraciones para:

- Optimización de imágenes desde dominios externos (GitHub, Unsplash)
- Configuración de build y output
- Opciones de rendimiento

Para modificar las traducciones, edita `lib/translations.ts`. Cada sección tiene su correspondiente objeto de traducciones en español e inglés.

## Licencia

MIT License - Este proyecto es de código abierto y libre para usar.

---

Desarrollado por [Cristhian](https://github.com/crissXcoder)
