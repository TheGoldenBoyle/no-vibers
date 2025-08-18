'use client'

import React from 'react'
import LinkButton from './ui/LinkButton'

export default function HeroSection() {
    return (
        <section className="p-6 h-screen md:h-[90h] grid place-items-center relative">
            <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        When Full-Stack
                        <span className="text-primary"> Meets AI</span>
                    </h1>
                    <div className="text-xl md:text-2xl max-w-3xl mx-auto space-y-2">
                        <p >Real-world experience fused with AI firepower</p>
                    </div>
                </div>
                <div className="max-w-md mx-auto mb-16 flex flex-col gap-4">
                    <p className="text-lg">
                        Recruiting fearless trend setters for the revolution... 
                    </p>
                    <span className="text-primary"> No Vibers</span>
                    <LinkButton
                        href="https://x.com/thegoldenboyle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto"
                    >
                        Join the army @thegoldenbolye
                    </LinkButton>
                </div>
            </div>
        </section>
    )
}