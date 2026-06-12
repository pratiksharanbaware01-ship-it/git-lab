// Profile Image Modal

const profileImage = document.getElementById("profileImage");
const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

// Open Modal
if (profileImage) {
    profileImage.addEventListener("click", () => {
        modal.style.display = "block";
        fullImage.src = profileImage.src;
    });
}

// Close Modal Button
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close Modal When Clicking Outside Image
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Welcome Button Alert
const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function () {
        alert("Welcome to my Personal Portfolio Website!");
    });
}

function logout() {
    localStorage.removeItem("loggedIn");
    alert("LOGOUT SUCCESSFULLY!");
    window.location.href = "login.html";
}
