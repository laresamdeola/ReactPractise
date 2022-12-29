import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Counter />);
