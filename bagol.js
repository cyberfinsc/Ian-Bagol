// Hamburger Menu Toggle
function toggleMenu() {
  const navbar = document.querySelector(".dropdown");
  if (navbar.style.transform === "translateY(0px)") {
    navbar.style.transform = "translateY(-500px)"; // Hide
  } else {
    navbar.style.transform = "translateY(0px)"; // Show
  }
}

// Typewriter Effect
const texts = ["DEVELOPER", "DESIGNER"];
let speed = 100; // Typing speed
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
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
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

// Form Submission Handler
function sendMail(event) {
  event.preventDefault(); // Prevent default form submission
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  if (formData.name && formData.email && formData.message) {
    emailjs.send("service_pws5f0q", "template_zcjdyxs", formData)
      .then(() => {
        document.getElementById('notification-message').textContent = 'Message sent successfully!';
        document.getElementById('notification').style.display = 'block';
      })
      .catch(() => {
        document.getElementById('notification-message').textContent = 'Failed to send message. Please try again later.';
        document.getElementById('notification').style.display = 'block';
      });
  } else {
    alert("All fields are required!");
  }
}

// Close Notification
function closeNotification() {
  document.getElementById('notification').style.display = 'none';
}

// Event Listeners
document.getElementById("contactForm").addEventListener("submit", sendMail);
document.querySelector(".hamburg").addEventListener("click", toggleMenu);
document.querySelector(".cancel").addEventListener("click", toggleMenu);

// Initialize Typewriter on Page Load
window.onload = typeWriter;
