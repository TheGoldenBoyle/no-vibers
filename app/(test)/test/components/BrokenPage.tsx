import React from 'react'

interface BrokenPageProps {
    timeLeft: number
    testFailed: boolean
}

export default function BrokenPage({ timeLeft, testFailed }: BrokenPageProps) {
    return (
        <div style={{
            fontFamily: 'Times, serif',
            backgroundColor: 'white',
            color: 'black',
            margin: 0,
            padding: '20px',
            lineHeight: '1.4'
        }}>
     
            <header>
                <nav>
                    <div>
                        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                            <span>⚡ NoVibers</span>
                        </a>
                        <div style={{ marginTop: '10px' }}>
                            <a href="https://github.com/TheGoldenBoyle" style={{ color: 'blue', textDecoration: 'underline', marginRight: '15px' }}>
                                GitHub
                            </a>
                            <a href="https://x.com/TheGoldenBoyle" style={{ color: 'blue', textDecoration: 'underline' }}>
                                X (Twitter)
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main broken content */}
            <main style={{ marginTop: '30px' }}>
                <section>
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '20px 0' }}>
                            When Full-Stack Meets AI
                        </h1>
                        <p>Real-world experience fused with AI firepower</p>
                        <p>Recruiting fearless trend setters for the revolution...</p>
                        <span style={{ fontWeight: 'bold' }}>No Vibers</span>
                        <br />
                    </div>
                </section>

                <section style={{ marginTop: '40px' }}>
                    <div>
                        <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '20px 0' }}>
                            The NoVibers Test
                        </h1>
                        <p>Prove youre not a prompstitute</p>
                        <p>Real devs only. Vibers need not apply.</p>

                        <div>
                            <div>
                                <span>⏰</span>
                                <h3>60 Seconds</h3>
                                <p>Thats all you get. Real devs are fast.</p>
                            </div>

                            <div>
                                <span>⚡</span>
                                <h3>Real Skills</h3>
                                <p>No Stack Overflow. No ChatGPT. Just you.</p>
                            </div>

                            <div>
                                <span>🏆</span>
                                <h3>NoVibers Badge</h3>
                                <p>Join the army of real developers.</p>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontWeight: 'bold', margin: '15px 0' }}>The Rules</h2>
                            <div>
                                <p>⚠️ Youll face a broken webpage. Find whats wrong and tell TheGoldenBoyle.</p>
                                <p>⚠️ {timeLeft} seconds on the clock. When it hits zero, youre out.</p>
                                <p>⚠️ No external help. No AI assistants. Just your real dev skills.</p>
                                <p>⚠️ Fail and youre locked out for a week. No second chances.</p>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontWeight: 'bold', margin: '15px 0' }}>What Were Testing</h2>
                            <p>✅ Real debugging skills - Can you spot obvious issues?</p>
                            <p>✅ Developer instincts - Do you know where to look?</p>
                            <p>✅ Speed under pressure - Real devs work fast</p>
                            <p>❌ Not your prompting skills - AI cant help you here</p>
                        </div>

                        <p style={{ margin: '20px 0', fontSize: '14px' }}>
                            Created by @TheGoldenBoyle to separate the builders from the vibes
                        </p>
                    </div>
                </section>
            </main>

            <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
                <div>
                    <p style={{ margin: '5px 0' }}>© 2025 NoVibers. All rights reserved.</p>
                    <span>Build fast • Built to last</span>
                </div>
            </footer>

            <div style={{
                marginTop: '40px',
                padding: '20px',
                border: '3px solid red',
                backgroundColor: '#ffe6e6',
                borderRadius: '8px'
            }}>
                <h2 style={{ color: 'red', margin: '0 0 15px 0' }}>🚨 SOMETHING IS CLEARLY WRONG HERE 🚨</h2>
                <p>
                    <strong>This website should looked BEAUTIFUL, wtf happened!</strong>
                </p>
                <p>
                    <strong>What do you think went wrong? Tell TheGoldenBoyle in the chat! ⬇️</strong>
                </p>
            </div>

            {testFailed && (
                <div style={{
                    backgroundColor: '#dc2626',
                    color: 'white',
                    padding: '20px',
                    marginTop: '20px',
                    border: '2px solid #991b1b',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ margin: '0 0 10px 0' }}>TEST FAILED ❌</h2>
                    <p style={{ margin: '0' }}>Youre a vibe, not a dev. Come back in a week after youve learned the basics.</p>
                </div>
            )}
        </div>
    )
}