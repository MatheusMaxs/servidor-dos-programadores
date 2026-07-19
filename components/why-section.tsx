import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const reasons = [
  {
    number: '01',
    title: 'OPORTUNIDADE NETWORKING',
    description:
      'Em nossa comunidade você tem oportunidades de networking a toda hora, seja para seus projetos ou até mesmo para arranjar um emprego',
    titleLeft: true,
    textRight: true,
  },
  {
    number: '02',
    title: 'CONHECIMENTO & APRENDIZADO',
    description:
      'Ter conversas com outros programadores pode te fazer adquirir mais conhecimento e estar em constante aprendizado',
    titleLeft: true,
    textRight: true,
  },
  {
    number: '03',
    title: 'EVENTOS DO SERVIDOR',
    description:
      'Em nossos eventos ensinamos linkedin, github, design ui/ux, metas para entrevistas em ingles e muito mais',
    titleLeft: false,
    textRight: false,
  },
  {
    number: '04',
    title: 'EMPREGOS & FREELANCES',
    description:
      'Você que esta tentando achar ou vagas ou freelance pode facilmente ir em nosso canal de vagas do servidor e achar uma que se encaixe com você',
    titleLeft: false,
    textRight: false,
  },
]

export function WhySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="experiencias"
        title="Porque participar ?"
        description={
          <>
            Tire suas duvidas em relação a nossa comunidade você mesmo evidenciando cada uma dessa{' '}
            <strong className="font-semibold text-foreground">expreriencias</strong> citadas
          </>
        }
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => (
          <article
            key={reason.number}
            className="relative flex min-h-72 flex-col overflow-hidden rounded-[2rem] bg-card p-8 md:p-9"
          >
            <h3
              className={cn(
                'font-heading text-sm font-medium uppercase tracking-widest text-foreground',
                !reason.titleLeft && 'text-right',
              )}
            >
              {reason.title}
            </h3>
            <p
              className={cn(
                'relative z-10 mt-10 max-w-56 text-sm leading-relaxed text-muted-foreground',
                reason.textRight && 'self-end',
              )}
            >
              {reason.description}
            </p>
            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute -bottom-14 select-none font-heading text-[11rem] font-light leading-none',
                reason.textRight ? '-left-4' : '-right-4',
              )}
              style={{
                background:
                  'linear-gradient(135deg, oklch(0.55 0.23 262) 0%, oklch(0.30 0.14 262) 70%, oklch(0.20 0.06 262) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {reason.number}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
