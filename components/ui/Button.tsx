import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'main' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
    ariaLabel?: string
    title?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        variant = 'main',
        size = 'md',
        children,
        className = '',
        ariaLabel,
        title,
        ...props
    }, ref) => {

        const baseClasses = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0 cursor-pointer transition-all'

        const variants = {
            main: 'bg-primary text-white dark:text-black hover:bg-primary/90 focus:ring-primary/50',
            secondary: 'bg-secondary border border-primary hover:bg-primary/80 hover:text-black focus:ring-secondary/50',
            ghost: 'text-primary hover:bg-muted/20 focus:ring-muted/50'
        }

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-3 text-lg'
        }

        const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

        return (
            <button
                ref={ref}
                className={buttonClasses}
                aria-label={ariaLabel}
                title={title || (typeof children === 'string' ? children : undefined)}
                role="button"
                {...props}
            >
                {children}
            </button>
        )
    }
)

// ❌ <ForwardRef(Anonymous)>  // Without displayName
// ✅ <Button>                 // With displayName
Button.displayName = 'Button'

export default Button