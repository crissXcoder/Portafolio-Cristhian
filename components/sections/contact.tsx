"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import SectionHeader from "@/components/ui/section-header"

export default function Contact() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setSent(false), 4000)
  }

  const contactInfo = [
    { icon: Mail, label: t.contact.emailLabel, value: t.contact.email, href: `mailto:${t.contact.email}` },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.location, href: null },
    { icon: Clock, label: t.contact.availableLabel, value: t.contact.available, href: null },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="animate-on-scroll flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="animate-on-scroll flex gap-3 [animation-delay:300ms]">
              <a
                href="https://github.com/crissXcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/30 transition-all duration-200 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/cristhianaltamirano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/30 transition-all duration-200 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll [animation-delay:200ms]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    ✓
                  </>
                ) : sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {t.contact.send}...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
