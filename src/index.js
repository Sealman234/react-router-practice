import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // To activate React Router

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
