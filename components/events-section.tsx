import { ArrowUpRight, Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const events = [
  {
    day: 'Day 17/07',
    time: '19:00 - 21:00',
    title: 'Evento sobre figma & ui/ux',
    description:
      'Nesse evento nosso devs poderam aprender mais sobre figma, ui e ux. Será apresentado por Matheus Maxs & Kalel dev, discutindo como usar o figma, diferença sobre ui e ux, como aplicar ui e ux em seus projetos ...',
  },
  {
    day: 'Day 18/07',
    time: '20:00 - 22:00',
    title: 'Palestra sobre AI Agents & uso de skills em agents',
    description:
      'Palestra apresentada por Matheus Maxs e Fresh dev, palestrando sobre oque são AI agents, quais agents e como usar em seus projetos da melhor forma, já apresentando o uso de skills para um AI agent mais personalizado e que entrega melhores outputs ...',
  },
  {
    day: 'Day 19/07',
    time: '18:00 - 20:00',
    title: 'Futuro da AI & Networking',
    description:
      'Dirigido por Caio andres ele aborda mais como pode ser o futuro da AI no mercado dev e como isso pode afetar todos, logo após audibert palestra sobre como Networking é importante para a carreira dev ...',
  },
]

export function EventsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="eventos"
        title="Agenda de eventos"
        description="veja a agenda de eventos e se programe para os proximos que estao vindo por aí"
      />

      <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-card">
        {/* Formas decorativas azuis no canto inferior esquerdo */}
        <svg
          className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 opacity-80"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <g fill="oklch(0.51 0.22 262)">
            <path d="M100 100 C60 100 60 40 100 40 C100 80 100 80 100 100Z" opacity="0.9" />
            <path d="M100 100 C100 60 160 60 160 100 C120 100 120 100 100 100Z" opacity="0.7" />
            <path d="M100 100 C140 100 140 160 100 160 C100 120 100 120 100 100Z" opacity="0.9" />
            <path d="M100 100 C100 140 40 140 40 100 C80 100 80 100 100 100Z" opacity="0.7" />
          </g>
        </svg>

        <div className="relative flex flex-col gap-16 px-6 py-12 md:px-14 md:py-20">
          {events.map((event) => (
            <article key={event.day} className="grid gap-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
              <header>
                <p className="font-heading text-3xl font-medium text-foreground md:text-4xl">{event.day}</p>
                <p className="mt-2 font-heading text-2xl font-light tracking-wider text-foreground md:text-3xl">
                  {event.time}
                </p>
              </header>
              <div>
                <h3 className="font-heading text-2xl font-medium text-foreground text-pretty md:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <a
                  href="#comunidade"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
                >
                  Ver mais
                  <Plus className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          <div className="flex justify-end">
            <a
              href="#comunidade"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm text-primary-foreground transition-opacity hover:opacity-90 md:w-auto md:min-w-96"
            >
              Ver todos os eventos & meet ups
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
