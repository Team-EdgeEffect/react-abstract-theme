const darkColors = {
    primitives: {
        "50": "#EDF5FD",
        "100": "#E3EFFB",
        "200": "#C7DFF7",
        "300": "#97C3F0",
        "400": "#4393E4",
        "500": "#0B6BCB",
        "600": "#185EA5",
        "700": "#12467B",
        "800": "#0A2744",
        "900": "#051423",
    },
    background: {
        body: "rgb(0, 0, 0)",
        surface: "rgb(11, 13, 14)",
        popup: "rgb(0, 0, 0)",
        level1: "rgb(23, 26, 28)",
        level2: "rgb(50, 56, 62)",
        level3: "rgb(85, 94, 104)",
        tooltip: "rgb(85, 94, 104)",
        backdrop: "rgba(50, 56, 62, 0.25)",
    },
    common: {
        white: "rgb(255, 255, 255)",
        black: "rgb(0, 0, 0)",
    },
    text: {
        primary: "rgb(240, 244, 248)",
        secondary: "rgb(205, 215, 225)",
        tertiary: "rgb(159, 166, 173)",
        icon: "rgb(159, 166, 173)",
    },
};

const lightColors = {
    primitives: {
        "50": "#e1f5fe",
        "100": "#b3e5fc",
        "200": "#81d4fa",
        "300": "#4fc3f7",
        "400": "#29b6f6",
        "500": "#03a9f4",
        "600": "#039be5",
        "700": "#0288d1",
        "800": "#0277bd",
        "900": "#01579b",
    },
    background: {
        body: "rgb(255, 255, 255)",
        surface: "rgb(251, 252, 254)",
        popup: "rgb(255, 255, 255)",
        level1: "rgb(240, 244, 248)",
        level2: "rgb(221, 231, 238)",
        level3: "rgb(205, 215, 225)",
        tooltip: "rgb(99, 107, 116)",
        backdrop: "rgba(50, 56, 62, 0.25)",
    },
    common: {
        white: "rgb(255, 255, 255)",
        black: "rgb(0, 0, 0)",
    },
    text: {
        primary: "rgb(23, 26, 28)",
        secondary: "rgb(50, 56, 62)",
        tertiary: "rgb(85, 94, 104)",
        icon: "rgb(99, 107, 116)",
    },
};

export const colors = {
    light: lightColors,
    dark: darkColors,
};
