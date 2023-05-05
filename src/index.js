import React from "react";
import { createRoot } from "react-dom/client";
import { Ede } from "./reactbyprojects/Chapter 11/Ede";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Ede />);
