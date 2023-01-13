import React from "react";
import { createRoot } from "react-dom/client";
import { CssExternal } from "./components/lessons/CssExternal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<CssExternal />);
