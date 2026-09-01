import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { ContactDetail } from "./components/contact-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${ContactDetail()}
  ${Footer()}
`;

const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#contact-status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    name: document.querySelector("#contact-name").value,
    email: document.querySelector("#contact-email").value,
    message: document.querySelector("#contact-message").value,
  };

  statusEl.textContent = "Sending...";

  try {
    const response = await fetch("https://kmeggie-backend-1.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.text();
    statusEl.textContent = result;
    form.reset();
  } catch (err) {
    statusEl.textContent = "Something went wrong. Please try again or email us directly.";
  }
});