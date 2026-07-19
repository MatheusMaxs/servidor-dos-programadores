import { ArrowUpRight } from 'lucide-react'
import { CodeLogo } from '@/components/code-logo'

const navItems = [
  { label: 'sobre', href: '#sobre' },
  { label: 'eventos', href: '#eventos' },
  { label: 'experiencias', href: '#experiencias' },
  { label: 'founders', href: '#founders' },
  { label: 'contatos', href: '#contatos' },
]

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-6 md:px-8">
      <a href="#home" aria-label="Servidor dos programadores - Home">
        <CodeLogo className="h-7 text-primary md:h-8" />
      </a>

      <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
        <a
          href="#home"
          className="rounded-lg border border-foreground/60 px-5 py-2 text-sm text-foreground transition-colors hover:border-foreground"
        >
          Home
        </a>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-foreground/90 transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#comunidade"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
      >
        junte-se
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </header>
  )
}
