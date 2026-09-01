import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { SolutionsDetail } from "./components/solutions-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${SolutionsDetail()}
  ${Footer()}
`;