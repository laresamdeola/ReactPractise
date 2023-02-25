import React from "react";
import { createRoot } from "react-dom/client";
import { ReactRouter } from "./lessons/reactrouter";
import { ReduceExample4 } from "./components/lessons/reduceexample4";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReactRouter />);
root.render(<ReduceExample4 />);
