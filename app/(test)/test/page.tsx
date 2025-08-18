'use client'

import React, { useState, useEffect } from 'react'
import TestTimer from './components/TestTimer'

import BrokenPage from './components/BrokenPage'
import ChatInterface from '@/app/(test)/test/components/ChatInterface'

interface Message {
  id: number
  sender: string
  text: string
  timestamp: Date
}

export default function ChallengeTestPage() {
  const [timeLeft, setTimeLeft] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [messagesLoaded, setMessagesLoaded] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [lastMessageTime, setLastMessageTime] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [testPassed, setTestPassed] = useState(false)
  const [testFailed, setTestFailed] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [email, setEmail] = useState('')

  // Add broken CSS link to show 404 in Network tab
  useEffect(() => {
    if (testStarted) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/styles/globalls.css' // Intentional typo - will 404
      document.head.appendChild(link)
      
      document.title = 'NoVibers Test - Prove You\'re Not a Vibe'
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
      }
    }
  }, [testStarted])

  // Fixed staggered messages system
  useEffect(() => {
    if (testStarted && !messagesLoaded) {
      console.log('🚀 Starting staggered messages...')
      
      // Message 1 - immediate
      const message1: Message = {
        id: 1,
        sender: 'thegoldenboyle',
        text: "WTF happened to my beautiful site?!",
        timestamp: new Date()
      }
      
      setMessages([message1])
      setUnreadCount(1)
      console.log('📨 Message 1 sent')
      
      // Message 2 - after 2 seconds
      const timer1 = setTimeout(() => {
        const message2: Message = {
          id: 2,
          sender: 'thegoldenboyle',
          text: "This looks like garbage... what did you break, viber?",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, message2])
        setUnreadCount(2)
        console.log('📨 Message 2 sent')
      }, 2000)
      
      // Message 3 - after 4 seconds
      const timer2 = setTimeout(() => {
        const message3: Message = {
          id: 3,
          sender: 'thegoldenboyle',
          text: "Fix it NOW! You have 2 minutes to prove you're not a vibe!",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, message3])
        setUnreadCount(3)
        setLastMessageTime(Date.now())
        setMessagesLoaded(true)
        console.log('📨 Message 3 sent, staggering complete')
      }, 4000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [testStarted, messagesLoaded])

  // Periodic check-ins if user is quiet
  useEffect(() => {
    if (testStarted && messagesLoaded && !testPassed && !testFailed) {
      const checkInterval = setInterval(() => {
        const timeSinceLastMessage = Date.now() - lastMessageTime
        const hasRecentUserMessage = messages.some(msg => 
          msg.sender === 'user' && 
          Date.now() - msg.timestamp.getTime() < 30000
        )
        
        if (timeSinceLastMessage > 30000 && !hasRecentUserMessage) {
          const checkinMessages = [
            `Hello? WTF you doing? ${timeLeft} seconds left!`,
            `Are you even trying? ${timeLeft} seconds left!`,
            `Time's ticking... ${timeLeft} seconds left!`,
            `Still there? ${timeLeft} seconds left!`
          ]
          
          const randomMessage = checkinMessages[Math.floor(Math.random() * checkinMessages.length)]
          
          const checkinMessage: Message = {
            id: messages.length + 1,
            sender: 'thegoldenboyle',
            text: randomMessage,
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, checkinMessage])
          if (!isChatOpen) {
            setUnreadCount(prev => prev + 1)
          }
          setLastMessageTime(Date.now())
        }
      }, 25000)
      
      return () => clearInterval(checkInterval)
    }
  }, [testStarted, messagesLoaded, testPassed, testFailed, lastMessageTime, timeLeft, messages, isChatOpen])


  const handleTestFailure = () => {
    setIsTimerActive(false)
    setTestFailed(true)
    
    const failureMessage: Message = {
      id: messages.length + 1,
      sender: 'thegoldenboyle',
      text: "⏰ TIME'S UP! Come back after a long hard look in the mirror. See you in a week, vibe. 🪞",
      timestamp: new Date()
    }
    setMessages(prev => [...prev, failureMessage])
  }

  useEffect(() => {
    if (isTimerActive && timeLeft > 0 && !testPassed && testStarted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !testPassed && testStarted) {
      handleTestFailure()
    }
  }, [timeLeft, isTimerActive, testPassed, testStarted])


  const handleTestSuccess = () => {
    setIsTimerActive(false)
    setTestPassed(true)
    
    const successMessage: Message = {
      id: messages.length + 1,
      sender: 'thegoldenboyle',
      text: "🔥 BOOM! That's what I'm talking about! You're no vibe - you're a real dev! Welcome to the NoVibers army! 💪",
      timestamp: new Date()
    }
    setMessages(prev => [...prev, successMessage])
    
    setTimeout(() => {
      setShowEmailCapture(true)
    }, 2000)

    setTimeout(() => {
      window.location.href = '/'
    }, 8000)
  }

  const sendMessage = async () => {
    console.log('📤 Sending message:', inputMessage)
    if (!inputMessage.trim() || testPassed || testFailed) return

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    setLastMessageTime(Date.now())
    
    const messageToSend = inputMessage
    setInputMessage('')

    try {
      const response = await fetch('/api/challenge/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend,
          timeLeft: timeLeft 
        })
      })

      const data = await response.json()

      if (data.isCorrect) {
        console.log('✅ Correct answer detected!')
        handleTestSuccess()
      } else {
        console.log('❌ Wrong answer, AI responded:', data.response)
        const aiMessage: Message = {
          id: messages.length + 2,
          sender: 'thegoldenboyle',
          text: data.response,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      }
    } catch (error) {
      console.error('❌ API call failed:', error)
      const fallbackRoasts = [
        "Wrong! Keep trying, vibe.",
        "Nope! Figure it out yourself.",
        "Not even close. Do better.",
        "Try harder! This is basic shit."
      ]
      const randomRoast = fallbackRoasts[Math.floor(Math.random() * fallbackRoasts.length)]
      
      const errorMessage: Message = {
        id: messages.length + 2,
        sender: 'thegoldenboyle',
        text: randomRoast,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }

    setIsLoading(false)
  }

  const startTest = () => {
    console.log('🚀 Starting test...')
    setTestStarted(true)
    setIsTimerActive(true)
  }

  const toggleChat = () => {
    console.log('💬 toggleChat called! Current state:', { 
      isChatOpen, 
      unreadCount, 
      testStarted,
      messagesLength: messages.length 
    })
    setIsChatOpen(prev => {
      console.log('🔄 Setting isChatOpen from', prev, 'to', !prev)
      return !prev
    })
    if (!isChatOpen) {
      console.log('✅ Resetting unread count from', unreadCount, 'to 0')
      setUnreadCount(0)
    }
  }

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) return
    
    try {
      const response = await fetch('/api/challenge/certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        alert('🎉 NoVibers Certificate sent to your email!')
      } else {
        alert('Failed to send certificate. Please try again.')
      }
    } catch (error) {
      console.error('Failed to send certificate:', error)
      alert('Failed to send certificate. Please try again.')
    }
  }

  // Pre-test introduction
  if (!testStarted) {
    return (
      <div style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        color: 'black',
        margin: 0,
        padding: '40px 20px',
        lineHeight: '1.6',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', color: '#c2410c', marginBottom: '30px', fontWeight: 'bold' }}>
            🚨 NoVibers Challenge
          </h1>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #c2410c',
            borderRadius: '12px',
            padding: '40px',
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            <h2 style={{ color: '#c2410c', marginBottom: '20px', fontSize: '24px' }}>
              Heres whats about to happen:
            </h2>
            
            <ul style={{ fontSize: '18px', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '15px' }}>
                <strong>Youll face a common web development issue</strong> that every real developer encounters
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>The page will look broken</strong> - but its intentional
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>TheGoldenBoyle will be there to help</strong> - look for the flashing avatar
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>You have 1 minute</strong> to figure out what went wrong
              </li>
              <li style={{ marginBottom: '15px' }}>
                <strong>Work together</strong> to solve the problem through chat
              </li>
            </ul>
          </div>
          
          <p style={{ fontSize: '20px', marginBottom: '30px', color: '#666' }}>
            Ready to prove youre a real developer?
          </p>
          
          <button
            onClick={startTest}
            style={{
              backgroundColor: '#c2410c',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '20px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Lets Go! 🔥
          </button>
        </div>
      </div>
    )
  }

  // Success state
  if (testPassed) {
    return (
      <div style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        color: 'black',
        minHeight: '100vh'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#c2410c', 
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          🔥 WELCOME TO THE NOVIBERS ARMY! 🔥
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '30px' }}>
          You proved youre a noviber, for now!
        </p>
        
        {showEmailCapture && (
          <div style={{ 
            maxWidth: '400px', 
            margin: '0 auto 30px', 
            padding: '30px', 
            border: '2px solid #c2410c',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#c2410c', marginBottom: '15px', fontSize: '20px' }}>
              Get Your NoVibers Certificate
            </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '15px',
                border: '1px solid #c2410c',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            <button
              onClick={handleEmailSubmit}
              style={{
                width: '100%',
                backgroundColor: '#c2410c',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Send My Certificate 🏆
            </button>
          </div>
        )}

        <p style={{ color: '#666', fontSize: '16px' }}>
          Redirecting you back to the main site in a few seconds...
        </p>

        <ChatInterface
          isOpen={true}
          messages={messages}
          unreadCount={0}
          inputMessage={inputMessage}
          isLoading={isLoading}
          testStarted={testStarted}
          testPassed={testPassed}
          testFailed={testFailed}
          onToggleChat={toggleChat}
          onSendMessage={sendMessage}
          onInputChange={setInputMessage}
        />
      </div>
    )
  }
  
  return (
    <>
      <TestTimer timeLeft={timeLeft} isVisible={testStarted} />
      
      <BrokenPage timeLeft={timeLeft} testFailed={testFailed} />
      
      <ChatInterface
        isOpen={isChatOpen}
        messages={messages}
        unreadCount={unreadCount}
        inputMessage={inputMessage}
        isLoading={isLoading}
        testStarted={testStarted}
        testPassed={testPassed}
        testFailed={testFailed}
        onToggleChat={toggleChat}
        onSendMessage={sendMessage}
        onInputChange={setInputMessage}
      />
    </>
  )
}