import { ArrowUpRight, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import { CodeLogo } from '@/components/code-logo'

const sitemapLinks = [
  { label: 'home', href: '#home' },
  { label: 'sobre', href: '#sobre' },
  { label: 'eventos', href: '#eventos' },
  { label: 'founders', href: '#founders' },
  { label: 'contatos', href: '#contatos' },
]

const partnerLinks = ['hostinger.com', 'websecbr.org', 'aceleradev.com.br']

const legalLinks = ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy']

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-12 pt-16 md:px-8 md:pt-24">
      <div className="grid overflow-hidden rounded-[2.5rem] md:grid-cols-[1.15fr_1fr]">
        {/* Lado claro */}
        <div className="flex flex-col bg-secondary p-8 md:p-12">
          <div className="flex items-center gap-3">
            <CodeLogo className="h-6 text-secondary-foreground" />
            <p className="font-heading text-lg font-medium text-secondary-foreground md:text-xl">
              servidor dos programadores
            </p>
          </div>

          <div className="mt-10 grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-heading text-sm font-semibold text-secondary-foreground">SiteMap</p>
              <ul className="mt-4 flex flex-col gap-3">
                {sitemapLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-secondary-foreground">Parceiros</p>
              <ul className="mt-4 flex flex-col gap-3">
                {partnerLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contatos"
                    className="inline-flex items-center gap-1 text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    seja você também
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-xs text-secondary-foreground/60">
            <p>© 2026 Servidor dos programadores. Todos os direitos reservados.</p>
            <p className="mt-1.5">
              Feito por <span className="font-medium text-secondary-foreground/80">Maxs dev</span>
            </p>
          </div>
        </div>

        {/* Lado azul */}
        <div className="flex flex-col bg-primary p-8 md:p-12">
          <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-primary-foreground md:text-2xl">
            Fique atualizado
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/90">
            Inscreva-se para eventuais eventos & conteudos.
          </p>

          <form className="mt-10" action="#">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              placeholder="Email"
              className="w-full border-b border-primary-foreground/50 bg-transparent pb-2 text-sm text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-primary-foreground px-6 py-3.5 text-sm text-primary transition-opacity hover:opacity-90"
            >
              inscrever-se
            </button>
          </form>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground">
                Nos siga
              </p>
              <div className="mt-4 flex items-center gap-3 text-primary-foreground">
                <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
                  <Facebook className="size-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                  <Linkedin className="size-4" />
                </a>
                <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                  <Instagram className="size-4" />
                </a>
                <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70">
                  <Youtube className="size-4" />
                </a>
              </div>
            </div>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground">
                Email
              </p>
              <p className="mt-4 text-sm text-primary-foreground/90">suporte@sdp.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
