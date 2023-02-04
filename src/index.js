import React from "react";
import { createRoot } from "react-dom/client";
import { RefExample1 } from "./components/lessons/useref";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RefExample1 />);
