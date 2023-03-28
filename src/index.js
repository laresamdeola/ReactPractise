import React from "react";
import { createRoot } from "react-dom/client";
import { FetchData } from "./components/lessons2/w-fetchdata";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<FetchData />);
