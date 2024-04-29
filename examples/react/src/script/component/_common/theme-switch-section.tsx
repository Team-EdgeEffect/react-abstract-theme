import React from "react";
import { useAbstractThemeContext } from "@edge-effect/react-abstract-theme";
import { ServiceThemeValue } from "../../../resource/themes.css";

export const ThemeSwitchSection = () => {
    const { theme, setTheme } = useAbstractThemeContext<ServiceThemeValue>();

    return (
        <>
            <select
                onChange={(event) => {
                    setTheme(event.target.value);
                }}>
                <option value={"light"}>light</option>
                <option value={"dark"}>dark</option>
            </select>
            <span> </span>
            <span>current: {theme.name}</span>
        </>
    );
};
