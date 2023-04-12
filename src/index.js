import React from "react";
import { createRoot } from "react-dom/client";
import PetName from "./reactbyprojects/Chapter 6/PetName";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<PetName />);
