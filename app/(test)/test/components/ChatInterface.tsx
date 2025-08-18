import React, { useRef, useEffect } from 'react'

interface Message {
    id: number
    sender: string
    text: string
    timestamp: Date
}

interface ChatInterfaceProps {
    isOpen: boolean
    messages: Message[]
    unreadCount: number
    inputMessage: string
    isLoading: boolean
    testStarted: boolean
    testPassed: boolean
    testFailed: boolean
    onToggleChat: () => void
    onSendMessage: () => void
    onInputChange: (value: string) => void
}

export default function ChatInterface({
    isOpen,
    messages,
    unreadCount,
    inputMessage,
    isLoading,
    testStarted,
    testPassed,
    testFailed,
    onToggleChat,
    onSendMessage,
    onInputChange
}: ChatInterfaceProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSendMessage()
        }
    }

    const avatarStyle: React.CSSProperties = {
        position: 'fixed',
        right: '30px',
        bottom: '30px',
        width: '60px',
        height: '60px',
        backgroundImage: 'url(/assets/images/tgb.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        display: testStarted ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1001,
        boxShadow: testStarted && !isOpen ? '0 0 0 0 rgba(255, 215, 0, 0.7)' : '0 4px 12px rgba(0,0,0,0.3)',
        border: '3px solid #ffffff',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        transition: 'transform 0.2s ease',
        animation: testStarted && !isOpen && unreadCount > 0 ? 'pulse 2s infinite, ripple 1.5s infinite' : 'none'
    }

    const unreadBadgeStyle: React.CSSProperties = {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        backgroundColor: '#dc2626',
        color: 'white',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: unreadCount > 0 && !isOpen ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        border: '2px solid white'
    }

    const chatContainerStyle: React.CSSProperties = {
        position: 'fixed',
        right: '20px',
        bottom: isOpen ? '20px' : '-450px',
        width: '400px',
        height: '500px',
        backgroundColor: '#1a1a1a',
        border: '2px solid #c2410c',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        zIndex: 1000,
        boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
        transition: 'bottom 0.3s ease-in-out'
    }

    return (
        <>
            {/* Avatar with unread badge */}
            <div style={avatarStyle} onClick={onToggleChat}>
                <div style={unreadBadgeStyle}>
                    {unreadCount}
                </div>
            </div>

            {/* Chat Interface */}
            <div style={chatContainerStyle}>
                <div style={{
                    padding: '15px',
                    borderBottom: '1px solid #c2410c',
                    backgroundColor: '#c2410c',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '6px 6px 0 0'
                }}>
                    TheGoldenBoyle {testPassed ? '(Automated) 🤖' : ''}
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                    {messages.map(msg => (
                        <div key={msg.id} style={{ marginBottom: '10px' }}>
                            <div style={{
                                color: msg.sender === 'user' ? '#ffffff' : '#c2410c',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}>
                                {msg.sender === 'user' ? 'You' : 'TheGoldenBoyle'}
                            </div>
                            <div style={{ color: '#ffffff', fontSize: '14px' }}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div style={{ color: '#c2410c', fontStyle: 'italic', fontSize: '14px' }}>
                            TheGoldenBoyle is typing...
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div style={{ padding: '10px', borderTop: '1px solid #c2410c' }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => onInputChange(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Tell me what's wrong..."
                            disabled={testPassed || testFailed}
                            style={{
                                flex: 1,
                                padding: '8px',
                                backgroundColor: '#333',
                                border: '1px solid #c2410c',
                                borderRadius: '4px',
                                color: 'white',
                                fontSize: '14px'
                            }}
                        />
                        <button
                            onClick={onSendMessage}
                            disabled={!inputMessage.trim() || isLoading || testPassed || testFailed}
                            style={{
                                padding: '8px 15px',
                                backgroundColor: '#c2410c',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* CSS animations */}
            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
          }
        }
      `}</style>
        </>
    )
}