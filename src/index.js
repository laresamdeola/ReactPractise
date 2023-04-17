import React from "react";
import { createRoot } from "react-dom/client";
import { PartyInvite } from "./reactbyprojects/Chapter 9/PartyInvite";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<PartyInvite />);
