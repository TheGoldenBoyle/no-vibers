import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { promises as fs } from "fs"
import path from "path"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple file-based storage for MVP
const SIGNUPS_FILE = path.join(process.cwd(), "data", "signups.json")

interface Signup {
	email: string
	timestamp: string
	number: number
}

interface SignupsData {
	signups: Signup[]
	count: number
}

async function ensureDataDirectory() {
	const dataDir = path.join(process.cwd(), "data")
	try {
		await fs.access(dataDir)
	} catch {
		await fs.mkdir(dataDir, { recursive: true })
	}
}

async function getSignups(): Promise<SignupsData> {
	try {
		await ensureDataDirectory()
		const data = await fs.readFile(SIGNUPS_FILE, "utf8")
		return JSON.parse(data)
	} catch {
		return { signups: [], count: 0 }
	}
}

async function saveSignups(data: SignupsData): Promise<void> {
	await ensureDataDirectory()
	await fs.writeFile(SIGNUPS_FILE, JSON.stringify(data, null, 2))
}

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json()

		if (!email || !email.includes("@") || email.length < 5) {
			return NextResponse.json(
				{ error: "Valid email required" },
				{ status: 400 }
			)
		}

		const normalizedEmail = email.toLowerCase().trim()

		const signupsData = await getSignups()

		const existingSignup = signupsData.signups.find(
			(signup) => signup.email === normalizedEmail
		)

		if (existingSignup) {
			return NextResponse.json(
				{
					error: `You're already on the list! (You were #${existingSignup.number})`,
					isAlreadySignedUp: true,
				},
				{ status: 400 }
			)
		}

		const newNumber = signupsData.count + 1
		const newSignup: Signup = {
			email: normalizedEmail,
			timestamp: new Date().toISOString(),
			number: newNumber,
		}

		signupsData.signups.push(newSignup)
		signupsData.count = newNumber

		await saveSignups(signupsData)

		const { data, error } = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
			to: process.env.RESEND_TO_EMAIL || "thegoldenboyle@gmail.com",
			subject: `🚀 New NoVibes Signup #${newNumber}! (${newNumber}/∞)`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c2410c;">New Beta Signup #${newNumber}! 🎉</h2>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${normalizedEmail}</p>
            <p><strong>Signup #:</strong> ${newNumber}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Total Signups:</strong> ${newNumber}</p>
          </div>
          
          ${
				newNumber <= 10
					? `<div style="background: #166534; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">🔥 First 10 signups! You're building momentum!</p>
            </div>`
					: newNumber <= 25
					? `<div style="background: #b45309; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">⚡ ${newNumber} signups! Getting traction!</p>
            </div>`
					: newNumber <= 50
					? `<div style="background: #c2410c; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">🎯 ${
					50 - newNumber
				} more to reach your first 50!</p>
            </div>`
					: newNumber === 100
					? `<div style="background: #991b1b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">🚀 MILESTONE: 100 SIGNUPS! Time to launch! 🚀</p>
            </div>`
					: `<div style="background: #075985; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">💪 ${newNumber} signups and counting! The hype is real!</p>
            </div>`
			}
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📊 Quick Stats:</h3>
            <ul style="color: #6b7280; margin: 0;">
              <li>Signup Rate: ${
					newNumber <= 1
						? "Just getting started!"
						: `${newNumber} total`
				}</li>
              <li>Growth: ${
					newNumber <= 10
						? "Early adopters"
						: newNumber <= 50
						? "Building momentum"
						: "Going viral!"
				}</li>
              <li>Next Milestone: ${
					newNumber < 50
						? `50 signups (${50 - newNumber} to go)`
						: newNumber < 100
						? `100 signups (${100 - newNumber} to go)`
						: "You did it! 🎉"
				}</li>
            </ul>
          </div>
          
          <p style="color: #666;">
            Another developer wants to prove their real skills! Keep building! 🔥
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #fed7aa;">
          <p style="color: #999; font-size: 12px;">
            NoVibes Beta Signup Notification • <a href="https://novibers.com" style="color: #c2410c;">novibers.com</a>
          </p>
        </div>
      `,
		})

		let message = `Thanks for signing up! You're #${newNumber} on the list. 🎉`

		if (newNumber <= 50) {
			message = `Thanks for the early support! You're #${newNumber} of the first 50. 🚀`
		} else if (newNumber === 100) {
			message = `Wow! You're signup #${newNumber}! Thanks for the amazing support! 🔥`
		} else if (newNumber > 100) {
			message = `Thanks for joining! You're #${newNumber}. The hype is real! 💪`
		}

		return NextResponse.json({
			success: true,
			message,
			signupNumber: newNumber,
			isEarlySupporter: newNumber <= 50,
		})
	} catch (error) {
		console.error("Signup error:", error)
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		)
	}
}
