// script.js

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const animateOnScroll = () => {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("visible");
    }
  }
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Contact Form
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("formResponse").textContent = result.message;
  form.reset();
});
