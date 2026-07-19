import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const founders = [
  {
    name: 'Bernardo Righi',
    role: 'Pesquisador na Unisinos, @Dell & Back-End Developer | Machine Learning & Data Analysis',
    photo: '/images/founder-1.jpg',
    alt: 'Foto de Bernardo Righi',
  },
  {
    name: 'Caio andres',
    role: 'Engenheiro de Software, Cloud & IA @Itaú',
    photo: '/images/founder-2.jpg',
    alt: 'Foto de Caio Andres',
  },
  {
    name: 'Matheus Audibert',
    role: 'Engenheiro de Software, @Itaú',
    photo: '/images/founder-3.jpg',
    alt: 'Foto de Matheus Audibert',
  },
]

export function FoundersSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="founders"
        title="Founders da comunidade"
        description="Conheça mais sobre quem criou e quem ajudou a criar a comunidade do servidor dos programdores"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {founders.map((founder) => (
          <article
            key={founder.name}
            className="flex flex-col overflow-hidden rounded-[2rem] bg-secondary"
          >
            <div className="relative h-72 w-full">
              <Image
                src={founder.photo}
                alt={founder.alt}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-8">
              <h3 className="font-heading text-xl font-medium text-secondary-foreground md:text-2xl">
                {founder.name}
              </h3>
              <div>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
                  {founder.role}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-secondary-foreground">
                  <span>Social links -</span>
                  <a href="#" aria-label={`LinkedIn de ${founder.name}`} className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="#" aria-label={`GitHub de ${founder.name}`} className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </a>
                  <a href="#" aria-label={`Instagram de ${founder.name}`} className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
