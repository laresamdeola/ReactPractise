import React from "react";
import { createRoot } from "react-dom/client";
import ReduceExample2 from "./components/useReducer/ReduceExample2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ReduceExample2 />);
