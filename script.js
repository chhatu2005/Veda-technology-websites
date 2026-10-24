document.addEventListener("DOMContentLoaded", () => {
    //  Mobile navigation menu
    const menuBtn = document.getElementById("menuBtn")
    const navLinks = document.getElementById("navLinks")

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("is-open")

            menuBtn.setAttribute("aria-expanded", String(isOpen))
            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            )
            menuBtn.textContent = isOpen ? "✕" : "☰"
        })

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("is-open")
                menuBtn.setAttribute("aria-expanded", "false")
                menuBtn.setAttribute("aria-label", "Open navigation")
                menuBtn.textContent = "☰"
            })
        })

        // Close menu with Escape key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                navLinks.classList.remove("is-open")
                menuBtn.setAttribute("aria-expanded", "false")
                menuBtn.setAttribute("aria-label", "Open navigation")
                menuBtn.textContent = "☰"
            }
        })
    }

    //  Automatically update footer year
    const yearElement = document.getElementById("year")

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear()
    }

    // Contact form
    const contactForm = document.getElementById("contactForm")
    const formMessage = document.getElementById("formMessage")

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = contactForm.elements["name"].value.trim()
            const email = contactForm.elements["email"].value.trim()
            const message = contactForm.elements["message"].value.trim()

            if (!name || !email || !message) {
                formMessage.textContent = "Please fill in all fields."
                return
            }

            formMessage.textContent = "Form validated successfully. Connect a backend to send your message."

            // Clear form fields
            contactForm.reset()
        })
    }

    // 4. Newsletter form
    const newsletterForm = document.getElementById("newsletterForm")
    const newsletterMessage = document.getElementById("newsletterMessage")

    if (newsletterForm && newsletterMessage) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault()

            const emailInput = document.getElementById("newsletterEmail")

            if (!emailInput || !emailInput.value.trim()) {
                newsletterMessage.textContent = "Please enter your email address."
                return
            }

            newsletterMessage.textContent = "Email validated. Connect a backend to complete your subscription."

            newsletterForm.reset()
        })
    }
})
