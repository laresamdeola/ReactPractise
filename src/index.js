import React from "react";
import { createRoot } from "react-dom/client";
import { Poets } from "./components/lessons/props2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Poets />);
