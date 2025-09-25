export default function BeforeAfterComparison() {
    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem Side */}
            <div className="relative">
                <div className="absolute -top-4 -left-4 bg-x-error text-x-text px-3 py-1 rounded-full text-sm font-semibold transform -rotate-3 z-10">
                    Before NoVibers
                </div>
                <div className="bg-x-error-light border border-x-error/20 rounded-xl p-8 space-y-6 hover:border-x-error/30 transition-all h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-x-error flex items-center">
                        The Complete Giveaways
                    </h3>

                    <div className="space-y-4 flex-1">
                        <div className="bg-x-error/10 rounded-lg p-4 border-l-4 border-x-error/50">
                            <h4 className="font-semibold text-x-error mb-2 text-sm uppercase tracking-wide">File Header</h4>
                            <div className="bg-x-dark-elevated rounded p-3 font-mono text-sm text-x-error overflow-x-auto">
                                <code>{`// app/dashboard/page.tsx`}</code>
                            </div>
                        </div>

                        <div className="bg-x-error/10 rounded-lg p-4 border-l-4 border-x-error/50">
                            <h4 className="font-semibold text-x-error mb-2 text-sm uppercase tracking-wide">AI Slop Detection</h4>
                            <div className="bg-x-dark-elevated rounded p-3 font-mono text-sm text-x-error overflow-x-auto">
                                <code>{`// import React from 'react'`}</code>
                            </div>
                        </div>

                        <div className="bg-x-error/10 rounded-lg p-4 border-l-4 border-x-error/50">
                            <h4 className="font-semibold text-x-error mb-2 text-sm uppercase tracking-wide">Debug Disasters</h4>
                            <div className="bg-x-dark-elevated rounded p-3 font-mono text-sm text-x-error overflow-x-auto">
                                <code>{`console.log("why isn't this working???")`}</code>
                            </div>
                        </div>

                        <div className="bg-x-error/10 rounded-lg p-4 border-l-4 border-x-error/50">
                            <h4 className="font-semibold text-x-error mb-2 text-sm uppercase tracking-wide">Naming Nightmares</h4>
                            <div className="bg-x-dark-elevated rounded p-3 font-mono text-sm text-x-error overflow-x-auto">
                                <code>const temp = data.stuff.thing[0]</code>
                            </div>
                        </div>

                        <div className="bg-x-error/10 rounded-lg p-4 border-l-4 border-x-error/50">
                            <h4 className="font-semibold text-x-error mb-2 text-sm uppercase tracking-wide">Magic Madness</h4>
                            <div className="bg-x-dark-elevated rounded p-3 font-mono text-sm text-x-error overflow-x-auto">
                                <code>if (users.length &gt; 42) {`// why 42?`}</code>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-x-error/20 mt-auto">
                        <p className="text-x-error text-sm italic">
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
                <div className="bg-x-primary-light border border-x-primary/20 rounded-xl p-8 space-y-6 hover:border-x-primary/30 transition-all h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-x-primary flex items-center">
                        The Confidence Boost
                    </h3>

                    <div className="space-y-4 flex-1">
                        <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                            <h4 className="font-semibold text-x-primary mb-2">Professional Code</h4>
                            <p className="text-x-text-secondary text-sm">Clean, readable, and maintainable code that your team can actually work with</p>
                        </div>

                        <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                            <h4 className="font-semibold text-x-primary mb-2">Confident Sharing</h4>
                            <p className="text-x-text-secondary text-sm">No more anxiety when pushing to main or opening pull requests</p>
                        </div>

                        <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                            <h4 className="font-semibold text-x-primary mb-2">Team Respect</h4>
                            <p className="text-x-text-secondary text-sm">Colleagues notice your attention to detail and code quality</p>
                        </div>

                        <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                            <h4 className="font-semibold text-x-primary mb-2">Career Growth</h4>
                            <p className="text-x-text-secondary text-sm">Quality code opens doors to senior roles and better opportunities</p>
                        </div>

                        <div className="bg-x-primary/10 rounded-lg p-4 border-l-4 border-x-primary/50">
                            <h4 className="font-semibold text-x-primary mb-2">HR Recognition</h4>
                            <p className="text-x-text-secondary text-sm">Stand out immediately when recruiters scan your GitHub repositories</p>
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
    )
}