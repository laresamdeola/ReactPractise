import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld2 } from "./reactbyprojects/Chapter 3/HelloWorld2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<HelloWorld2 />);
