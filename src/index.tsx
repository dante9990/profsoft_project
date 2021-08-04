import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { CertificateWrapper } from "./Context/certificateWrapper";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CertificateWrapper>
        <App />
      </CertificateWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
