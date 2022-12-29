import React from "react";
import { createRoot } from "react-dom/client";
import DataFetch1 from "./components/useEffect/DataFetch1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<DataFetch1 />);
