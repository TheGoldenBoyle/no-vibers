'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'

export default function HeroSection() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [signupNumber, setSignupNumber] = useState<number | null>(null)
    const [showRocket, setShowRocket] = useState(false)

    const handleSubmit = async () => {
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email')
            return
        }

        setIsLoading(true)
        setError('')

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (!response.ok) {
                // Handle duplicate signup gracefully
                if (data.isAlreadySignedUp) {
                    setError(data.error)
                } else {
                    throw new Error(data.error || 'Failed to sign up')
                }
                return
            }

            // Trigger rocket animation
            setShowRocket(true)
            
            // Show success after a short delay
            setTimeout(() => {
                setIsSubmitted(true)
                setSuccessMessage(data.message)
                setSignupNumber(data.signupNumber)
                setEmail('')
                setShowRocket(false) // Hide rocket after animation
            }, 1500)

        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="p-6 h-screen grid place-items-center relative overflow-hidden">
            {/* Rocket Animation */}
            {showRocket && (
                <div className="fixed bottom-4 left-4 text-6xl z-50 animate-rocket">
                    🚀
                </div>
            )}

            <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-8">
                <div className="space-y-4 lg:space-y-8">
                    <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        🚀 Beta Coming Soon
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Prove You're a
                        <span className="text-primary"> Real Developer</span>
                    </h1>

                    <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-2">
                        <p>
                            When AI can't help you, can you debug real-world problems?
                        </p>
                        <p className="lg:mx-10"> Take practical challenges that separate real devs from prompt engineers</p>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div id="heroForm" className="max-w-md mx-auto mb-16">
                    {!isSubmitted ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
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
                        <div className="text-center space-y-3">
                            <div className="flex items-center justify-center space-x-2 text-success">
                                <CheckCircle className="h-6 w-6" aria-hidden="true" />
                                <span className="text-lg font-medium">You're on the list!</span>
                            </div>
                            <p className="text-base text-foreground font-medium">
                                {successMessage}
                            </p>
                            {signupNumber && signupNumber <= 50 && (
                                <p className="text-sm text-primary font-medium">
                                    🎯 Early supporter status unlocked!
                                </p>
                            )}
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {error && (
                        <p className="text-sm text-warning mt-2 text-center">{error}</p>
                    )}
                    
                    {!isSubmitted && (
                        <p className="text-sm text-muted mt-3">
                            First 50 get exclusive beta access • No spam, ever
                        </p>
                    )}
                </div>
            </div>

            {/* CSS for rocket animation */}
            <style jsx>{`
                @keyframes rocket {
                    0% {
                        transform: translate(0, 0) rotate(45deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(calc(100vw - 2rem), calc(-100vh + 2rem)) rotate(45deg);
                        opacity: 0;
                    }
                }
                
                .animate-rocket {
                    animation: rocket 1.5s ease-out forwards;
                }
            `}</style>
        </section>
    )
}