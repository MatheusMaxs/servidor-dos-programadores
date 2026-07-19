export function PartnersSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <h2 className="text-center font-heading text-lg font-medium text-foreground md:text-xl">
        <span className="italic">{'// '}</span>parceiros do servidor
      </h2>
      <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
        <p className="font-heading text-xl font-medium text-foreground md:text-2xl">
          Websec Br <span className="text-sm align-baseline">.org</span>
        </p>
        <p className="flex items-center gap-2 font-heading text-xl font-semibold tracking-wide text-foreground md:text-2xl">
          <svg viewBox="0 0 24 24" className="size-6 text-foreground" fill="currentColor" aria-hidden="true">
            <path d="M4 3h4v7h8V3h4v18h-4v-7H8v7H4V3z" />
          </svg>
          HOSTINGER
        </p>
        <p className="font-heading text-xl font-medium text-foreground md:text-2xl">
          Acelera Dev <span className="text-sm align-baseline">.com.br</span>
        </p>
      </div>
    </section>
  )
}
