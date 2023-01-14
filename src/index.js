import React from "react";
import { createRoot } from "react-dom/client";
import { Children } from "./components/lessons/propschildren";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Children />);
