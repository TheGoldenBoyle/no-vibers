import React from 'react'

interface TestTimerProps {
    timeLeft: number
    isVisible: boolean
}

export default function TestTimer({ timeLeft, isVisible }: TestTimerProps) {
    if (!isVisible) return null

    const timerStyle: React.CSSProperties = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: timeLeft <= 10 ? '#dc2626' : '#c2410c',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        zIndex: 1000,
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        animation: timeLeft <= 10 ? 'pulse 1s infinite' : 'none'
    }

    return (
        <div style={timerStyle}>
            {timeLeft}s
        </div>
    )
}