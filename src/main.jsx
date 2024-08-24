import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/common.css";
import { Provider } from "react-redux";
import { store } from "./redux/config/configStore.js";
// import {  persistor } from "./redux/config/configStore.js";
// import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
