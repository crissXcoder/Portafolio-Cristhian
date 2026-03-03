"use client"

import { useEffect, useRef } from "react"
import { Github, Download, ChevronDown, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToPortfolio = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t.hero.availableForWork}
            </div>

            <p className="animate-on-scroll text-lg text-muted-foreground font-body mb-3 [animation-delay:100ms]">
              {t.hero.greeting}
            </p>

            <h1 className="animate-on-scroll font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 [animation-delay:200ms]">
              <span className="block">Cristhian</span>
              <span className="block text-gradient">Altamirano</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground mt-1">
                Montes
              </span>
            </h1>

            <div className="animate-on-scroll flex items-center gap-3 justify-center lg:justify-start mb-6 [animation-delay:300ms]">
              <div className="h-px w-8 bg-primary" />
              <p className="text-primary font-semibold font-mono text-sm tracking-widest uppercase">
                {t.hero.role}
              </p>
              <div className="h-px w-8 bg-primary" />
            </div>

            <p className="animate-on-scroll text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 [animation-delay:400ms]">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="animate-on-scroll flex flex-wrap gap-3 justify-center lg:justify-start [animation-delay:500ms]">
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                <Briefcase className="w-4 h-4" />
                {t.hero.viewPortfolio}
              </button>

              <a
                href="https://github.com/crissXcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Github className="w-4 h-4" />
                {t.hero.viewGithub}
              </a>

              <a
                href="/cv-cristhian-altamirano.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-muted-foreground font-semibold hover:text-foreground hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </a>
            </div>

            {/* Tech stack mini */}
            <div className="animate-on-scroll mt-10 [animation-delay:600ms]">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Next.js", "React", "TypeScript", "NestJS", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-on-scroll flex-shrink-0 [animation-delay:300ms]">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg text-xs font-mono text-primary animate-float">
                &lt;/&gt; dev
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg text-xs font-mono text-green-500 animate-float [animation-delay:1.5s]">
                UNA · CR
              </div>

              {/* Avatar container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-card shadow-2xl">
                {/* Placeholder avatar - replace src with actual photo */}
                <img
                  src="https://i.ibb.co/n8bjgySf/image.png"
                  alt="Cristhian Altamirano"
                  className="w-full h-full object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}
