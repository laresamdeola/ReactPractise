import React from "react";
import { createRoot } from "react-dom/client";
import { EventBasics } from "./components/lessons2/n-eventbasics";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<EventBasics />);
