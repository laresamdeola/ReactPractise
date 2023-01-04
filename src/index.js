import React from "react";
import { createRoot } from "react-dom/client";
import ModalExample from "./components/customhooks/ModalExample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ModalExample />);
