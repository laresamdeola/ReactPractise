import React from "react";
import { createRoot } from "react-dom/client";
import ControlledInputs from "./components/controlled-inputs/ControlledInputs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ControlledInputs />);
