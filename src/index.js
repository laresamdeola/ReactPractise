import React from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./reactbyprojects/Chapter 11/Proptypes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Products />);
