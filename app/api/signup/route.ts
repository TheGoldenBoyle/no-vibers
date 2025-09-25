import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface Signup {
	email: string
	timestamp: string
	number: number
	userAgent?: string
	ip?: string
}

interface SignupsData {
	signups: Signup[]
	count: number
}

// In-memory storage (resets on deployment)
let signupsData: SignupsData = { signups: [], count: 0 }

async function loadSignups(): Promise<SignupsData> {
	return signupsData
}

async function saveSignups(data: SignupsData): Promise<void> {
	signupsData = data
}

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json()

		if (!email || typeof email !== "string") {
			return NextResponse.json(
				{ error: "Email is required" },
				{ status: 400 }
			)
		}
		// JamesDont4getThis123cRAY
		if (!email.includes("@") || email.length < 5) {
			return NextResponse.json(
				{ error: "Please enter a valid email address" },
				{ status: 400 }
			)
		}

		const normalizedEmail = email.toLowerCase().trim()

		const currentSignupsData = await loadSignups()

		const existingSignup = currentSignupsData.signups.find(
			(s) => s.email === normalizedEmail
		)
		if (existingSignup) {
			return NextResponse.json(
				{
					error: `You're already on the list! You were signup #${existingSignup.number}`,
					isAlreadySignedUp: true,
				},
				{ status: 400 }
			)
		}

		const newNumber = currentSignupsData.count + 1
		const newSignup: Signup = {
			email: normalizedEmail,
			timestamp: new Date().toISOString(),
			number: newNumber,
			userAgent: request.headers.get("user-agent") || undefined,
			ip:
				request.headers.get("x-forwarded-for") ||
				request.headers.get("x-real-ip") ||
				undefined,
		}

		currentSignupsData.signups.push(newSignup)
		currentSignupsData.count = newNumber

		await saveSignups(currentSignupsData)

		if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
			try {
				await resend.emails.send({
					from:
						process.env.RESEND_FROM_EMAIL ||
						"NoVibers <onboarding@resend.dev>",
					to: process.env.RESEND_TO_EMAIL,
					subject: `🚀 New NoVibers Beta Signup #${newNumber}!`,
					html: `
            <div style="font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: #ffffff; padding: 20px; border-radius: 12px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="background: rgba(91, 207, 199, 0.2); padding: 12px; border-radius: 12px; display: inline-block; margin-bottom: 16px;">
                  <div style="color: #5bcfc7; font-size: 24px;">🚀</div>
                </div>
                <h1 style="color: #5bcfc7; margin: 0; font-size: 28px; font-weight: 700;">New Beta Signup #${newNumber}!</h1>
              </div>
              
              <div style="background: rgba(91, 207, 199, 0.1); padding: 24px; border-radius: 12px; border: 1px solid rgba(91, 207, 199, 0.2); margin: 24px 0;">
                <h2 style="color: #5bcfc7; margin: 0 0 16px 0; font-size: 18px;">📧 Signup Details</h2>
                <div style="color: #cfcfcf; line-height: 1.6;">
                  <p><strong style="color: #ffffff;">Email:</strong> ${normalizedEmail}</p>
                  <p><strong style="color: #ffffff;">Signup Number:</strong> #${newNumber}</p>
                  <p><strong style="color: #ffffff;">Date:</strong> ${new Date().toLocaleString()}</p>
                  <p><strong style="color: #ffffff;">Total Signups:</strong> ${newNumber}</p>
                </div>
              </div>
              
              ${getMilestoneMessage(newNumber)}
              
              <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; margin: 24px 0;">
                <h3 style="color: #ffffff; margin: 0 0 12px 0; font-size: 16px;">📊 Progress Stats</h3>
                <div style="color: #cfcfcf; font-size: 14px;">
                  <p>• Growth Stage: ${getGrowthStage(newNumber)}</p>
                  <p>• Next Milestone: ${getNextMilestone(newNumber)}</p>
                  <p>• Beta Status: ${
						newNumber >= 100
							? "Ready to Launch! 🎉"
							: "Building Momentum 💪"
					}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #cfcfcf; margin: 0;">Another developer wants cleaner code! 🔥</p>
              </div>
              
              <div style="border-top: 1px solid rgba(91, 207, 199, 0.2); padding-top: 20px; text-align: center;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  NoVibers Beta Signup • <a href="https://novibers.com" style="color: #5bcfc7; text-decoration: none;">novibers.com</a>
                </p>
              </div>
            </div>
          `,
				})
			} catch (emailError) {
				console.error("Failed to send notification email:", emailError)
			}
		}

		const message = generateSuccessMessage(newNumber)

		return NextResponse.json({
			success: true,
			message,
			signupNumber: newNumber,
			isEarlySupporter: newNumber <= 100,
		})
	} catch (error) {
		console.error("Signup error:", error)
		return NextResponse.json(
			{ error: "Something went wrong. Please try again." },
			{ status: 500 }
		)
	}
}

function getMilestoneMessage(number: number): string {
	if (number <= 10) {
		return `<div style="background: #166534; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-weight: bold; color: white; font-size: 16px;">🔥 First 10 signups! You're building momentum!</p>
    </div>`
	} else if (number <= 25) {
		return `<div style="background: #b45309; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-weight: bold; color: white; font-size: 16px;">⚡ ${number} signups! Getting serious traction!</p>
    </div>`
	} else if (number <= 50) {
		return `<div style="background: #c2410c; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-weight: bold; color: white; font-size: 16px;">🎯 ${
			50 - number
		} more to reach your first 50!</p>
    </div>`
	} else if (number === 100) {
		return `<div style="background: #991b1b; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-weight: bold; color: white; font-size: 18px;">🚀 MILESTONE: 100 SIGNUPS! TIME TO LAUNCH! 🚀</p>
    </div>`
	} else {
		return `<div style="background: #075985; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-weight: bold; color: white; font-size: 16px;">💪 ${number} signups and counting! The hype is REAL!</p>
    </div>`
	}
}

function getGrowthStage(number: number): string {
	if (number <= 10) return "Early Adopters 🌱"
	if (number <= 25) return "Building Momentum ⚡"
	if (number <= 50) return "Getting Traction 🚀"
	if (number <= 100) return "Scaling Fast 📈"
	return "Going Viral! 🔥"
}

function getNextMilestone(number: number): string {
	if (number < 50) return `50 signups (${50 - number} to go)`
	if (number < 100) return `100 signups (${100 - number} to go)`
	if (number < 250) return `250 signups (${250 - number} to go)`
	return "You're crushing it! 🎉"
}

function generateSuccessMessage(number: number): string {
	if (number <= 10) {
		return `Welcome to the beta! You're among the first ${number} early supporters! 🌟`
	} else if (number <= 50) {
		return `Thanks for joining! You're #${number} of our first 50 beta testers! 🚀`
	} else if (number <= 100) {
		return `Awesome! You're #${number} on the list. Thanks for the support! 💪`
	} else if (number === 101) {
		return `Wow! You're signup #${number}! We've officially hit 100+ signups! 🎉`
	} else {
		return `Thanks for joining! You're #${number}. The community is growing fast! 🔥`
	}
}
