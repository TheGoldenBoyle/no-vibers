import { Terminal, Github } from "lucide-react"
import Link from "next/link"

export default function Navbar() {

    return (
        <header className="sticky top-0">

            <nav 
                className="px-6 py-4 bg-gradient-to-tr from-background/80 via-secondary/80 to-primary/80"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link 
                        href="/"  
                        className="group"
                        aria-label="NoVibes - Home page"
                        title="Go to NoVibes homepage"
                    >
                        <div className="flex items-center space-x-2 group-hover:scale-105 transition-all">
                            <Terminal 
                                className="h-8 w-8 text-primary" 
                                aria-hidden="true"
                            />
                            <span className="text-2xl font-bold">NoVibers</span>
                        </div>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link 
                            href="https://github.com/TheGoldenBoyle"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View NoVibes on GitHub"
                            title="View source code on GitHub - Opens in new tab"
                            className="group"
                        >
                            <Github 
                                className="size-6 lg:size-10 text-foreground group-hover:scale-125 group-focus:scale-125 transition-all" 
                                aria-hidden="true"
                                strokeWidth={1}
                            />
                        </Link>

                        <Link 
                            href="https://x.com/TheGoldenBoyle"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow NoVibes on X (Twitter)"
                            title="Follow us on X (Twitter) - Opens in new tab"
                            className="group"
                        >
                            <svg 
                                className="size-6 lg:size-10 fill-foreground group-hover:scale-125 group-focus:scale-125 transition-all" 
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
            </nav>
             
        </header>
    )
}