import React from 'react'

interface AnimatedSectionProps {
    id: string
    activeSection: number
    sectionIndex: number
    isVisible: boolean
    children: React.ReactNode
    className?: string
}

export const AnimatedSection = ({
    id,
    isVisible,
    children,
    className = ""
}: AnimatedSectionProps) => {
    return (
        <section
            id={id}
            className={`h-screen max-w-screen flex items-center justify-center px-6 lg:px-32 text-center relative z-40 ${className}`}
            style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
        >
            <div className={`max-w-4xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {children}
            </div>
        </section>
    )
}