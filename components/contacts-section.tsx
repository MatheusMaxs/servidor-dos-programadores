import { SectionHeading } from '@/components/section-heading'

function UnderlineInput({
  label,
  id,
  type = 'text',
}: {
  label: string
  id: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="w-full border-b border-secondary-foreground/30 bg-transparent pb-2 text-sm text-secondary-foreground placeholder:text-secondary-foreground/60 focus:border-secondary-foreground focus:outline-none"
      />
    </div>
  )
}

export function ContactsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <SectionHeading
        id="contatos"
        title="Contatos"
        description="Onde você pode nos contatar e sugeri melhorias para nossa comunidade"
      />

      <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-card">
        {/* Formas decorativas */}
        <svg
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-30"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <g fill="oklch(0.51 0.22 262)">
            <path d="M100 100 C60 100 60 40 100 40 C100 80 100 80 100 100Z" opacity="0.9" />
            <path d="M100 100 C100 60 160 60 160 100 C120 100 120 100 100 100Z" opacity="0.7" />
            <path d="M100 100 C140 100 140 160 100 160 C100 120 100 120 100 100Z" opacity="0.6" />
            <path d="M100 100 C100 140 40 140 40 100 C80 100 80 100 100 100Z" opacity="0.5" />
          </g>
        </svg>

        <div className="relative grid gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:px-14 md:py-16">
          {/* Formulário - esquerda */}
          <form className="flex flex-col rounded-[2rem] bg-secondary p-8 md:p-10" action="#">
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wide text-secondary-foreground text-balance md:text-xl">
              Escreva seu problema ou duvida para nós
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
              Entre em contato com dúvidas sobre parcerias ou detalhes de evento.
            </p>

            <div className="mt-8 flex flex-col gap-7">
              <UnderlineInput label="Nome" id="nome" />
              <UnderlineInput label="Email" id="email" type="email" />
              <UnderlineInput label="Subject" id="subject" />
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Message"
                  className="w-full resize-none border-b border-secondary-foreground/30 bg-transparent pb-2 text-sm text-secondary-foreground placeholder:text-secondary-foreground/60 focus:border-secondary-foreground focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 w-full rounded-xl bg-primary px-6 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Mandar mensagem
            </button>
          </form>

          {/* Informações - direita */}
          <div className="flex flex-col">
            <h3 className="font-heading text-3xl font-medium leading-snug text-foreground text-balance md:text-4xl">
              Estamos Aqui Para Conectar & Ajudar Você
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tem alguma duvida? Tem alguma melhoria em mente para o servidor? Nosso time está
              pronto para te ajudar.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                  Telefone
                </p>
                <p className="mt-3 text-sm text-muted-foreground">+31 20 123 4567</p>
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                  Email
                </p>
                <p className="mt-3 text-sm text-muted-foreground">suporte@sdp.com.br</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                  Follow us
                </p>
                <div className="mt-4 flex items-center gap-3 text-foreground">
                  <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" /></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70">
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                  Servidor
                </p>
                <a
                  href="#comunidade"
                  className="mt-4 inline-block rounded-md border border-primary bg-primary/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-primary/30"
                >
                  Tire duvidas aqui tbm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
