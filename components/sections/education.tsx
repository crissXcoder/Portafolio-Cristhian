"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import SectionHeader from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const typeConfig: Record<string, { icon: typeof GraduationCap; color: string; bg: string }> = {
  Universidad: { icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
  University: { icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
  Diplomado: { icon: BookOpen, color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  Diploma: { icon: BookOpen, color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  Certificación: { icon: Award, color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
  Certification: { icon: Award, color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
}

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.education.title} subtitle={t.education.subtitle} />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block lg:-translate-x-px" />

          <div className="space-y-8 lg:space-y-0">
            {t.education.items.map((item, index) => {
              const config = typeConfig[item.type] || typeConfig["Certification"]
              const Icon = config.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={cn(
                    "animate-on-scroll relative flex items-start gap-4 lg:gap-0",
                    `[animation-delay:${index * 150}ms]`,
                    "lg:mb-12"
                  )}
                >
                  {/* Desktop: Left side */}
                  <div
                    className={cn(
                      "hidden lg:block w-[calc(50%-2rem)]",
                      isLeft ? "pr-8 text-right" : "lg:order-3 pl-8"
                    )}
                  >
                    {isLeft && (
                      <EducationCard item={item} config={config} Icon={Icon} />
                    )}
                    {!isLeft && (
                      <div className="flex items-center justify-start pt-3">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center w-16 flex-shrink-0 lg:order-2">
                    <div className={cn("w-10 h-10 rounded-full border-2 flex items-center justify-center", config.bg)}>
                      <Icon className={cn("w-4 h-4", config.color)} />
                    </div>
                  </div>

                  {/* Desktop: Right side */}
                  <div
                    className={cn(
                      "hidden lg:block w-[calc(50%-2rem)] lg:order-3",
                      !isLeft ? "pl-8" : "pr-8 text-right flex justify-end"
                    )}
                  >
                    {!isLeft && (
                      <EducationCard item={item} config={config} Icon={Icon} />
                    )}
                    {isLeft && (
                      <div className="flex items-center justify-end pt-3">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mobile: Full card */}
                  <div className="lg:hidden flex gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className={cn("w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0", config.bg)}>
                        <Icon className={cn("w-4 h-4", config.color)} />
                      </div>
                      <div className="w-px flex-1 bg-border mt-2" />
                    </div>
                    <div className="flex-1 pb-8">
                      <EducationCard item={item} config={config} Icon={Icon} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationCard({
  item,
  config,
  Icon,
}: {
  item: { title: string; institution: string; period: string; description: string; type: string }
  config: { color: string; bg: string }
  Icon: typeof GraduationCap
}) {
  return (
    <div className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default">
      <div className="flex items-start gap-3 mb-3">
        <div className={cn("w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0", config.bg)}>
          <Icon className={cn("w-3.5 h-3.5", config.color)} />
        </div>
        <div className="flex-1 min-w-0">
          <span className={cn("text-xs font-mono font-medium px-2 py-0.5 rounded-full border", config.bg, config.color)}>
            {item.type}
          </span>
        </div>
      </div>
      <h3 className="font-display font-semibold text-foreground mb-1 leading-tight">{item.title}</h3>
      <p className="text-sm text-primary font-medium mb-1">{item.institution}</p>
      <p className="text-xs text-muted-foreground font-mono flex items-center gap-1 mb-3">
        <Calendar className="w-3 h-3" />
        {item.period}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  )
}
