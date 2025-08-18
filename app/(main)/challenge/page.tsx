'use client'

import React from 'react'
import LinkButton from '../../../components/ui/LinkButton'
import { Terminal, Clock, Zap, Trophy, AlertTriangle } from 'lucide-react'

export default function ChallengePage() {
    return (
        <section className="p-6 min-h-screen grid place-items-center relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">

                {/* Hero Header */}
                <div className="space-y-6">
                    <div className="flex justify-center mb-6">
                        <Terminal className="h-16 w-16 text-primary" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        The NoVibers
                        <span className="text-primary"> Test</span>
                    </h1>

                    <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-2">
                        <p>Prove you're not a prompstitute</p>
                        <p className="text-muted">Real devs only. Vibers need not apply.</p>
                    </div>
                </div>

                {/* Challenge Stats */}
                <div className="grid md:grid-cols-3 gap-6 my-12">
                    <div className="bg-secondary p-6 rounded-xl border border-primary-muted">
                        <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">60 Seconds</h3>
                        <p className="text-muted">That's all you get. Real devs are fast.</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-xl border border-primary-muted">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">Real Skills</h3>
                        <p className="text-muted">No Stack Overflow. No ChatGPT. Just you.</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-xl border border-primary-muted">
                        <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-lg mb-2">NoVibers Badge</h3>
                        <p className="text-muted">Join the army of real developers.</p>
                    </div>
                </div>

                {/* Rules Section */}
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-primary">The Rules</h2>
                    <div className="space-y-4 text-left">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p>You'll face a broken webpage. Find what's wrong and tell TheGoldenBoyle.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p>60 seconds on the clock. When it hits zero, you're out.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p>No external help. No AI assistants. Just your real dev skills.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p>Fail and you're locked out for a week. No second chances.</p>
                        </div>
                    </div>
                </div>

                {/* What You're Testing */}
                <div className="bg-secondary rounded-xl p-8 border border-primary-muted max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-primary">What We're Testing</h2>
                    <div className="text-left space-y-3">
                        <p>✅ <strong>Real debugging skills</strong> - Can you spot obvious issues?</p>
                        <p>✅ <strong>Developer instincts</strong> - Do you know where to look?</p>
                        <p>✅ <strong>Speed under pressure</strong> - Real devs work fast</p>
                        <p>❌ <strong>Not your prompting skills</strong> - AI can't help you here</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="text-lg text-muted">
                            Ready to prove you're not just another prompt engineer?
                        </p>
                        <p className="text-primary font-semibold">
                            Real devs figure this out in seconds. Vibers take days.
                        </p>
                    </div>

                    <LinkButton
                        href="/test"
                        className="mx-auto text-lg px-8 py-4"
                        size="lg"
                    >
                        Start the Test 🔥
                    </LinkButton>

                    <p className="text-sm text-muted">
                        By starting, you agree you're not using any AI assistance
                    </p>
                </div>

                {/* Creator Note */}
                <div className="border-t border-primary-muted pt-8 mt-12">
                    <p className="text-muted text-sm">
                        Created by <span className="text-primary font-semibold">@TheGoldenBoyle</span> to separate the builders from the vibes
                    </p>
                </div>
            </div>
        </section>
    )
}