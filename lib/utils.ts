export const scrollToAndFocus = (elementId: string) => {
	const element = document.getElementById(elementId)
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "center",
		})

		setTimeout(() => {
			element.focus()
		}, 500)
	}
}
