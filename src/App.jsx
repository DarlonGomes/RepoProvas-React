import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import RouterNavigator from "./components/RouterNavigator";
import HandlerProvider from "./context/handleProvider";
function App() {
  return(
    <HandlerProvider>
      <CssBaseline />
      <BrowserRouter>
      <RouterNavigator />
      </BrowserRouter>
    </HandlerProvider>
  );
}

export default App;
