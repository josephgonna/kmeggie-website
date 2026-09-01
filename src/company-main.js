import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { CompanyDetail } from "./components/company-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${CompanyDetail()}
  ${Footer()}
`;