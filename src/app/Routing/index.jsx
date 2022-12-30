import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PublicLayout from "app/layouts/PublicLayout";
import PageNotFoundError from "app/portals/404NotFound";
import Home from "app/portals/Home";
import CartContainer from "app/portals/Cart";
import CompareContainer from "app/portals/Compare";

const Routing = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout />,
            errorElement: <PageNotFoundError />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/cart",
                    element: <CartContainer />,
                },
                {
                    path: "/compare",
                    element: <CompareContainer />,
                },
                {
                    path: "*",
                    element: <PageNotFoundError />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routing;
