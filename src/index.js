import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/dataContext";
import createMockServer from "./api/mockServer";
// import reportWebVitals from './reportWebVitals';
createMockServer();
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
