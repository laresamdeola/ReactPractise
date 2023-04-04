import React from "react";
import { createRoot } from "react-dom/client";
import { Patriot } from "./reactbyprojects/Chapter 4/Patriot";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Patriot />);
