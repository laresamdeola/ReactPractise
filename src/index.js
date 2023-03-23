import React from "react";
import { createRoot } from "react-dom/client";
import { ProperList } from "./components/lessons2/k-properlist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ProperList />);
