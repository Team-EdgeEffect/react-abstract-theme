import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./themes.css";

globalStyle("body", { backgroundColor: theme.background.body, color: theme.text.primary });
