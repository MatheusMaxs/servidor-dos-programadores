import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
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

      <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-card">
        <div className="grid gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:px-14 md:py-16">
          {/* Coluna esquerda */}
          <div className="flex flex-col">
            <h3 className="font-heading text-3xl font-medium leading-snug text-foreground text-balance md:text-4xl">
              Estamos Aqui Para Conectar & Ajudar Você
            </h3>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tem alguma duvida? Tem alguma melhoria em mente para o servidor? Nosso time está
              pronto para te ajudar.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
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

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                  Follow us
                </p>
                <div className="mt-4 flex items-center gap-3 text-foreground">
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

          {/* Formulário */}
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
        </div>
      </div>
    </section>
  )
}
