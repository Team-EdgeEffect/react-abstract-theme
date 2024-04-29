import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { colors } from "./colors";
import { Theme } from "@edge-effect/react-abstract-theme";

export type ServiceThemeValue = string;
export type ServiceTheme = Theme<ServiceThemeValue>;

export const theme = createThemeContract({
    primitives: {
        "50": null,
        "100": null,
        "200": null,
        "300": null,
        "400": null,
        "500": null,
        "600": null,
        "700": null,
        "800": null,
        "900": null,
    },
    background: {
        body: null,
        surface: null,
        popup: null,
        level1: null,
        level2: null,
        level3: null,
        tooltip: null,
        backdrop: null,
    },
    common: {
        white: null,
        black: null,
    },
    text: {
        primary: null,
        secondary: null,
        tertiary: null,
        icon: null,
    },
});

export const lightTheme: ServiceTheme = {
    name: "light",
    value: createTheme(theme, {
        ...colors.light,
    }),
};

export const darkTheme: ServiceTheme = {
    name: "dark",
    value: createTheme(theme, {
        ...colors.dark,
    }),
};

export const defaultTheme: ServiceTheme = lightTheme;
