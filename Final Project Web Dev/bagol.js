// Hamburger Menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = ["DEVELOPER","DESIGNER"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Image Modal for Projects
function showImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = img.src;
}

function hideImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Initialize Typewriter Effect on Page Load
window.onload = typeWriter;
