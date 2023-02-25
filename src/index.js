import React from "react";
import { createRoot } from "react-dom/client";
import { ReactRouter } from "./lessons/reactrouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReactRouter />);
