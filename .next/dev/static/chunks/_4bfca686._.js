(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/layout/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            education: "Formación",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            greeting: "Hola, soy",
            name: "Cristhian Altamirano Montes",
            role: "Desarrollador Full Stack",
            description: "Estudiante de Ingeniería en Sistemas de Información apasionado por crear soluciones web modernas, escalables y bien diseñadas.",
            viewPortfolio: "Ver Portafolio",
            viewGithub: "Ver perfil en GitHub",
            downloadCV: "Descargar CV",
            availableForWork: "Disponible para trabajo"
        },
        about: {
            title: "Sobre Mí",
            subtitle: "Conoce mi historia",
            description1: "Soy un desarrollador Full Stack cursando el 4° año de Ingeniería en Sistemas de Información en la Universidad Nacional de Costa Rica. Me especializo en construir aplicaciones web modernas con tecnologías actuales.",
            description2: "Mi enfoque se centra en la calidad del código, la escalabilidad de las arquitecturas y una experiencia de usuario clara. Me gusta aprender de forma continua y aplicar buenas prácticas en cada proyecto.",
            location: "Costa Rica",
            university: "UNA, Costa Rica",
            experience: "Experiencia",
            projects: "Proyectos",
            yearsExp: "Años de exp.",
            completedProjects: "Proyectos completados",
            certifications: "Certificaciones"
        },
        education: {
            title: "Formación Académica",
            subtitle: "Mi trayectoria académica y profesional",
            items: [
                {
                    title: "Bachillerato en Ingeniería en Sistemas de Información",
                    institution: "Universidad Nacional de Costa Rica (UNA)",
                    period: "2023 – Actualidad · 7° ciclo de 8 (4° año)",
                    description: "Inicié la carrera en 2023. El programa tiene una duración de 4 años (8 ciclos) y está orientado al desarrollo de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos. Actualmente curso el 7° ciclo. Si mantengo el ritmo académico, la graduación como bachiller está proyectada para 2027.",
                    type: "Universidad"
                },
                {
                    title: "Diplomado en Programación de Aplicaciones Informáticas",
                    institution: "Universidad Nacional de Costa Rica (UNA)",
                    period: "2023 – 2025 · 5 ciclos · Graduado",
                    description: "Programa de 2 años y medio (5 ciclos) enfocado en programación orientada a objetos, desarrollo web y bases de datos. Finalicé el bloque completo al concluir el primer semestre de 2025 y obtuve el título a finales de 2025.",
                    type: "Diplomado"
                },
                {
                    title: "Certificación en Inteligencia Artificial",
                    institution: "Cisco Networking Academy",
                    period: "2024",
                    description: "Certificación orientada a fundamentos de inteligencia artificial, machine learning y redes neuronales, con enfoque en aplicaciones prácticas.",
                    type: "Certificación"
                },
                {
                    title: "Scrum Fundamentals Certified (SFC™)",
                    institution: "SCRUMstudy",
                    period: "Inicios de 2025",
                    description: "Certificación en metodología ágil Scrum, enfocada en principios, roles y buenas prácticas para la gestión y desarrollo de proyectos de software.",
                    type: "Certificación"
                }
            ]
        },
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Mis herramientas de trabajo",
            categories: [
                {
                    name: "Frontend",
                    skills: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "JavaScript",
                        "HTML5",
                        "CSS3",
                        "TailwindCSS"
                    ]
                },
                {
                    name: "Backend",
                    skills: [
                        "NestJS",
                        "Node.js",
                        "REST APIs"
                    ]
                },
                {
                    name: "Bases de Datos",
                    skills: [
                        "MySQL",
                        "MariaDB"
                    ]
                }
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
                "Control de versiones"
            ]
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
                    description: "Sistema web institucional desarrollado para la Asociación de Desarrollo Integral de Río Cañas. Incluye módulo de afiliación, sistema de reservas, gestión de noticias y eventos, y panel administrativo interno. La arquitectura fue diseñada con enfoque modular y escalable, separando claramente frontend y backend para garantizar mantenibilidad y crecimiento futuro.",
                    role: "Desarrollador Full Stack",
                    tags: [
                        "Next.js",
                        "NestJS",
                        "MySQL",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://sigadi-rc.org/",
                    codeUrl: "https://github.com/crissXcoder"
                },
                {
                    title: "Ecommerce con Sistema POS",
                    description: "Plataforma de comercio electrónico integrada con sistema de punto de venta (POS). Incluye gestión de productos con inventario en tiempo real, carrito de compras, procesamiento de ventas, panel administrativo con métricas y control de stock. Arquitectura preparada para crecer, con separación clara entre frontend y backend.",
                    role: "Desarrollador Full Stack",
                    tags: [
                        "Next.js",
                        "NestJS",
                        "MySQL",
                        "MariaDB",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://github.com/crissXcoder",
                    codeUrl: "https://github.com/crissXcoder"
                },
                {
                    title: "Dashboard de Tareas – TODO App",
                    description: "Aplicación de gestión de tareas con interfaz moderna e intuitiva. CRUD completo con múltiples estados (pendiente, en progreso, completada), filtros por categoría y prioridad, persistencia de datos y diseño responsive. Desarrollada con TypeScript para mejorar robustez y mantenibilidad.",
                    role: "Desarrollador Frontend",
                    tags: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://github.com/crissXcoder",
                    codeUrl: "https://github.com/crissXcoder"
                }
            ]
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
            availableLabel: "Disponibilidad"
        },
        footer: {
            madeWith: "Hecho con",
            rights: "Todos los derechos reservados"
        }
    },
    en: {
        nav: {
            about: "About",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Cristhian Altamirano Montes",
            role: "Full Stack Developer",
            description: "Information Systems Engineering student passionate about building modern, scalable, and well-crafted web solutions.",
            viewPortfolio: "View Portfolio",
            viewGithub: "View GitHub profile",
            downloadCV: "Download CV",
            availableForWork: "Available for work"
        },
        about: {
            title: "About Me",
            subtitle: "Get to know me",
            description1: "I'm a Full Stack Developer currently in my 4th year of Information Systems Engineering at the National University of Costa Rica. I focus on building modern web applications with up-to-date technologies.",
            description2: "I care about code quality, scalable architectures, and a clear user experience. I enjoy continuous learning and applying best practices in every project.",
            location: "Costa Rica",
            university: "UNA, Costa Rica",
            experience: "Experience",
            projects: "Projects",
            yearsExp: "Years of exp.",
            completedProjects: "Completed projects",
            certifications: "Certifications"
        },
        education: {
            title: "Education",
            subtitle: "Academic and professional background",
            items: [
                {
                    title: "Bachelor's Degree in Information Systems Engineering",
                    institution: "National University of Costa Rica (UNA)",
                    period: "2023 – Present · 7th semester of 8 (4th year)",
                    description: "I began the program in 2023. The degree lasts 4 years (8 semesters) and focuses on software development, system architecture, databases, and technology project management. I am currently in my 7th semester. If my academic progress continues as planned, graduation is expected in 2027.",
                    type: "University"
                },
                {
                    title: "Diploma in Computer Application Programming",
                    institution: "National University of Costa Rica (UNA)",
                    period: "2023 – 2025 · 5 semesters · Graduated",
                    description: "2.5-year academic program (5 semesters) focused on object-oriented programming, web development, and databases. I completed the full program at the end of the first semester of 2025 and officially graduated at the end of 2025.",
                    type: "Diploma"
                },
                {
                    title: "Artificial Intelligence Certification",
                    institution: "Cisco Networking Academy",
                    period: "2024",
                    description: "Certification covering the fundamentals of artificial intelligence, machine learning, neural networks, and practical AI applications.",
                    type: "Certification"
                },
                {
                    title: "Scrum Fundamentals Certified (SFC™)",
                    institution: "SCRUMstudy",
                    period: "Early 2025",
                    description: "Certification in the Scrum agile methodology, focused on roles, principles, and best practices for software project management and development.",
                    type: "Certification"
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            subtitle: "My tools of the trade",
            categories: [
                {
                    name: "Frontend",
                    skills: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "JavaScript",
                        "HTML5",
                        "CSS3",
                        "TailwindCSS"
                    ]
                },
                {
                    name: "Backend",
                    skills: [
                        "NestJS",
                        "Node.js",
                        "REST APIs"
                    ]
                },
                {
                    name: "Databases",
                    skills: [
                        "MySQL",
                        "MariaDB"
                    ]
                }
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
                "Version Control"
            ]
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
                    description: "Institutional web system developed for the Río Cañas Integral Development Association. Includes member affiliation module, facility booking system, news and events management, and an internal administrative dashboard. The architecture was designed with a modular and scalable approach, ensuring clear separation between frontend and backend for long-term maintainability.",
                    role: "Full Stack Developer",
                    tags: [
                        "Next.js",
                        "NestJS",
                        "MySQL",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://sigadi-rc.org/",
                    codeUrl: "https://github.com/crissXcoder"
                },
                {
                    title: "Ecommerce with POS System",
                    description: "E-commerce platform integrated with a point-of-sale (POS) system. Includes product management with real-time inventory, shopping cart, sales processing, admin dashboard with metrics, and stock control. Built with a scalable architecture and clear separation between frontend and backend.",
                    role: "Full Stack Developer",
                    tags: [
                        "Next.js",
                        "NestJS",
                        "MySQL",
                        "MariaDB",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://github.com/crissXcoder",
                    codeUrl: "https://github.com/crissXcoder"
                },
                {
                    title: "Task Dashboard – TODO App",
                    description: "Task management application with a modern and intuitive interface. Full CRUD for tasks with multiple states (pending, in progress, completed), filters by category and priority, data persistence, and responsive design. Built with TypeScript to improve robustness and maintainability.",
                    role: "Frontend Developer",
                    tags: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "TailwindCSS"
                    ],
                    demoUrl: "https://github.com/crissXcoder",
                    codeUrl: "https://github.com/crissXcoder"
                }
            ]
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
            availableLabel: "Availability"
        },
        footer: {
            madeWith: "Made with",
            rights: "All rights reserved"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/language-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("es");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const saved = localStorage.getItem("portfolio-language");
            if (saved && (saved === "es" || saved === "en")) {
                setLanguageState(saved);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem("portfolio-language", lang);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/language-context.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "kySwjjRWfaPH8NuUv4uZYMYn37c=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>z,
    "useTheme",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var P = [
    "light",
    "dark"
], E = "(prefers-color-scheme: dark)", Q = typeof window == "undefined", L = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), D = {
    setTheme: (e)=>{},
    themes: []
}, j = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](L)) != null ? e : D;
}, z = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](L) ? e.children : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](O, {
        ...e
    }), N = [
    "light",
    "dark"
], O = ({ forcedTheme: e, disableTransitionOnChange: a = !1, enableSystem: n = !0, enableColorScheme: g = !0, storageKey: m = "theme", themes: c = N, defaultTheme: o = n ? "system" : "light", attribute: y = "data-theme", value: h, children: k, nonce: w })=>{
    let [i, d] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "O.useState": ()=>M(m, o)
    }["O.useState"]), [S, l] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "O.useState": ()=>M(m)
    }["O.useState"]), u = h ? Object.values(h) : c, R = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "O.useCallback[R]": (s)=>{
            let r = s;
            if (!r) return;
            s === "system" && n && (r = T());
            let v = h ? h[r] : r, C = a ? _() : null, x = document.documentElement;
            if (y === "class" ? (x.classList.remove(...u), v && x.classList.add(v)) : v ? x.setAttribute(y, v) : x.removeAttribute(y), g) {
                let I = P.includes(o) ? o : null, A = P.includes(r) ? r : I;
                x.style.colorScheme = A;
            }
            C == null || C();
        }
    }["O.useCallback[R]"], []), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "O.useCallback[f]": (s)=>{
            let r = typeof s == "function" ? s(s) : s;
            d(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["O.useCallback[f]"], [
        e
    ]), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "O.useCallback[p]": (s)=>{
            let r = T(s);
            l(r), i === "system" && n && !e && R("system");
        }
    }["O.useCallback[p]"], [
        i,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "O.useEffect": ()=>{
            let s = window.matchMedia(E);
            return s.addListener(p), p(s), ({
                "O.useEffect": ()=>s.removeListener(p)
            })["O.useEffect"];
        }
    }["O.useEffect"], [
        p
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "O.useEffect": ()=>{
            let s = {
                "O.useEffect.s": (r)=>{
                    if (r.key !== m) return;
                    let v = r.newValue || o;
                    f(v);
                }
            }["O.useEffect.s"];
            return window.addEventListener("storage", s), ({
                "O.useEffect": ()=>window.removeEventListener("storage", s)
            })["O.useEffect"];
        }
    }["O.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "O.useEffect": ()=>{
            R(e != null ? e : i);
        }
    }["O.useEffect"], [
        e,
        i
    ]);
    let $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "O.useMemo[$]": ()=>({
                theme: i,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: i === "system" ? S : i,
                themes: n ? [
                    ...c,
                    "system"
                ] : c,
                systemTheme: n ? S : void 0
            })
    }["O.useMemo[$]"], [
        i,
        f,
        e,
        S,
        n,
        c
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](L.Provider, {
        value: $
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](U, {
        forcedTheme: e,
        disableTransitionOnChange: a,
        enableSystem: n,
        enableColorScheme: g,
        storageKey: m,
        themes: c,
        defaultTheme: o,
        attribute: y,
        value: h,
        children: k,
        attrs: u,
        nonce: w
    }), k);
}, U = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: a, attribute: n, enableSystem: g, enableColorScheme: m, defaultTheme: c, value: o, attrs: y, nonce: h })=>{
    let k = c === "system", w = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${y.map((u)=>`'${u}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, i = m ? (P.includes(c) ? c : null) ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", d = (l, u = !1, R = !0)=>{
        let f = o ? o[l] : l, p = u ? l + "|| ''" : `'${f}'`, $ = "";
        return m && R && !u && P.includes(l) && ($ += `d.style.colorScheme = '${l}';`), n === "class" ? u || f ? $ += `c.add(${p})` : $ += "null" : f && ($ += `d[s](n,${p})`), $;
    }, S = e ? `!function(){${w}${d(e)}}()` : g ? `!function(){try{${w}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${k})){var t='${E}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}${k ? "" : "else{" + d(c, !1, !1) + "}"}${i}}catch(e){}}()` : `!function(){try{${w}var e=localStorage.getItem('${a}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}else{${d(c, !1, !1)};}${i}}catch(t){}}();`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        nonce: h,
        dangerouslySetInnerHTML: {
            __html: S
        }
    });
}), M = (e, a)=>{
    if (Q) return;
    let n;
    try {
        n = localStorage.getItem(e) || void 0;
    } catch (g) {}
    return n || a;
}, _ = ()=>{
    let e = document.createElement("style");
    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(e);
        }, 1);
    };
}, T = (e)=>(e || (e = window.matchMedia(E)), e.matches ? "dark" : "light");
;
}),
]);

//# sourceMappingURL=_4bfca686._.js.map