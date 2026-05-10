import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
