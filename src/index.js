import React from "react";
import { createRoot } from "react-dom/client";
import AddListItems from "./components/controlled-inputs/AddListItems";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AddListItems />);
