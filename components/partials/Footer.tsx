"use client"

export default function Footer() {
    const handleScrollToSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const signupSection = document.getElementById('signup')
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
    return (
        <footer className="bg-x-dark border-t border-x-muted/10">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-x-primary/20 p-2 rounded-lg">
                                <svg className="w-6 h-6 text-x-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-x-text">NoVibers</span>
                                <div className="text-xs text-x-primary font-medium">AI Code Quality</div>
                            </div>
                        </div>
                        <p className="text-x-muted max-w-md">
                            Detect "vibe coding" and unprofessional patterns before they embarrass you. 
                            AI-powered code quality analysis for modern developers.
                        </p>
                        <div className="bg-x-primary/10 px-4 py-2 rounded-lg border border-x-primary/20 inline-block">
                            <span className="text-x-primary font-semibold text-sm">🚧 Coming Soon - Beta Access</span>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-x-text font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-x-muted">
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">Features</span></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">Pricing</span></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">GitHub Integration</span></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">CLI Tool</span></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-x-text font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-x-muted">
                            <li><a href="https://x.com/TheGoldenBoyle" target="_blank" rel="noopener noreferrer" className="hover:text-x-primary transition-colors">About</a></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">Blog</span></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">Careers</span></li>
                            <li><span className="hover:text-x-primary cursor-pointer transition-colors">Contact</span></li>
                        </ul>
                    </div>
                </div>

                {/* Beta CTA Section */}
                <div className="bg-x-primary/5 border border-x-primary/20 rounded-xl p-6 mb-8">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-x-text mb-2">Ready to Clean Up Your Code?</h3>
                        <p className="text-x-muted mb-4">Join the beta and be among the first to experience AI-powered code quality analysis.</p>
                        <a 
                            href="#signup" 
                            className="inline-flex items-center bg-x-primary hover:bg-x-primary/90 text-x-dark font-semibold px-6 py-2 rounded-lg transition-all"
                            onClick={handleScrollToSignup}
                        >
                            Get Early Access 🚀
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-x-muted/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-x-muted">
                                © 2025 NoVibers. All rights reserved.
                            </p>
                            <p className="text-xs text-x-muted mt-1">
                                <span className="text-x-primary">Build fast</span> • <span className="text-x-primary">Built to last</span> • <span className="text-x-primary">Code with confidence</span>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://github.com/TheGoldenBoyle/novibers" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-x-muted hover:text-x-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://x.com/TheGoldenBoyle" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-x-muted hover:text-x-primary transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}