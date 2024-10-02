import React from "react";
import { AbstractThemeContext } from "../context/abstract-theme-context";
import { AbstractThemeContextProviderActions } from "../interface/abstract-theme-interfaces";

export function useAbstractThemeContext<ThemeValue = any>(): AbstractThemeContextProviderActions<ThemeValue> {
    const c = React.useContext(AbstractThemeContext);
    return c;
}
