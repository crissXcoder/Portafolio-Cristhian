export type Language = "es" | "en"

export interface Translations {
  nav: {
    about: string
    education: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    description: string
    viewPortfolio: string
    viewGithub: string
    downloadCV: string
    availableForWork: string
  }
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    location: string
    university: string
    experience: string
    projects: string
    yearsExp: string
    completedProjects: string
    certifications: string
  }
  education: {
    title: string
    subtitle: string
    items: {
      title: string
      institution: string
      period: string
      description: string
      type: string
    }[]
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      name: string
      skills: string[]
    }[]
    concepts: string
    conceptsList: string[]
  }
  projects: {
    title: string
    subtitle: string
    viewProject: string
    viewCode: string
    technologies: string
    role: string
    items: {
      title: string
      description: string
      role: string
      tags: string[]
      demoUrl: string
      codeUrl: string
    }[]
  }
  contact: {
    title: string
    subtitle: string
    email: string
    location: string
    available: string
    sendMessage: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    emailLabel: string
    locationLabel: string
    availableLabel: string
  }
  footer: {
    madeWith: string
    rights: string
  }
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      about: "Sobre mí",
      education: "Formación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Cristhian Altamirano Montes",
      role: "Desarrollador Full Stack",
      description:
        "Estudiante de Ingeniería en Sistemas de Información apasionado por crear soluciones web modernas, escalables y bien diseñadas.",
      viewPortfolio: "Ver Portafolio",
      viewGithub: "Ver perfil en GitHub",
      downloadCV: "Descargar CV",
      availableForWork: "Disponible para trabajo",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Conoce mi historia",
      description1:
        "Soy un desarrollador Full Stack cursando el 4° año de Ingeniería en Sistemas de Información en la Universidad Nacional de Costa Rica. Me especializo en construir aplicaciones web modernas con tecnologías actuales.",
      description2:
        "Mi enfoque se centra en la calidad del código, la escalabilidad de las arquitecturas y una experiencia de usuario clara. Me gusta aprender de forma continua y aplicar buenas prácticas en cada proyecto.",
      location: "Costa Rica",
      university: "UNA, Costa Rica",
      experience: "Experiencia",
      projects: "Proyectos",
      yearsExp: "Años de exp.",
      completedProjects: "Proyectos completados",
      certifications: "Certificaciones",
    },
    education: {
      title: "Formación Académica",
      subtitle: "Mi trayectoria académica y profesional",
      items: [
        {
          title: "Bachillerato en Ingeniería en Sistemas de Información",
          institution: "Universidad Nacional de Costa Rica (UNA)",
          period: "2023 – Actualidad · 7° ciclo de 8 (4° año)",
          description:
            "Inicié la carrera en 2023. El programa tiene una duración de 4 años (8 ciclos) y está orientado al desarrollo de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos. Actualmente curso el 7° ciclo. Si mantengo el ritmo académico, la graduación como bachiller está proyectada para 2027.",
          type: "Universidad",
        },
        {
          title: "Diplomado en Programación de Aplicaciones Informáticas",
          institution: "Universidad Nacional de Costa Rica (UNA)",
          period: "2023 – 2025 · 5 ciclos · Graduado",
          description:
            "Programa de 2 años y medio (5 ciclos) enfocado en programación orientada a objetos, desarrollo web y bases de datos. Finalicé el bloque completo al concluir el primer semestre de 2025 y obtuve el título a finales de 2025.",
          type: "Diplomado",
        },
        {
          title: "Certificación en Inteligencia Artificial",
          institution: "Cisco Networking Academy",
          period: "2024",
          description:
            "Certificación orientada a fundamentos de inteligencia artificial, machine learning y redes neuronales, con enfoque en aplicaciones prácticas.",
          type: "Certificación",
        },
        {
          title: "Scrum Fundamentals Certified (SFC™)",
          institution: "SCRUMstudy",
          period: "Inicios de 2025",
          description:
            "Certificación en metodología ágil Scrum, enfocada en principios, roles y buenas prácticas para la gestión y desarrollo de proyectos de software.",
          type: "Certificación",
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Mis herramientas de trabajo",
      categories: [
        {
          name: "Frontend",
          skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
        },
        {
          name: "Backend",
          skills: ["NestJS", "Node.js", "REST APIs"],
        },
        {
          name: "Bases de Datos",
          skills: ["MySQL", "MariaDB"],
        },
      ],
      concepts: "Conceptos & Metodologías",
      conceptsList: [
        "Escalabilidad",
        "Responsividad",
        "Arquitectura Modular",
        "APIs REST",
        "Integración POS",
        "Clean Code",
        "Scrum / Agile",
        "Control de versiones",
      ],
    },
    projects: {
      title: "Portafolio de Proyectos",
      subtitle: "Lo que he construido",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      technologies: "Tecnologías",
      role: "Rol",
      items: [
        {
          title: "ADI Río Cañas",
          description:
            "Sistema web institucional desarrollado para la Asociación de Desarrollo Integral de Río Cañas. Incluye módulo de afiliación, sistema de reservas, gestión de noticias y eventos, y panel administrativo interno. La arquitectura fue diseñada con enfoque modular y escalable, separando claramente frontend y backend para garantizar mantenibilidad y crecimiento futuro.",
          role: "Desarrollador Full Stack",
          tags: ["Next.js", "NestJS", "MySQL", "TypeScript", "TailwindCSS"],
          demoUrl: "https://sigadi-rc.org/",
          codeUrl: "https://github.com/crissXcoder",
        },
        {
          title: "Ecommerce con Sistema POS",
          description:
            "Plataforma de comercio electrónico integrada con sistema de punto de venta (POS). Incluye gestión de productos con inventario en tiempo real, carrito de compras, procesamiento de ventas, panel administrativo con métricas y control de stock. Arquitectura preparada para crecer, con separación clara entre frontend y backend.",
          role: "Desarrollador Full Stack",
          tags: ["Next.js", "NestJS", "MySQL", "MariaDB", "TypeScript", "TailwindCSS"],
          demoUrl: "https://github.com/crissXcoder",
          codeUrl: "https://github.com/crissXcoder",
        },
        {
          title: "Dashboard de Tareas – TODO App",
          description:
            "Aplicación de gestión de tareas con interfaz moderna e intuitiva. CRUD completo con múltiples estados (pendiente, en progreso, completada), filtros por categoría y prioridad, persistencia de datos y diseño responsive. Desarrollada con TypeScript para mejorar robustez y mantenibilidad.",
          role: "Desarrollador Frontend",
          tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
          demoUrl: "https://github.com/crissXcoder",
          codeUrl: "https://github.com/crissXcoder",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Trabajemos juntos",
      email: "crisaltamontes@gmail.com",
      location: "Costa Rica",
      available: "Disponible para proyectos freelance y oportunidades laborales",
      sendMessage: "Enviar Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      availableLabel: "Disponibilidad",
    },
    footer: {
      madeWith: "Hecho con",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Cristhian Altamirano Montes",
      role: "Full Stack Developer",
      description:
        "Information Systems Engineering student passionate about building modern, scalable, and well-crafted web solutions.",
      viewPortfolio: "View Portfolio",
      viewGithub: "View GitHub profile",
      downloadCV: "Download CV",
      availableForWork: "Available for work",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me",
      description1:
        "I'm a Full Stack Developer currently in my 4th year of Information Systems Engineering at the National University of Costa Rica. I focus on building modern web applications with up-to-date technologies.",
      description2:
        "I care about code quality, scalable architectures, and a clear user experience. I enjoy continuous learning and applying best practices in every project.",
      location: "Costa Rica",
      university: "UNA, Costa Rica",
      experience: "Experience",
      projects: "Projects",
      yearsExp: "Years of exp.",
      completedProjects: "Completed projects",
      certifications: "Certifications",
    },
    education: {
      title: "Education",
      subtitle: "Academic and professional background",
      items: [
        {
          title: "Bachelor's Degree in Information Systems Engineering",
          institution: "National University of Costa Rica (UNA)",
          period: "2023 – Present · 7th semester of 8 (4th year)",
          description:
            "I began the program in 2023. The degree lasts 4 years (8 semesters) and focuses on software development, system architecture, databases, and technology project management. I am currently in my 7th semester. If my academic progress continues as planned, graduation is expected in 2027.",
          type: "University",
        },
        {
          title: "Diploma in Computer Application Programming",
          institution: "National University of Costa Rica (UNA)",
          period: "2023 – 2025 · 5 semesters · Graduated",
          description:
            "2.5-year academic program (5 semesters) focused on object-oriented programming, web development, and databases. I completed the full program at the end of the first semester of 2025 and officially graduated at the end of 2025.",
          type: "Diploma",
        },
        {
          title: "Artificial Intelligence Certification",
          institution: "Cisco Networking Academy",
          period: "2024",
          description:
            "Certification covering the fundamentals of artificial intelligence, machine learning, neural networks, and practical AI applications.",
          type: "Certification",
        },
        {
          title: "Scrum Fundamentals Certified (SFC™)",
          institution: "SCRUMstudy",
          period: "Early 2025",
          description:
            "Certification in the Scrum agile methodology, focused on roles, principles, and best practices for software project management and development.",
          type: "Certification",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      subtitle: "My tools of the trade",
      categories: [
        {
          name: "Frontend",
          skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
        },
        {
          name: "Backend",
          skills: ["NestJS", "Node.js", "REST APIs"],
        },
        {
          name: "Databases",
          skills: ["MySQL", "MariaDB"],
        },
      ],
      concepts: "Concepts & Methodologies",
      conceptsList: [
        "Scalability",
        "Responsiveness",
        "Modular Architecture",
        "REST APIs",
        "POS Integration",
        "Clean Code",
        "Scrum / Agile",
        "Version Control",
      ],
    },
    projects: {
      title: "Project Portfolio",
      subtitle: "What I've built",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies",
      role: "Role",
      items: [
        {
          title: "ADI Río Cañas",
          description:
            "Institutional web system developed for the Río Cañas Integral Development Association. Includes member affiliation module, facility booking system, news and events management, and an internal administrative dashboard. The architecture was designed with a modular and scalable approach, ensuring clear separation between frontend and backend for long-term maintainability.",
          role: "Full Stack Developer",
          tags: ["Next.js", "NestJS", "MySQL", "TypeScript", "TailwindCSS"],
          demoUrl: "https://sigadi-rc.org/",
          codeUrl: "https://github.com/crissXcoder",
        },
        {
          title: "Ecommerce with POS System",
          description:
            "E-commerce platform integrated with a point-of-sale (POS) system. Includes product management with real-time inventory, shopping cart, sales processing, admin dashboard with metrics, and stock control. Built with a scalable architecture and clear separation between frontend and backend.",
          role: "Full Stack Developer",
          tags: ["Next.js", "NestJS", "MySQL", "MariaDB", "TypeScript", "TailwindCSS"],
          demoUrl: "https://github.com/crissXcoder",
          codeUrl: "https://github.com/crissXcoder",
        },
        {
          title: "Task Dashboard – TODO App",
          description:
            "Task management application with a modern and intuitive interface. Full CRUD for tasks with multiple states (pending, in progress, completed), filters by category and priority, data persistence, and responsive design. Built with TypeScript to improve robustness and maintainability.",
          role: "Frontend Developer",
          tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
          demoUrl: "https://github.com/crissXcoder",
          codeUrl: "https://github.com/crissXcoder",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      email: "crisaltamontes@gmail.com",
      location: "Costa Rica",
      available: "Available for freelance projects and job opportunities",
      sendMessage: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
      send: "Send",
      emailLabel: "Email",
      locationLabel: "Location",
      availableLabel: "Availability",
    },
    footer: {
      madeWith: "Made with",
      rights: "All rights reserved",
    },
  },
}