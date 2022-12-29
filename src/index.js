import React from "react";
import { createRoot } from "react-dom/client";
import Objects3 from "../components/Objects3";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Objects3 />);
