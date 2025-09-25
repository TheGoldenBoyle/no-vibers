"use client"

import { useState } from "react"
import Button from "./ui/Button"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

interface SignupResponse {
    success?: boolean
    error?: string
    message?: string
    signupNumber?: number
    isEarlySupporter?: boolean
    isAlreadySignedUp?: boolean
}

export default function BetaSignupForm() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<SignupResponse | null>(null)

    const handleSubmit = async (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault()

        if (!email || !email.includes("@")) {
            setResponse({ error: "Please enter a valid email address" })
            return
        }

        setIsLoading(true)
        setResponse(null)

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            const data: SignupResponse = await res.json()
            setResponse(data)

            if (data.success) {
                setEmail("")
            }
        } catch (error) {
            setResponse({ error: "Something went wrong. Please try again." })
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="space-y-4">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-x-text-muted w-5 h-5" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for beta access"
                        className="w-full pl-10 pr-4 py-3 bg-x-dark-elevated border border-x-dark-border rounded-lg focus:outline-none focus:border-x-primary focus:ring-2 focus:ring-x-primary-light text-x-text placeholder-x-text-muted"
                        disabled={isLoading}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e)
                            }
                        }}
                    />
                </div>

                <Button
                    onClick={handleSubmit}
                    className="w-full bg-x-primary hover:bg-x-primary-hover text-x-dark font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || !email}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-x-dark/30 border-t-x-dark rounded-full animate-spin"></div>
                            <span>Joining Beta...</span>
                        </div>
                    ) : (
                        "Get Early Access"
                    )}
                </Button>
            </div>

            {/* Response Messages */}
            {response && (
                <div className="mt-4 animate-in fade-in duration-300">
                    {response.success ? (
                        <div className="bg-x-success-light border border-x-success/20 rounded-lg p-4 text-center">
                            <CheckCircle className="w-6 h-6 text-x-success mx-auto mb-2" />
                            <p className="text-x-success font-semibold mb-1">
                                Welcome to the beta!
                            </p>
                            <p className="text-x-text-secondary text-sm">
                                {response.message}
                            </p>
                            {response.isEarlySupporter && (
                                <div className="mt-3 bg-x-primary-light border border-x-primary/20 rounded-md p-2">
                                    <span className="text-x-primary text-sm font-medium">
                                        Early Supporter Badge Unlocked!
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="bg-x-error-light border border-x-error/20 rounded-lg p-4 text-center">
                            <AlertCircle className="w-6 h-6 text-x-error mx-auto mb-2" />
                            <p className="text-x-error font-semibold mb-1">
                                {response.isAlreadySignedUp ? "Already on the list!" : "Oops!"}
                            </p>
                            <p className="text-x-text-secondary text-sm">
                                {response.error}
                            </p>
                            {response.isAlreadySignedUp && (
                                <div className="mt-2 text-x-primary text-sm">
                                    Thanks for your enthusiasm!
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-x-text-muted">
                    <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>No spam</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Early access</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Beta pricing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}