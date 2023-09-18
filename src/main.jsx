import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductsContextWrapper from "./context/productsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContextWrapper>
    <App />
  </ProductsContextWrapper>
);
