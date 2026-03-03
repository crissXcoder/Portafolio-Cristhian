"use client"

import { useEffect, useRef } from "react"
import { MapPin, GraduationCap, Code2, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import SectionHeader from "@/components/ui/section-header"

const stats = [
  { icon: Code2, valueKey: "yearsExp", value: "3+", color: "text-blue-500" },
  { icon: Award, valueKey: "completedProjects", value: "5+", color: "text-amber-500" },
  { icon: GraduationCap, valueKey: "certifications", value: "4", color: "text-green-500" },
]

export default function About() {
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

  const statLabels = [t.about.yearsExp, t.about.completedProjects, t.about.certifications]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="animate-on-scroll text-foreground text-lg leading-relaxed mb-5">
              {t.about.description1}
            </p>
            <p className="animate-on-scroll text-muted-foreground leading-relaxed mb-8 [animation-delay:100ms]">
              {t.about.description2}
            </p>

            <div className="animate-on-scroll flex items-center gap-2 text-muted-foreground [animation-delay:200ms]">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{t.about.location}</span>
              <span className="mx-2">·</span>
              <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{t.about.university}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll grid grid-cols-3 gap-4 [animation-delay:200ms]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <stat.icon className={`w-7 h-7 ${stat.color} mb-3`} />
                <p className={`font-display font-black text-3xl ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-medium leading-tight">
                  {statLabels[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
