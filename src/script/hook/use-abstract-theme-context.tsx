import React from "react";
import { AbstractThemeContext } from "../context/abstract-theme-context";
import { AbstractThemeContextProviderActions } from "../interface/abstract-theme";

export function useAbstractThemeContext<ThemeValue = any>() {
    const c = React.useContext(AbstractThemeContext) as AbstractThemeContextProviderActions<ThemeValue>;
    if (Object.keys(c || null).length === 0) {
        throw new Error("Abstract ThemeContext is not injected. Use AbstractThemeContextProvider at the top of the component.");
    }
    return c;
}
