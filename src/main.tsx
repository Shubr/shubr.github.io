
// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import './index.css';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import React from 'react';


// createRoot(document.getElementById("root")!).render(
//   // <StrictMode>
//       <App />
//   // </StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
);