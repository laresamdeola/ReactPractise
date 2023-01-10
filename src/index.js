import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample4 from "./components/useReducer/ReduceExample4";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample4 />);
