import "./styles/style.css";

import { Navbar } from "./components/navbar.js";
import { PricingDetail } from "./components/pricing-detail.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${PricingDetail()}
  ${Footer()}
`;