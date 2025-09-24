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
            <div className="max-w-7xl mx-auto px-6 py-2">
                {/* Main Footer Content */}
             
                
                        <div className="bg-x-primary/10 px-4 py-2 rounded-lg border border-x-primary/20 flex justify-center">
                            <span className="text-x-primary font-semibold text-sm !max-w-sm">🚧 Coming Soon - Beta Access</span>
                        </div>
          

                {/* Bottom Section */}
                <div className="border-t border-x-muted/10 pt-8">
                    <div className="text-center">
                        <p className="text-sm text-x-muted">
                            © 2025 NoVibers. All rights reserved.
                        </p>
                        <p className="text-xs text-x-muted mt-1">
                            <span className="text-x-primary">Build fast</span> • <span className="text-x-primary">Built to last</span> • <span className="text-x-primary">Code with confidence</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}