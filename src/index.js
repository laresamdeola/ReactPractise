import React from "react";
import { createRoot } from "react-dom/client";
import { RefExample2 } from "./components/lessons/useref2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RefExample2 />);
