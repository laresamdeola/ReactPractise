import React from "react";
import { createRoot } from "react-dom/client";
import { SimpleCounter } from "./components/lessons2/s-simplecounter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<SimpleCounter />);
