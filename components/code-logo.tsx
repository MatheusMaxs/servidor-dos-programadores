import { cn } from '@/lib/utils'

export function CodeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      aria-hidden="true"
      className={cn('h-8 w-auto', className)}
    >
      <path
        d="M18 4L4 20L18 36"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path
        d="M46 4L60 20L46 36"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path d="M38 2L30 38" stroke="currentColor" strokeWidth="7" />
    </svg>
  )
}
