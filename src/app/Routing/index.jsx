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
            errorElement: <PageNotFoundError error />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    errorElement: <PageNotFoundError error />,
                },
                {
                    path: "/cart",
                    element: <CartContainer />,
                    errorElement: <PageNotFoundError error />,
                },
                {
                    path: "/compare",
                    element: <CompareContainer />,
                    errorElement: <PageNotFoundError error />,
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
