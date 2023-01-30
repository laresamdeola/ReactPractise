import React from "react";
import { createRoot } from "react-dom/client";
import { MultipleReturnsFetch } from "./components/lessons/multiplereturnsfetchdata";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<MultipleReturnsFetch />);
