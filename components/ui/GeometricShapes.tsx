export const GeometricShapes = () => (
    <div className="fixed inset-0 pointer-events-none z-30">
        <div
            className="absolute inset-0 opacity-5"
            style={{
                background: `
            radial-gradient(circle at 20% 50%, var(--x-primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--x-primary) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, var(--x-primary) 0%, transparent 50%)
          `,
                animation: 'float 20s ease-in-out infinite'
            }}
        />
        <div
            className="absolute inset-0 opacity-3"
            style={{
                background: `
            radial-gradient(circle at 60% 30%, var(--x-primary) 0%, transparent 40%),
            radial-gradient(circle at 30% 70%, var(--x-primary) 0%, transparent 40%)
          `,
                animation: 'float 25s ease-in-out infinite reverse'
            }}
        />

        {/* SVG Shapes */}
        <div className="absolute top-16 left-1/4 w-16 h-16 opacity-10" style={{ animation: 'rotate 45s linear infinite' }}>
            <svg viewBox="0 0 64 64" className="w-full h-full">
                <polygon points="32,8 56,24 56,40 32,56 8,40 8,24" fill="none" stroke="var(--x-primary)" strokeWidth="1" />
                <polygon points="32,16 48,26 48,38 32,48 16,38 16,26" fill="none" stroke="var(--x-primary)" strokeWidth="0.5" />
            </svg>
        </div>

        <div className="absolute bottom-32 right-1/4 w-20 h-20 opacity-8" style={{ animation: 'float-slow 35s ease-in-out infinite' }}>
            <svg viewBox="0 0 80 80" className="w-full h-full">
                <circle cx="40" cy="40" r="35" fill="none" stroke="var(--x-primary)" strokeWidth="1" />
                <circle cx="40" cy="40" r="25" fill="none" stroke="var(--x-primary)" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="var(--x-primary)" strokeWidth="0.3" />
                <line x1="40" y1="5" x2="40" y2="75" stroke="var(--x-primary)" strokeWidth="0.3" />
                <line x1="5" y1="40" x2="75" y2="40" stroke="var(--x-primary)" strokeWidth="0.3" />
            </svg>
        </div>

        <div className="absolute top-1/3 right-16 w-12 h-12 opacity-12" style={{ animation: 'pulse 20s ease-in-out infinite' }}>
            <svg viewBox="0 0 48 48" className="w-full h-full">
                <rect x="12" y="12" width="24" height="24" fill="none" stroke="var(--x-primary)" strokeWidth="1" transform="rotate(45 24 24)" />
                <rect x="18" y="18" width="12" height="12" fill="none" stroke="var(--x-primary)" strokeWidth="0.5" transform="rotate(45 24 24)" />
            </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/5 w-24 h-8 opacity-6" style={{ animation: 'float-slow 30s ease-in-out infinite reverse' }}>
            <svg viewBox="0 0 96 32" className="w-full h-full">
                <path d="M8,16 L24,8 L40,16 L56,8 L72,16 L88,8" fill="none" stroke="var(--x-primary)" strokeWidth="1" />
                <path d="M8,24 L24,16 L40,24 L56,16 L72,24 L88,16" fill="none" stroke="var(--x-primary)" strokeWidth="0.5" />
            </svg>
        </div>
    </div>
);