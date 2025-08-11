import React from 'react'
import Link from 'next/link'

interface LinkButtonProps {
    variant?: 'main' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
    ariaLabel?: string
    title?: string
    href: string
    external?: boolean
    target?: string
    rel?: string
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
    ({
        variant = 'main',
        size = 'md',
        children,
        className = '',
        ariaLabel,
        title,
        href,
        external = false,
        target,
        rel,
        ...props
    }, ref) => {

        const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline'

        const variants = {
            main: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50',
            secondary: 'bg-secondary text-secondary-foreground border border-primary-muted hover:bg-secondary/80 focus:ring-secondary/50',
            ghost: 'text-foreground hover:bg-muted/20 focus:ring-muted/50'
        }

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-3 text-lg'
        }

        const linkClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

        // Determine if external link
        const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

        // Auto-set attributes for external links
        const linkProps = {
            ...props,
            ref,
            className: linkClasses,
            'aria-label': ariaLabel,
            title: title || (typeof children === 'string' ? children : undefined),
            ...(isExternal && {
                target: target || '_blank',
                rel: rel || 'noopener noreferrer'
            })
        }

        // Use Next.js Link for internal links, regular <a> for external
        if (isExternal) {
            return (
                <a href={href} {...linkProps}>
                    {children}
                </a>
            )
        }

        return (
            <Link href={href} {...linkProps}>
                {children}
            </Link>
        )
    }
)

LinkButton.displayName = 'LinkButton'

export default LinkButton