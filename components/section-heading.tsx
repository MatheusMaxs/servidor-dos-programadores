export function SectionHeading({
  id,
  title,
  description,
}: {
  id?: string
  title: string
  description: React.ReactNode
}) {
  return (
    <div
      id={id}
      className="flex scroll-mt-24 flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12"
    >
      <h2 className="font-heading text-5xl font-light uppercase leading-tight tracking-tight text-foreground text-balance md:text-7xl lg:text-8xl">
        <span className="italic">{'// '}</span>
        {title}
      </h2>
      <p className="max-w-64 shrink-0 text-sm leading-relaxed text-muted-foreground md:pt-3 md:text-right">
        {description}
      </p>
    </div>
  )
}
