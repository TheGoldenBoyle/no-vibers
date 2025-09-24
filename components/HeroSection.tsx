"use client"

export default function SimpleHero() {
    return (
        <section className="h-screen w-screen flex items-center justify-center bg-x-dark text-x-text relative overflow-hidden">
            {/* Background Grid */}
            <div 
                className="fixed inset-0 z-5 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(91, 207, 199, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(91, 207, 199, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />
            
            {/* Hero Content */}
            <div className="text-center space-y-8 px-6 max-w-4xl mx-auto z-10 relative">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-x-primary">NoVibers</span>
                    <span className="block text-x-text">AI Code Quality</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-x-muted max-w-3xl mx-auto leading-relaxed">
                    Detect "vibe coding" and unprofessional patterns with AI-powered analysis. 
                    From individual scans to complete GitHub candidate assessments.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                    <a
                        href="#signup"
                        className="bg-x-primary hover:bg-x-primary/90 text-x-dark font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Join Beta - Pay Per Scan
                    </a>
                    <div className="bg-x-primary/10 px-6 py-3 rounded-full border border-x-primary/20">
                        <span className="text-x-primary font-semibold">No Subscriptions • Strongest AI Models</span>
                    </div>
                </div>
            </div>
        </section>
    )
}