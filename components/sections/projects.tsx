"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, Code2, Layers, CheckSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import SectionHeader from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const projectIcons = [Layers, Code2, CheckSquare]
const projectGradients = [
  "from-blue-500/20 via-indigo-500/10 to-transparent",
  "from-amber-500/20 via-orange-500/10 to-transparent",
  "from-green-500/20 via-emerald-500/10 to-transparent",
]
const projectAccents = ["border-blue-500/30", "border-amber-500/30", "border-green-500/30"]

export default function Projects() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length]
            const gradient = projectGradients[index % projectGradients.length]
            const accent = projectAccents[index % projectAccents.length]

            return (
              <div
                key={index}
                className={cn(
                  "animate-on-scroll group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                  `[animation-delay:${index * 150}ms]`
                )}
              >
                {/* Project header / illustration */}
                <div
                  className={cn(
                    "relative h-44 bg-gradient-to-br p-6 flex items-center justify-center overflow-hidden border-b border-border",
                    gradient
                  )}
                >
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative flex flex-col items-center gap-3">
                    <div className={cn("w-16 h-16 rounded-2xl border-2 flex items-center justify-center bg-background/80 backdrop-blur-sm", accent)}>
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Role */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-muted-foreground">{t.projects.role}:</span>
                    <span className="text-xs font-medium text-primary">{project.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-5">
                    <p className="text-xs font-mono text-muted-foreground mb-2">{t.projects.technologies}:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 text-xs bg-muted border border-border rounded-md font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t.projects.viewProject}
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium border border-border bg-card text-foreground rounded-lg hover:bg-muted transition-all duration-200"
                      title={t.projects.viewCode}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
