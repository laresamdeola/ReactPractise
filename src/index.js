import React from "react";
import { createRoot } from "react-dom/client";
import { MultipleState } from "./components/lessons/usestatemultiplestatevalues";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<MultipleState />);
