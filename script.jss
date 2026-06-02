// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been sent successfully.";

    contactForm.reset();
});
