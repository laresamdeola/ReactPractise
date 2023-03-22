import React from "react";
import { createRoot } from "react-dom/client";
import { PropsChildren } from "./components/lessons2/i-propschildren";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<PropsChildren />);
