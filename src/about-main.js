import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { AboutDetail } from "./components/about-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${AboutDetail()}
  ${Footer()}
`;