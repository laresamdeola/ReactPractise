import React from "react";
import { createRoot } from "react-dom/client";
import { SimpleList } from "./components/lessons2/j-simplelist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<SimpleList />);
