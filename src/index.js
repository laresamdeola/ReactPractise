import React from "react";
import { createRoot } from "react-dom/client";
import { EventBasics } from "./components/lessons/eventbasics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<EventBasics />);
