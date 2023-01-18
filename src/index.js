import React from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/lessons/counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Counter />);
