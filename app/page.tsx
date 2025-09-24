"use client"

import BetaSignupForm from "@/components/BetaSignupForm"
import { Terminal, Code, Users, Shield, FileSearch, GitBranch, BarChart } from "lucide-react"

export default function Home() {
    return (
        <div className="bg-x-dark text-x-text">
            {/* Simple Hero Section */}
            <section className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
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
                        Detect &quot;vibe coding&quot; and unprofessional patterns with AI-powered analysis.
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

            {/* Problem Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            The Code We&apos;d Rather Forget
                        </h2>
                        <p className="text-xl text-x-muted max-w-3xl mx-auto leading-relaxed">
                            Every developer has shipped code they&apos;re not proud of. The pressure to deliver, the late-night fixes,
                            the &quot;temporary&quot; solutions that became permanent...
                        </p>
                    </div>

                    {/* Before/After Comparison */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Problem Side */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold transform -rotate-3 z-10">
                                Before NoVibers
                            </div>
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 space-y-6 hover:border-red-500/30 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-red-400 flex items-center">
                                    <span className="text-3xl mr-3">😬</span>
                                    The Complete Giveaways
                                </h3>

                                <div className="space-y-4 flex-1">
                                    <div className="bg-red-500/10 rounded-lg p-4 border-l-4 border-red-500/50">
                                        <h4 className="font-semibold text-red-300 mb-2 text-sm uppercase tracking-wide">File Header</h4>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-red-200 overflow-x-auto">
                                            <code>{`// app/dashboard/page.tsx`}</code>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 rounded-lg p-4 border-l-4 border-red-500/50">
                                        <h4 className="font-semibold text-red-300 mb-2 text-sm uppercase tracking-wide">AI Slop Detection</h4>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-red-200 overflow-x-auto">
                                            <code>{`// import React from 'react'`}</code>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 rounded-lg p-4 border-l-4 border-red-500/50">
                                        <h4 className="font-semibold text-red-300 mb-2 text-sm uppercase tracking-wide">Debug Disasters</h4>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-red-200 overflow-x-auto">
                                            <code>{`console.log("why isn't this working???")`}</code>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 rounded-lg p-4 border-l-4 border-red-500/50">
                                        <h4 className="font-semibold text-red-300 mb-2 text-sm uppercase tracking-wide">Naming Nightmares</h4>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-red-200 overflow-x-auto">
                                            <code>const temp = data.stuff.thing[0]</code>
                                        </div>
                                    </div>

                                    <div className="bg-red-500/10 rounded-lg p-4 border-l-4 border-red-500/50">
                                        <h4 className="font-semibold text-red-300 mb-2 text-sm uppercase tracking-wide">Magic Madness</h4>
                                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-red-200 overflow-x-auto">
                                            <code>if (users.length &gt; 42) {`// why 42?`}</code>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-red-500/20 mt-auto">
                                    <p className="text-red-300 text-sm italic">
                                        &quot;I&apos;ll clean this up later...&quot; - Famous last words
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solution Side */}
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 bg-x-primary text-x-dark px-3 py-1 rounded-full text-sm font-semibold transform rotate-3 z-10">
                                With NoVibers
                            </div>
                            <div className="bg-x-primary/5 border border-x-primary/20 rounded-xl p-8 space-y-6 hover:border-x-primary/30 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-x-primary flex items-center">
                                    <span className="text-3xl mr-3">✨</span>
                                    The Confidence Boost
                                </h3>

                                <div className="space-y-4 flex-1">
                                    <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                                        <h4 className="font-semibold text-x-primary mb-2">Professional Code</h4>
                                        <p className="text-x-muted text-sm">Clean, readable, and maintainable code that your team can actually work with</p>
                                    </div>

                                    <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                                        <h4 className="font-semibold text-x-primary mb-2">Confident Sharing</h4>
                                        <p className="text-x-muted text-sm">No more anxiety when pushing to main or opening pull requests</p>
                                    </div>

                                    <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                                        <h4 className="font-semibold text-x-primary mb-2">Team Respect</h4>
                                        <p className="text-x-muted text-sm">Colleagues notice your attention to detail and code quality</p>
                                    </div>

                                    <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                                        <h4 className="font-semibold text-x-primary mb-2">Career Growth</h4>
                                        <p className="text-x-muted text-sm">Quality code opens doors to senior roles and better opportunities</p>
                                    </div>

                                    <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                                        <h4 className="font-semibold text-x-primary mb-2">HR Recognition</h4>
                                        <p className="text-x-muted text-sm">Stand out immediately when recruiters scan your GitHub repositories</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-x-primary/20 mt-auto">
                                    <p className="text-x-primary text-sm font-medium">
                                        &quot;This code actually makes sense!&quot; - Your future self
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HR Candidate Screening Section */}
            <section className="py-20 px-6 bg-x-primary/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            HR Candidate Screening Revolution
                        </h2>
                        <p className="text-xl text-x-muted max-w-3xl mx-auto leading-relaxed">
                            Send us a list of candidate emails, get detailed GitHub analysis reports back.
                            No more guessing - know exactly who can code professionally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-x-primary/20 rounded-full flex items-center justify-center mx-auto">
                                <FileSearch className="w-10 h-10 text-x-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">Automated Screening</h3>
                            <p className="text-x-muted">
                                Email us candidate GitHub profiles. We analyze their entire repository history automatically.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-x-primary/20 rounded-full flex items-center justify-center mx-auto">
                                <BarChart className="w-10 h-10 text-x-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">Detailed Reports</h3>
                            <p className="text-x-muted">
                                Get comprehensive breakdowns: code quality scores, professionalism ratings, and red flags.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-x-primary/20 rounded-full flex items-center justify-center mx-auto">
                                <GitBranch className="w-10 h-10 text-x-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">GitHub Deep Dive</h3>
                            <p className="text-x-muted">
                                We analyze commit messages, variable naming, code structure, and professional practices.
                            </p>
                        </div>
                    </div>

                    <div className="bg-x-dark/50 border border-x-primary/20 rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">What HR Gets in Each Report</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-x-primary mb-4">Code Quality Metrics</h4>
                                <ul className="space-y-2 text-x-muted">
                                    <li>• Overall professionalism score (1-100)</li>
                                    <li>• Variable naming quality assessment</li>
                                    <li>• Code structure and organization</li>
                                    <li>• Comment quality and appropriateness</li>
                                    <li>• Debug code detection (console.logs, etc.)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-x-primary mb-4">Professional Indicators</h4>
                                <ul className="space-y-2 text-x-muted">
                                    <li>• Commit message quality</li>
                                    <li>• Repository organization</li>
                                    <li>• Documentation presence</li>
                                    <li>• AI-generated code detection</li>
                                    <li>• Industry best practices adherence</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-x-primary font-semibold mb-4">
                                Pay-per-analysis pricing: Know exactly what each screening costs
                            </p>
                            <p className="text-x-muted text-sm">
                                Bulk discounts available. No subscriptions, no surprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Built for Real Developers
                        </h2>
                        <p className="text-xl text-x-muted">
                            Powered by the strongest AI models available, without the subscription trap
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Terminal,
                                title: "AI-Powered Detection",
                                description: "Multiple AI models detect unprofessional patterns, lazy naming, and code smells"
                            },
                            {
                                icon: Code,
                                title: "Multi-Language Support",
                                description: "JavaScript, TypeScript, Python, and more - with transparent pricing per scan"
                            },
                            {
                                icon: Users,
                                title: "GitHub Integration",
                                description: "Scan repositories directly or integrate with your development workflow"
                            },
                            {
                                icon: Shield,
                                title: "Professional Reports",
                                description: "Detailed severity scoring and actionable suggestions for cleaner code"
                            }
                        ].map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div key={index} className="bg-x-dark/50 border border-x-muted/20 p-6 rounded-lg hover:border-x-primary/40 transition-all text-center">
                                    <div className="w-16 h-16 bg-x-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-x-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-x-muted text-sm">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* User Profiles Section */}
            <section className="py-20 px-6 bg-x-primary/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Perfect For Everyone
                        </h2>
                        <p className="text-xl text-x-muted">
                            From solo developers to enterprise HR teams
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "👨‍💻",
                                title: "Individual Developers",
                                description: "Clean up your portfolio before sharing publicly"
                            },
                            {
                                icon: "👥",
                                title: "Team Leads",
                                description: "Enforce standards and streamline code reviews"
                            },
                            {
                                icon: "🏢",
                                title: "HR Managers",
                                description: "Quickly assess candidate code quality at scale"
                            },
                            {
                                icon: "💼",
                                title: "Freelancers",
                                description: "Ensure client deliverables are professional"
                            }
                        ].map((profile, index) => (
                            <div key={index} className="bg-x-dark/30 border border-x-muted/20 p-6 rounded-lg hover:border-x-primary/40 transition-all text-center">
                                <div className="text-4xl mb-4">{profile.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{profile.title}</h3>
                                <p className="text-x-muted text-sm">{profile.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beta Signup Section */}
            <section id="signup" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Join the Beta
                        </h2>
                        <p className="text-xl text-x-muted max-w-2xl mx-auto leading-relaxed">
                            Be among the first to experience AI-powered code quality analysis.
                            Get early access and help shape the future of professional development.
                        </p>
                    </div>

                    <div className="bg-x-primary/5 border border-x-primary/20 rounded-lg p-8 mb-8">
                        <BetaSignupForm />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm text-x-muted text-center">
                        <div>
                            <div className="text-x-primary font-semibold">✨ Early Access</div>
                            <div>Get first dibs on features</div>
                        </div>
                        <div>
                            <div className="text-x-primary font-semibold">💰 Beta Pricing</div>
                            <div>Special rates for early users</div>
                        </div>
                        <div>
                            <div className="text-x-primary font-semibold">🚀 Shape the Product</div>
                            <div>Your feedback drives development</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}