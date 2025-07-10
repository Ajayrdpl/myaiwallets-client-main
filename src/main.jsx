import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "./index.css";
import App from "./App.jsx";
import SsStore from "./redux/SsStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={SsStore}>
    <App />
  </Provider>
);
