import { ArrowUpRight } from 'lucide-react'
import { CodeLogo } from '@/components/code-logo'

export function HeroSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 md:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary">
        {/* Camada de gradiente: azul vivo no topo esquerdo escurecendo para baixo/direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 130% at 15% 0%, oklch(0.58 0.23 262) 0%, oklch(0.48 0.22 262) 40%, oklch(0.28 0.14 262) 75%, oklch(0.16 0.06 262) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Padrão de espirais sutis */}
        <svg
          className="absolute inset-0 h-full w-full opacity-15"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 500"
        >
          <g stroke="white" strokeWidth="14" fill="none" opacity="0.35">
            <circle cx="420" cy="90" r="150" />
            <circle cx="420" cy="90" r="105" />
            <circle cx="420" cy="90" r="60" />
            <circle cx="700" cy="330" r="130" />
            <circle cx="700" cy="330" r="85" />
          </g>
        </svg>
        {/* Glifo decorativo grande */}
        <CodeLogo
          className="pointer-events-none absolute -bottom-8 right-4 h-48 w-auto text-blue-700/80 md:right-16 md:h-72"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-10 px-6 py-10 md:px-12 md:py-14">
          <div className="flex items-center justify-between text-sm font-medium text-primary-foreground">
            <span>20k + de devs</span>
            <span>discord comunity</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-light leading-tight text-primary-foreground text-balance md:text-7xl lg:text-8xl">
              <span className="italic">{'// '}</span>servidor dos programadores
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/90 md:text-base">
              Comunidade de tecnologia para todos os públicos. Networking, dicas, eventos e + de TI
            </p>
          </div>

          <div>
            <a
              href="#comunidade"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-blue-800"
            >
              junte se a nossa comunidade
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
