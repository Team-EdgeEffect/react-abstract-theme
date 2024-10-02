export interface Theme<T> {
    name: string;
    value: T;
}

export interface AbstractThemeContextProviderProps<ThemeValue> {
    themes: Array<Theme<ThemeValue>>;
    defaultTheme: Theme<ThemeValue>;
    onThemeSelect: (before: Theme<ThemeValue> | null, selected: Theme<ThemeValue>) => void;
    children?: React.ReactNode;
}

export interface AbstractThemeContextProviderActions<ThemeValue> {
    theme: Theme<ThemeValue>;
    setTheme: (theme: string) => Theme<ThemeValue>;
}
