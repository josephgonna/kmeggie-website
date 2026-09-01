import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { ResearchDetail } from "./components/research-detail.js";
import { Footer } from "./components/footer.js";
import { GitCommit } from "lucide";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${ResearchDetail()}

  ${Footer()}
`;