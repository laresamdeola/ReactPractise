import React from "react";
import { createRoot } from "react-dom/client";
import { Poets2 } from "./components/lessons/propsdestructuring";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Poets2 />);
