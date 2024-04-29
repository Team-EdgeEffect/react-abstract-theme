"use client";

import React, { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { AbstractThemeContextProviderActions, AbstractThemeContextProviderProps, Theme } from "../interface/abstract-theme";

export const AbstractThemeContext = React.createContext<AbstractThemeContextProviderActions<any>>({} as AbstractThemeContextProviderActions<any>);

export function AbstractThemeContextProvider<ThemeValue>(props: AbstractThemeContextProviderProps<ThemeValue>): JSX.Element {
    const [themeName, setThemeName] = useState<string>(props.defaultTheme.name);

    useEffect(() => {
        props.onThemeSelect(null, props.defaultTheme);
    }, []);

    const findThemeByName = useCallback(
        (themeName: string) => {
            return props.themes.find((theme) => {
                return theme.name === themeName;
            });
        },
        [props.themes]
    );

    const _setTheme = useCallback(
        (_themeName: string): Theme<ThemeValue> => {
            const currentTheme = findThemeByName(themeName)!;
            let newTheme = findThemeByName(_themeName) ?? props.defaultTheme;
            if (!newTheme) {
                newTheme = props.defaultTheme;
            }

            if (currentTheme.name === _themeName) {
                return currentTheme;
            } else {
                props.onThemeSelect(currentTheme, newTheme);
                setThemeName(newTheme.name);

                return newTheme;
            }
        },
        [findThemeByName, themeName, props.onThemeSelect, setThemeName]
    );

    const actions = useMemo<AbstractThemeContextProviderActions<ThemeValue>>(() => {
        return {
            theme: findThemeByName(themeName) ?? props.defaultTheme,
            setTheme: _setTheme,
        };
    }, [findThemeByName, themeName, props.defaultTheme, _setTheme]);

    return <AbstractThemeContext.Provider value={actions}>{props.children}</AbstractThemeContext.Provider>;
}
