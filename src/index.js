import React from "react";
import { createRoot } from "react-dom/client";
import { ShowAndHide } from "./components/lessons/showorhidecomponents";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ShowAndHide />);
