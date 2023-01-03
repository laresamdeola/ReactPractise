import React from "react";
import { createRoot } from "react-dom/client";
import FetchExample from "./components/customhooks/FetchExample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<FetchExample />);
