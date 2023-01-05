import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample1 from "./components/useReducer/ReduceExample1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample1 />);
