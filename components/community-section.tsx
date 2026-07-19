import { ArrowUpRight, Heart } from 'lucide-react'
import { CodeLogo } from '@/components/code-logo'
import { SectionHeading } from '@/components/section-heading'

export function CommunitySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="comunidade"
        title="Entre na comunidade"
        description="Tirou todas as suas duvidas ? sim/não independentemente entre em nossa comunidade e faça parte dessa experiencia"
      />

      <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-card">
        {/* Glifo decorativo grande */}
        <CodeLogo
          className="pointer-events-none absolute -bottom-10 right-6 h-56 w-auto text-primary md:right-16 md:h-72"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-8 px-6 py-12 md:px-14 md:py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-foreground">
              Convite para nossa comunidade servidor dos programdores
            </p>
            <p className="font-heading text-sm font-medium text-foreground">
              <span className="text-muted-foreground">2k26</span> discord comunity
            </p>
          </div>

          <a
            href="#"
            className="group relative flex w-full max-w-2xl items-center overflow-hidden rounded-2xl bg-primary px-8 py-8 transition-opacity hover:opacity-90"
          >
            <span className="inline-flex items-center gap-2 text-base font-medium text-primary-foreground">
              Discord link
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
            {/* Padrão de pontos */}
            <svg
              className="pointer-events-none absolute right-6 top-1/2 h-16 w-40 -translate-y-1/2 text-primary-foreground/80"
              viewBox="0 0 160 64"
              aria-hidden="true"
            >
              {Array.from({ length: 4 }).map((_, row) =>
                Array.from({ length: 10 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={8 + col * 16}
                    cy={8 + row * 16}
                    r={2.2}
                    fill="currentColor"
                    opacity={(col + row) % 3 === 0 ? 0.9 : 0.4}
                  />
                )),
              )}
            </svg>
          </a>

          <div>
            <p className="flex flex-wrap items-baseline gap-x-2 text-sm text-foreground">
              Junte-se a uma comunide com
              <span className="font-heading text-2xl font-medium">20.842</span>
              programadores
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              faça parte dessa comunidade que todo nós amamos
              <Heart className="size-4 fill-primary text-primary" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
