import React from "react";
import { createRoot } from "react-dom/client";
import { ForexGuy } from "./reactbyprojects/Chapter 7/ForexGuy";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ForexGuy />);
