import Image from 'next/image'
import { Linkedin, Github, Instagram } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

function FounderCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex min-h-72 flex-col justify-between rounded-[2rem] bg-secondary p-8">
      <h3 className="font-heading text-xl font-medium text-secondary-foreground md:text-2xl">
        {name}
      </h3>
      <div>
        <p className="text-sm leading-relaxed text-secondary-foreground/80">{role}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-secondary-foreground">
          <span>Social links -</span>
          <a href="#" aria-label={`LinkedIn de ${name}`} className="transition-opacity hover:opacity-70">
            <Linkedin className="size-4" />
          </a>
          <a href="#" aria-label={`GitHub de ${name}`} className="transition-opacity hover:opacity-70">
            <Github className="size-4" />
          </a>
          <a href="#" aria-label={`Instagram de ${name}`} className="transition-opacity hover:opacity-70">
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

function FounderPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-[2rem]">
      <Image src={src} alt={alt} fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  )
}

export function FoundersSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="founders"
        title="Founders da comunidade"
        description="Conheça mais sobre quem criou e quem ajudou a criar a comunidade do servidor dos programdores"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FounderCard
          name="Bernardo Righi"
          role="Pesquisador na Unisinos, @Dell & Back-End Developer | Machine Learning & Data Analysis"
        />
        <FounderPhoto src="/images/founder-1.jpg" alt="Foto de um dos founders da comunidade" />
        <FounderCard name="Matheus Audibert" role="Engenheiro de Software, @Itaú" />
        <FounderPhoto src="/images/founder-2.jpg" alt="Foto de Bernardo Righi" />
        <FounderCard name="Caio andres" role="Engenheiro de Software, Cloud & IA @Itaú" />
        <FounderPhoto src="/images/founder-3.jpg" alt="Foto de Matheus Audibert" />
      </div>
    </section>
  )
}
