"use client"

import { Terminal, Github } from "lucide-react"
import Link from "next/link"
import { useScrollDirection } from "@/hooks/useScrollDirection"

export default function Navbar() {
    const scrollDirection = useScrollDirection()

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out ${
                scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <nav
                className="px-6 py-4 bg-x-dark/95 backdrop-blur-sm border-b border-x-dark-border"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link
                        href="/"
                        className="group"
                        aria-label="NoVibers - Home page"
                        title="Go to NoVibers homepage"
                    >
                        <div className="flex items-center space-x-3 group-hover:scale-105 transition-all">
                            <div className="bg-x-primary-light p-2 rounded-lg">
                                <Terminal
                                    className="h-6 w-6 text-x-primary"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-x-text">NoVibers</span>
                                <span className="text-xs text-x-primary font-medium -mt-1">AI Code Quality</span>
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center space-x-6">
                        {/* Beta Badge */}
                        <div className="hidden sm:flex bg-x-primary-light px-3 py-1 rounded-full border border-x-primary/20">
                            <span className="text-x-primary text-sm font-semibold">Beta Coming Soon</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://github.com/TheGoldenBoyle/novibers"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View NoVibers on GitHub"
                                title="View source code on GitHub - Opens in new tab"
                                className="group"
                            >
                                <Github
                                    className="size-6 text-x-text-muted group-hover:text-x-primary group-hover:scale-110 transition-all"
                                    aria-hidden="true"
                                    strokeWidth={1.5}
                                />
                            </Link>

                            <Link
                                href="https://x.com/TheGoldenBoyle"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow NoVibers on X (Twitter)"
                                title="Follow us on X (Twitter) - Opens in new tab"
                                className="group"
                            >
                                <svg
                                    className="size-6 fill-x-text-muted group-hover:fill-x-primary group-hover:scale-110 transition-all"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 50 50"
                                    role="img"
                                    aria-label="X (Twitter) logo"
                                >
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}