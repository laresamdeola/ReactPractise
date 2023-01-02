import React from "react";
import { createRoot } from "react-dom/client";
import AddItems2 from "./components/useReducer/AddItems2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AddItems2 />);
