import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample3 from "./components/useReducer/ReduceExample3";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample3 />);
