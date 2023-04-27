import React from "react";
import { createRoot } from "react-dom/client";
import { CryptoKing } from "./reactbyprojects/Chapter 10/CryptoKing";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<CryptoKing />);
