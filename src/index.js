import React from "react";
import { createRoot } from "react-dom/client";
import { Biography } from "./reactbyprojects/Chapter 1/ProfilePage2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Biography />);
