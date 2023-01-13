import React from "react";
import { createRoot } from "react-dom/client";
import { Components } from "./components/lessons/components";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Components />);
