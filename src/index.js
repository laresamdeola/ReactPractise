import React from "react";
import { createRoot } from "react-dom/client";
import { Affection } from "./components/lessons/usestatebasics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Affection />);
