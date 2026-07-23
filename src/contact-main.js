import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { ContactDetail } from "./components/contact-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${ContactDetail()}
  ${Footer()}
`;