import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample6 from "./components/useReducer/ReduceExample6";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample6 />);
