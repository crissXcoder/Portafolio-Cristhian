"use client"

interface SectionHeaderProps {
  title: string
  subtitle: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <p className="text-xs font-mono font-medium text-primary uppercase tracking-widest mb-2">
        {subtitle}
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      <div className={`flex items-center gap-2 mt-4 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-12 bg-primary" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="h-px w-12 bg-primary" />
      </div>
    </div>
  )
}
