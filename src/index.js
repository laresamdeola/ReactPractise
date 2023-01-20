import React from "react";
import { createRoot } from "react-dom/client";
import { EffectBasics } from "./components/lessons/useeffectbasics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<EffectBasics />);
