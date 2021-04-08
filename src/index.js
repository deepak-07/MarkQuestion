import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/dataContext";
import createMockServer from "./api/mockServer";
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
createMockServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
