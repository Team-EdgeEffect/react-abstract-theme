import React from "react";
import { PathRouteProps } from "react-router-dom";
import { HomeContainer } from "../component/home/home-container";

interface RouteElement extends PathRouteProps {}

export default new Array<RouteElement>({
    path: "/",
    element: <HomeContainer />,
});
