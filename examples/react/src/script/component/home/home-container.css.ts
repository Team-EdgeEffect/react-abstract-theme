import { style } from "@vanilla-extract/css";
import { theme } from "../../../resource/themes.css";

export const HomeContainerStyles = {
    helloWorldText: style({
        color: theme.text.secondary,
    }),
};
