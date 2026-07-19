import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
      <SectionHeading
        id="sobre"
        title="Sobre"
        description="Conheça um pouco mais da historia da nossa comunidade"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Cartão Comunidade */}
        <div className="flex flex-col rounded-[2rem] bg-primary p-8 md:p-10">
          <h3 className="font-heading text-2xl font-medium text-primary-foreground md:text-3xl">
            Comunidade
          </h3>
          <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-primary-foreground/90">
            <p>
              Explore advanced machine learning, natural language processing, AI-driven
              automation, and emerging cybersecurity applications.
            </p>
            <p>
              Explore advanced machine learning, natural language processing, AI-driven
              automation, and emerging cybersecurity applications.
            </p>
          </div>
          <a
            href="#comunidade"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/70 px-6 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            veja mais sobre nós
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {/* Cartão Technologies */}
          <div className="rounded-[2rem] bg-primary p-8 md:p-10">
            <h3 className="font-heading text-2xl font-medium text-primary-foreground md:text-3xl">
              Technologies
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/90">
              Explore advanced machine learning, natural language processing, AI-driven
              automation, and emerging cybersecurity applications.
            </p>
          </div>

          {/* Cartão Networking Opportunities */}
          <div className="flex-1 rounded-[2rem] bg-secondary p-8 md:p-10">
            <h3 className="font-heading text-2xl font-medium text-secondary-foreground md:text-3xl">
              Networking Opportunities
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-secondary-foreground/80">
              Enjoy exclusive networking sessions, roundtables, and social events to foster
              collaboration and spark new partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
