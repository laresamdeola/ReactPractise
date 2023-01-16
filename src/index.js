import React from "react";
import { createRoot } from "react-dom/client";
import { ArrayExample } from "./components/lessons/usestatearray";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ArrayExample />);
