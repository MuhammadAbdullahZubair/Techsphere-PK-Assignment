// Compiled JavaScript output from script.ts

const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

let isDarkMode = true;

function updateThemeButton() {
    if (!themeToggle) return;

    themeToggle.textContent = isDarkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("light-mode", !isDarkMode);
    updateThemeButton();

    console.log(`Theme changed: ${isDarkMode ? "Dark" : "Light"} Mode`);
}

function handleContactSubmit(event) {
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
