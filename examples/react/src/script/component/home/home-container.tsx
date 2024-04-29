import React from "react";
import { HomeContainerStyles } from "./home-container.css";

export const HomeContainer = () => {
    return (
        <>
            <h1>Example of react-abstract-theme</h1>
            <p className={HomeContainerStyles.helloWorldText}>hello world!</p>
        </>
    );
};
