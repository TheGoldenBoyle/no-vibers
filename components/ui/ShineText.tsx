interface ShineTextProps {
    children: React.ReactNode
    className?: string
}

export const ShineText = ({ children, className = "" }: ShineTextProps) => (
    <div className={`relative overflow-hidden ${className}`}>
        <div className="transition-all duration-700 text-x-text">
            {children}
        </div>
    </div>
)