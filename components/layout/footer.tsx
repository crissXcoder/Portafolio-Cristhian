"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg">
              <span className="text-primary">C</span>risthian Altamirano
            </p>
            <p className="text-muted-foreground text-sm mt-1">Full Stack Developer · Costa Rica</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/crissXcoder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/cristhianaltamirano"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:cristhian@email.com"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5 flex-wrap">
            {t.footer.madeWith}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            by Cristhian Altamirano · {new Date().getFullYear()} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
