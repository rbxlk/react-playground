import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AddRemoveInsertArray, CounterList, ShapeEditor } from "./ArrayStates";
import BucketList from "./bucketlist";
import ErrorPage from "./error-page";
import Form from "./Form";
import Gallery from "./Gallery";
import TravelPlan from "./TravelPlan";
import "./styles.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "form",
                element: <Form />
            },
            {
                path: "arrays",
                element: <AddRemoveInsertArray />
            },
            {
                path: "counters",
                element: <CounterList />
            },
            {
                path: "shapes",
                element: <ShapeEditor />
            },
            {
                path: "bucketlist",
                element: <BucketList />
            },
            {
                path: "travelplan",
                element: <TravelPlan />
            }
        ]
    },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <RouterProvider router={router}/>
);