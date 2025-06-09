import { React, type IMThemeVariables } from 'jimu-core';
/**
 * Previously, `emotion` was directly exported from `jimu-core`.
 * In order to divide the modules more reasonably, chose to deprecated the emotion-related interfaces in `jimu-core` and export them from the `jimu-theme` module.
 * Only one `emotion` is allowed at runtime, so the emotion-related methods are first imported from `jimu-core` to this file, and then exported uniformly.
 */
/**
 * It can be useful to customize emotion’s options - i.e. to add custom Stylis plugins,
 * customize prefix of inserted class names, render style tags into specific element and more.
 */
export declare const CacheProvider: React.Provider<import("@emotion/utils").EmotionCache>;
/**
 * A react context holds the theme context.
 */
export declare const ThemeContext: React.Context<object>;
/**
 * `styled` is a way to create React components that have styles attached to them.
 */
export declare const styled: import("@emotion/styled").CreateStyled;
/**
 * Sometimes you might want to insert global css like resets or font faces.
 * You can use the Global component to do this.
 */
export declare const Global: typeof import("@emotion/react").Global;
export interface ThemeProviderProps {
    theme: IMThemeVariables | ((outerTheme: IMThemeVariables) => IMThemeVariables);
    children: React.ReactNode;
}
/**
 * A React component that passes the theme object down the component tree via context.
 */
export declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
