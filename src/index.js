import React from "react";
import { createRoot } from "react-dom/client";
import { Biography } from "./components/lessons2/c-nestedcomponents";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Biography />);
