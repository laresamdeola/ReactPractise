import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld3 } from "./reactbyprojects/Chapter 3/HelloWorld3";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HelloWorld3 />);
