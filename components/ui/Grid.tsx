interface GridProps {
    children: React.ReactNode
    cols?: {
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
    gap?: number
    className?: string
}

export default function Grid({
    children,
    cols = { md: 2, lg: 4 },
    gap = 4,
    className = ""
}: GridProps) {

    const gridClasses = `
      grid 
      ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
      ${cols.md ? `md:grid-cols-${cols.md}` : ''}
      ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
      ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}
      gap-${gap}
      ${className}
    `

    return <div className={gridClasses}>{children}</div>
}