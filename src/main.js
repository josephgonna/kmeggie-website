import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { Institutions } from "./components/institutions.js";
import { Platform, platformModules } from "./components/platform.js";
import { Research } from "./components/research.js";
import { Why } from "./components/why.js";
import { Solutions } from "./components/solutions.js";
import { Features } from "./components/features.js";
import { Security } from "./components/security.js";
import { Workflow } from "./components/workflow.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";

// Render the entire homepage
document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${Institutions()}
  ${Platform()}
  ${Research()}
  ${Why()}
  ${Solutions()}
  ${Features()}
  ${Security()}
  ${Workflow()}
  ${Contact()}
  ${Footer()}
`;

// ===========================
// PLATFORM MODULE SWITCHING
// ===========================

document.querySelectorAll(".module-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".module-item").forEach((el) =>
      el.classList.remove("active")
    );
    item.classList.add("active");

    const data = platformModules[item.dataset.module];

    const labelEl = document.getElementById("preview-label");
    const bodyEl = document.getElementById("preview-body");

    if (!data || !labelEl || !bodyEl) return;

    labelEl.textContent = data.label;

    const rowsHtml = data.rows
      .map(
        ([label, value, cls]) => `
        <div class="preview-row">
          <span>${label}</span>
          <strong class="${cls || ""}">${value}</strong>
        </div>
      `
      )
      .join("");

    bodyEl.innerHTML = `
      ${rowsHtml}
      <div class="preview-bar">
        <div class="preview-bar-fill" style="width:${data.progress}%"></div>
      </div>
      <span class="preview-caption">${data.caption}</span>
    `;
  });
});