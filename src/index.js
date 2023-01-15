import React from "react";
import { createRoot } from "react-dom/client";
import { KeyAndSpread } from "./components/lessons/keypropandspreadoperator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<KeyAndSpread />);
