import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { BlogDetail } from "./components/blog-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${BlogDetail()}
  ${Footer()}
`;