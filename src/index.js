import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./reactbyprojects/Chapter 3/HelloWorld";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HelloWorld />);
