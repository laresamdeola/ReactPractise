import React from "react";
import { createRoot } from "react-dom/client";
import { UseEffectBasics } from "./components/lessons2/t-useeffectbasics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<UseEffectBasics />);
