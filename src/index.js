import React from "react";
import { createRoot } from "react-dom/client";
import { HoverCSS } from "./reactbyprojects/Chapter 2/HoverCSS";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HoverCSS />);
