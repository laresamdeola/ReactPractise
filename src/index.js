import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample5 from "./components/useReducer/ReduceExample5";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample5 />);
