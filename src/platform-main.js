import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { PlatformDetail } from "./components/platform-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${PlatformDetail()}
  ${Footer()}
`;