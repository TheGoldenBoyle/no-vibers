"use client"

import { useEffect, useState } from "react"

interface UseScrollTrackingReturn {
	activeSection: number
	scrollProgress: number
	visibleSections: Set<string>
	rocketPosition: { x: number; y: number }
}

export const useScrollTracking = (): UseScrollTrackingReturn => {
	const [activeSection, setActiveSection] = useState(0)
	const [scrollProgress, setScrollProgress] = useState(0)
	const [visibleSections, setVisibleSections] = useState(new Set<string>())
	const [rocketPosition, setRocketPosition] = useState({ x: 50, y: 100 })

	useEffect(() => {
		const sections = [
			"hero",
			"builder",
			"mvp",
			"devs",
			"dangerous",
			"contact",
			"cta",
		]

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisibleSections((prev) =>
							new Set(prev).add(entry.target.id)
						)
					}
				})
			},
			{ threshold: 0.5 }
		)

		const updateScrollProgress = () => {
			const scrollPx = document.documentElement.scrollTop
			const winHeightPx =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight
			const scrolled = scrollPx / winHeightPx
			setScrollProgress(Math.min(scrolled * 100, 100))

			const rocketProgress = Math.min(scrolled, 1)
			const startX = 80,
				startY = 90,
				endX = 25,
				endY = 15

			setRocketPosition({
				x: startX - (startX - endX) * rocketProgress,
				y: startY - (startY - endY) * rocketProgress,
			})

			const sectionHeight = window.innerHeight
			const currentSection = Math.floor(scrollPx / sectionHeight)
			setActiveSection(Math.min(currentSection, sections.length - 1))
		}

		window.addEventListener("scroll", updateScrollProgress, {
			passive: true,
		})
		const sectionElements = document.querySelectorAll("section[id]")
		sectionElements.forEach((section) => observer.observe(section))

		updateScrollProgress()

		return () => {
			window.removeEventListener("scroll", updateScrollProgress)
			observer.disconnect()
		}
	}, [])

	return { activeSection, scrollProgress, visibleSections, rocketPosition }
}
