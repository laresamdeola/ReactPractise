import React from "react";
import { createRoot } from "react-dom/client";
import { UseStateObject } from "./components/lessons2/q-usestateobject";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<UseStateObject />);
