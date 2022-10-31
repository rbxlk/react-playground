import React from "react";
import { createRoot } from "react-dom/client";
import Gallery from "./Gallery";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <div>
        <Gallery/>
    </div>
);