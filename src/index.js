import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./reactbyprojects/Chapter 8/HomePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HomePage />);
