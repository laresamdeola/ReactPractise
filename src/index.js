import React from "react";
import { createRoot } from "react-dom/client";
import { ReactRouter2 } from "./lessons/reactrouter2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReactRouter2 />);
