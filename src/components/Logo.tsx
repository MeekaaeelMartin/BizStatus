type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const bizColor = variant === 'light' ? '#FFFFFF' : '#1B2A4A'
  const suffixColor = variant === 'light' ? '#94A3B8' : '#94A3B8'

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center" aria-hidden>
        <span className="absolute inset-0 rounded-full bg-brand-green/30" />
        <span className="relative h-2 w-2 rounded-full bg-brand-green" />
      </span>
      <span className="text-[0.95rem] font-bold tracking-tight leading-none sm:text-[1.05rem]">
        <span style={{ color: bizColor }}>Biz</span>
        <span className="text-brand-blue">Status</span>
        <span className="ml-0.5 text-[0.78em] font-medium" style={{ color: suffixColor }}>
          .co.za
        </span>
      </span>
    </div>
  )
}
