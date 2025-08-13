"use client"

import React from "react"
import { Trophy, Target, Users, TrendingUp, Globe, BookOpen, Zap, Star } from "lucide-react"
import { scrollToAndFocus } from "@/lib/utils"
import CTASection from "./ui/CTASection"
import { useIntersectionObserver } from "@/lib/useIntersectionObserver"

const benefitsData = [
    {
        icon: Trophy,
        title: "Build Clout",
        description: "Get a verified badge that actually impresses people"
    },
    {
        icon: Target,
        title: "Real Practice",
        description: "Debug actual production issues, not toy problems"
    },
    {
        icon: Users,
        title: "Leaderboards",
        description: "Compete with devs worldwide, flex your real-world skills"
    },
    {
        icon: TrendingUp,
        title: "Increased Visibility",
        description: "Companies find you based on proven skills, not just resume keywords"
    },
    {
        icon: Globe,
        title: "Referring Domains",
        description: "Shareable profile links boost your online presence"
    },
    {
        icon: BookOpen,
        title: "Learn from Experts",
        description: "Get feedback from industry pros whove seen it all"
    },
    {
        icon: Zap,
        title: "Fill the Gaps",
        description: "Turn vibe coding into verified expertise"
    },
    {
        icon: Star,
        title: "Stand Out",
        description: "Be the dev who can actually fix things when they break"
    }
]

interface BenefitCardProps {
    benefit: typeof benefitsData[0]
    index: number
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
    const [ref, isVisible] = useIntersectionObserver()

    return (
        <div
            ref={ref}
            className={`text-center group transform transition-all duration-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
            style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
        >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
            </h3>
            <p className="text-sm text-muted">
                {benefit.description}
            </p>
        </div>
    )
}

export default function WhySignUp() {
    const [headerRef, headerVisible] = useIntersectionObserver()
    const [ctaRef, ctaVisible] = useIntersectionObserver()

    return (
        <section className="px-6 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transform transition-all duration-700 ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Sign Up?
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl mb-4">
                            Let"s be honest, vibe coding is cool... but it"s error prone. Fill in the missing gaps and become unstoppable.
                        </p>
                        <p className="text-lg">
                            AI is great, but putting all the pieces together is the real challenge.
                        </p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
                    {benefitsData.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            benefit={benefit}
                            index={index}
                        />
                    ))}
                </div>

                <div
                    ref={ctaRef}
                    className={`transform transition-all duration-700 ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    style={{ transitionDelay: ctaVisible ? "800ms" : "0ms" }}
                >
                    <CTASection
                        title="Knowing how to prompt and make an app doesnt make you a dev"
                        description="Putting it all together does. The full stack. Join the devs proving they can handle real production challenges."
                        buttonText="Get Notified on Launch!"
                        buttonTitle="Start proving your real developer skills"
                        buttonSize="lg"
                        onClick={() => scrollToAndFocus("heroForm")}
                    />
                </div>
            </div>
        </section>
    )
}