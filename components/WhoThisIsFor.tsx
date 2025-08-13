'use client'

import React from 'react'
import { Shield, Building2, GraduationCap, Code2, Heart, LucideIcon } from 'lucide-react'
import { scrollToAndFocus } from '@/lib/utils'
import CTASection from './ui/CTASection'
import { useIntersectionObserver } from '@/lib/useIntersectionObserver'

interface AudienceCardProps {
    icon: LucideIcon
    title: string
    subtitle: string
    features: string[]
    index: number
}

const audienceData = [
    {
        icon: Shield,
        title: "Real Developers",
        subtitle: "Stand out from the AI-prompt crowd",
        features: [
            "Prove debugging skills when ChatGPT fails",
            "Get verified badge for social proof", 
            "Build your personal brand",
            "Show you handle 3am production fires"
        ],
    },
    {
        icon: Building2,
        title: "Companies",
        subtitle: "Cut through the noise in 3 minutes",
        features: [
            "Filter out 99% of prompt engineers",
            "Save time on bad hires",
            "See actual problem-solving skills", 
            "Send test links, get instant clarity"
        ],
    },
    {
        icon: GraduationCap,
        title: "Learning Devs", 
        subtitle: "No shame in learning - level up!",
        features: [
            "Get your NoVibe badge when ready",
            "Personalized feedback on weak areas",
            "Practice real scenarios safely",
            "Track progress as you improve"
        ],
    },
    {
        icon: Code2,
        title: "Everyone Else",
        subtitle: "Test your skills in real scenarios", 
        features: [
            "Can you debug production issues?",
            "No theory - just real problems",
            "3-minute challenges",
            "Perfect for bootcamp grads"
        ],
    }
]

function AudienceCard({ icon: Icon, title, subtitle, features, index }: AudienceCardProps) {
    const [ref, isVisible] = useIntersectionObserver()
    
    return (
        <div 
            ref={ref}
            className={`bg-secondary rounded-xl p-4 border hover:border-primary/80 border-primary-muted transition-all duration-700 shadow-xl group flex flex-col items-center text-center max-w-[80vw] mx-auto w-full transform ${
                isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
            }`}
            style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
            }}
        >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
                {title}
            </h3>
            <p className="dark:text-white text-xl mb-8 font-bold min-h-[50px]">
                {subtitle}
            </p>
            <div className="space-y-2 text-muted mb-6 text-center">
                {features.map((feature, featureIndex) => (
                    <p key={`feature-card-${featureIndex}`}> 
                        {feature}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default function WhoThisIsFor() {
    const [headerRef, headerVisible] = useIntersectionObserver()
    const [ctaRef, ctaVisible] = useIntersectionObserver()

    return (
        <section className="px-6 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transform transition-all duration-700 ${
                        headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Who This Is For
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-muted-foreground mb-4">
                            Nobody likes gatekeepers! I'm happy to help bridge the gap from vibe coders to verified coders.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-primary">
                            <Heart className="h-5 w-5" />
                            <span className="font-medium">Everyone deserves a chance to prove their skills</span>
                        </div>
                    </div>
                </div>

                {/* Audience Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {audienceData.map((audience, index) => (
                        <AudienceCard
                            key={index}
                            icon={audience.icon}
                            title={audience.title}
                            subtitle={audience.subtitle}
                            features={audience.features}
                            index={index}
                        />
                    ))}
                </div>

                <div 
                    ref={ctaRef}
                    className={`transform transition-all duration-700 ${
                        ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: ctaVisible ? '600ms' : '0ms' }}
                >
                    <CTASection
                        title="Ready to prove your real-world dev skills?"
                        description="Whether you're a seasoned pro or just starting out, everyone can benefit from testing their practical development abilities when AI can't help."
                        buttonText="Join the Beta"
                        buttonTitle="Join NoVibes beta program"
                        variant="default"
                        maxWidth="xl"
                        onClick={() => scrollToAndFocus("heroForm")}
                    />
                </div>
            </div>
        </section>
    )
}