"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import SectionHeader from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const categoryColors: Record<string, { gradient: string; badge: string; dot: string }> = {
  Frontend: {
    gradient: "from-blue-500/10 to-blue-500/5",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  Backend: {
    gradient: "from-purple-500/10 to-purple-500/5",
    badge: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
    dot: "bg-purple-500",
  },
  "Bases de Datos": {
    gradient: "from-green-500/10 to-green-500/5",
    badge: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
    dot: "bg-green-500",
  },
  Databases: {
    gradient: "from-green-500/10 to-green-500/5",
    badge: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
    dot: "bg-green-500",
  },
}

const defaultColor = {
  gradient: "from-gray-500/10 to-gray-500/5",
  badge: "bg-muted border-border text-muted-foreground",
  dot: "bg-muted-foreground",
}

export default function Skills() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((category, i) => {
            const colors = categoryColors[category.name] || defaultColor

            return (
              <div
                key={i}
                className={cn(
                  "animate-on-scroll p-6 rounded-2xl bg-card border border-border card-hover",
                  `[animation-delay:${i * 100}ms]`
                )}
              >
                <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-medium mb-5", colors.badge)}>
                  <span className={cn("w-1.5 h-1.5 rounded-full", colors.dot)} />
                  {category.name}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-sm bg-muted hover:bg-primary hover:text-primary-foreground border border-border rounded-lg font-medium transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Concepts */}
        <div className="animate-on-scroll mt-10 p-8 rounded-2xl bg-card border border-border [animation-delay:400ms]">
          <h3 className="font-display font-semibold text-lg mb-5">{t.skills.concepts}</h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.conceptsList.map((concept, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm border border-primary/30 bg-primary/5 text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
