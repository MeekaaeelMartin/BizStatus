import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Animation variant */
  variant?: 'up' | 'fade' | 'left' | 'right' | 'scale'
  /** Delay in ms */
  delay?: number
  /** Once visible, stay visible (default true) */
  once?: boolean
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
  style?: CSSProperties
}

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  once = true,
  as: Tag = 'div',
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
