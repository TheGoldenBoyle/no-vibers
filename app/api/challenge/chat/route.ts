import { NextRequest, NextResponse } from "next/server"

const CORRECT_ANSWERS = [
	"css",
	"stylesheet",
	"missing css",
	"css file",
	"styles",
	"styling",
	"css missing",
	"no css",
	"css not loading",
	"css 404",
	"css error",
	"globalls.css",
	"globals.css",
	"typo in css",
	"css filename",
	"css link",
	"stylesheet missing",
	"styles missing",
	"css broken",
	"styling broken",
]

// Passive-aggressive responses from TheGoldenBoyle
const ROAST_RESPONSES = [
	"Wrong! Look harder, vibe.",
	"Nope! What controls how a website looks?",
	"Not even close. Think like a real dev!",
	"Try harder! This is basic web development.",
	"Wrong answer. What makes sites beautiful vs ugly?",
	"Are you serious? Check the fundamentals!",
	"Come on, use your brain! What's missing here?",
	"Hint: What makes my site look pretty normally?",
	"Think about what controls styling and appearance...",
	"You're missing something obvious. Keep looking!",
	"Wrong direction. Focus on what makes websites look good.",
	"Nah, that's not it. Open your developer tools!",
	"Getting warmer but still wrong. What loads styles?",
	"Not quite. What file type controls appearance?",
	"Think simpler. What's obviously broken here, viber?",
]

function checkAnswer(message: string): boolean {
	const cleanMessage = message.toLowerCase().trim()
	return CORRECT_ANSWERS.some((answer) => cleanMessage.includes(answer))
}

function getRandomRoast(): string {
	return ROAST_RESPONSES[Math.floor(Math.random() * ROAST_RESPONSES.length)]
}

export async function POST(request: NextRequest) {
	try {
		const { message, timeLeft } = await request.json()

		if (!message || typeof message !== "string") {
			return NextResponse.json({
				response: "Say something! Clock's ticking...",
				isCorrect: false,
			})
		}

		// Check if the answer is correct
		const isCorrect = checkAnswer(message)

		if (isCorrect) {
			return NextResponse.json({
				response:
					"🔥 BOOM! That's what I'm talking about! You found the CSS issue!",
				isCorrect: true,
			})
		}

		// Return a roast if wrong
		const roastResponse = getRandomRoast()
		const timeResponse =
			timeLeft < 30 ? ` Only ${timeLeft} seconds left!` : ""

		return NextResponse.json({
			response: roastResponse + timeResponse,
			isCorrect: false,
		})
	} catch (error) {
		console.error("Chat API error:", error)
		return NextResponse.json(
			{
				response: "Something broke on my end. Keep trying!",
				isCorrect: false,
			},
			{ status: 500 }
		)
	}
}
