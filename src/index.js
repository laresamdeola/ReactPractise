import React from "react";
import { createRoot } from "react-dom/client";
import { SpreadOperator } from "./components/lessons2/m-spreadoperator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<SpreadOperator />);
