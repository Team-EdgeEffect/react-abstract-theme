import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeElementList from "../route/routes";
import { AbstractThemeContextProvider } from "@edge-effect/react-abstract-theme";
import { darkTheme, lightTheme } from "../../resource/themes.css";
import { ThemeSwitchSection } from "./_common/theme-switch-section";
import "../../resource/global-styles.css";

function App() {
    return (
        <AbstractThemeContextProvider
            themes={[lightTheme, darkTheme]}
            defaultTheme={lightTheme}
            onThemeSelect={(before, selected) => {
                document.body.classList.add(selected.value);
                if (before !== null) {
                    document.body.classList.remove(before.value);
                }
            }}>
            <BrowserRouter>
                <ThemeSwitchSection />
                <Routes>
                    {routeElementList.map((routeElement) => {
                        return <Route key={routeElement.path} path={routeElement.path} element={routeElement.element} />;
                    })}
                </Routes>
            </BrowserRouter>
        </AbstractThemeContextProvider>
    );
}

export default App;
