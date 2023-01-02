import React from "react";
import { createRoot } from "react-dom/client";
import FavoritePoets3 from "./components/useReducer/FavoritePoets3";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<FavoritePoets3 />);
