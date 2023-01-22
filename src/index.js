import React from "react";
import { createRoot } from "react-dom/client";
import { EffectBasics2 } from "./components/lessons/useeffectbasics2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<EffectBasics2 />);
