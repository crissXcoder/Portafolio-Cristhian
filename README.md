# Portfolio Personal - Cristhian

Portfolio personal desarrollado con Next.js 16, TypeScript y Tailwind CSS. Sitio web bilingüe (Español/Inglés) con modo oscuro/claro.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático desde GitHub (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New Project"** o **"Import Project"**
4. Selecciona el repositorio `Portafolio-Cristhian`
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en **"Deploy"** sin cambiar ninguna configuración
7. Espera 1-2 minutos y tu sitio estará en línea

**Dominio:** Vercel te proporcionará un dominio automático tipo `tu-proyecto.vercel.app`

### Opción 2: Despliegue desde CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

## 💻 Desarrollo Local

### Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/crissXcoder/Portafolio-Cristhian.git

# Navegar al directorio
cd Portafolio-Cristhian

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila el proyecto para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **UI Components:** Radix UI
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Temas:** next-themes (modo oscuro/claro)

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                      # App Router de Next.js
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── theme-provider.tsx
│   ├── sections/            # Secciones del portfolio
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── education.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   └── ui/                  # Componentes UI reutilizables
│       ├── scroll-to-top.tsx
│       └── section-header.tsx
├── lib/
│   ├── language-context.tsx # Contexto de idioma
│   ├── translations.ts      # Traducciones ES/EN
│   └── utils.ts             # Utilidades
├── public/                  # Archivos estáticos
├── next.config.js           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── vercel.json              # Configuración de Vercel
```

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Modo oscuro/claro
- ✅ Bilingüe (Español/Inglés)
- ✅ Animaciones suaves con Framer Motion
- ✅ SEO optimizado
- ✅ Rendimiento optimizado con Next.js 16
- ✅ TypeScript para mayor seguridad de tipos
- ✅ Componentes reutilizables

## 🌐 Variables de Entorno

Este proyecto no requiere variables de entorno para funcionar. Si necesitas agregar APIs o servicios externos en el futuro, crea un archivo `.env.local`:

```env
# Ejemplo
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📝 Personalización

Para personalizar el contenido del portfolio, edita los archivos en:

- **Traducciones:** `lib/translations.ts`
- **Secciones:** `components/sections/`
- **Estilos:** `app/globals.css` y `tailwind.config.ts`
- **Configuración:** `next.config.js`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Cristhian**

- GitHub: [@crissXcoder](https://github.com/crissXcoder)
- Proyecto: [Portafolio-Cristhian](https://github.com/crissXcoder/Portafolio-Cristhian)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!
