import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    900: "#121212",
    800: "#1e1e1e",
    700: "#2e2e2e",
  },
  text: {
    900: "#ffffff",
    800: "#e0e0e0",
    700: "#c0c0c0",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "background.900",
        color: "text.900",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
