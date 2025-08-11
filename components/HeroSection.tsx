'use client'

import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function HeroSection() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        if (!email) return

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true)
            setIsLoading(false)
            setEmail('')
        }, 1000)
    }

    return (
        <section className="p-6 h-screen grid place-items-center">
            <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-8">
                <div className="space-y-4 lg:space-y-8">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        🚀 Beta Coming Soon
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Prove Youre a
                        <span className="text-primary"> Real Developer</span>
                    </h1>

                    <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-2">
                        <p>
                            When AI cant help you, can you debug real-world problems?
                        </p>
                        <p className="lg:mx-10"> Take practical challenges that separate real devs from prompt engineers</p>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div className="max-w-md mx-auto mb-16">
                    {!isSubmitted ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                id="heroForm"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-3 bg-card border border-primary-muted rounded-lg text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                aria-label="Email address"
                            />
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading || !email}
                                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Join beta waitlist"
                            >
                                {isLoading ? 'Joining...' : 'Join Beta'}
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center space-x-2 text-success">
                            <CheckCircle className="h-6 w-6" aria-hidden="true" />
                            <span className="text-lg font-medium">Youre on the list! 🎉</span>
                        </div>
                    )}
                    <p className="text-sm text-muted mt-3">
                        First 50 get exclusive beta access • No spam, ever
                    </p>
                </div>
            </div>
        </section>
    )
}