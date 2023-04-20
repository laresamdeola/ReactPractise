import React from "react";
import { createRoot } from "react-dom/client";
import { PropDrilling } from "./reactbyprojects/Chapter 9/PropDrilling";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<PropDrilling />);
