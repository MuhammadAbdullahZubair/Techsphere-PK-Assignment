// TechSphere PK - Week 2
// TypeScript source file.
// Compile this file to script.js before opening index.html in the browser.

const themeToggle = document.getElementById("themeToggle") as HTMLButtonElement | null;
const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
const formMessage = document.getElementById("formMessage") as HTMLParagraphElement | null;

let isDarkMode: boolean = true;

function updateThemeButton(): void {
    if (!themeToggle) return;

    themeToggle.textContent = isDarkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
}

function toggleTheme(): void {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("light-mode", !isDarkMode);
    updateThemeButton();

    console.log(`Theme changed: ${isDarkMode ? "Dark" : "Light"} Mode`);
}

function handleContactSubmit(event: SubmitEvent): void {
    event.preventDefault();

    if (!formMessage) return;

    formMessage.textContent =
        "Thank you! Your message has been received (demo form).";

    contactForm?.reset();

    console.log("Contact form submitted successfully.");
}

themeToggle?.addEventListener("click", toggleTheme);
contactForm?.addEventListener("submit", handleContactSubmit);

updateThemeButton();
console.log("TechSphere Week 2 TypeScript loaded successfully.");
