import React from "react";
import { createRoot } from "react-dom/client";
import { ObjectExample } from "./components/lessons/usestateobject";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ObjectExample />);
