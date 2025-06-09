import { type ImmutableObject, type ThemeVariables, type IMThemeVariables } from 'jimu-core';
/**
 * Identify if a given string is a theme color path(e.g. sys.color.primary.main)
 */
export declare const isColorPath: (path: string) => boolean;
/**
 * Get value from a theme color variable for classic themes.
 * @param path - Path to the theme variable. There are two types of paths:
 * One is the path separated by dots,(e.g primary.200), the other is CSS variable(var(--primary-100))
 * @param variables - Target theme variables object used to get value from.
 */
export declare const getThemeColorVariableValue: (input: string, theme: ImmutableObject<Partial<ThemeVariables>>) => string;
/**
 * Get value from a path to a theme color variable for classic themes.
 * @param input - Path to the theme variable. There are two types of paths:
 * One is the path separated by dots,(e.g primary.200), the other is CSS variable(var(--primary-100))
 * @param theme - Target theme variables object used to get value from.
 */
export declare const getThemeColorValue: (input: string, theme: ImmutableObject<Partial<ThemeVariables>>) => string;
/**
 * Receive a CSS variable and return its path in the theme as an array.
 * @param cssVar
 */
export declare const parseCssVarToThemePaths: (cssVar: string) => string[];
export declare const parseCssVariables: (variable: string, theme: IMThemeVariables) => string;
export declare const parseColorPath: (path: string, theme: IMThemeVariables) => string;
export declare const parseThemeCssVariableOrPath: (input: string, theme: IMThemeVariables) => string;
export declare const isNewThemeVariableOrPath: (input: string) => boolean;
/**
 * Get value from a path to a theme color variable.
 * @param input - Path to the theme variable. There are two types of paths:
 * One is the path separated by dots,(e.g primary.200. sys.color.primary.main), the other is CSS variable(var(--primary-100), var(--ref-palette-primary-100))
 * @param theme - Target theme variables object used to get value from.
 * Note: Only support color related variables now.
 */
export declare const parseThemeVariable: (input: string, theme: IMThemeVariables) => string;
/**
 * Used to fade a color by passing a hex value or theme CSS variable color along with an alpha value.
 */
export declare const rgba: (input: string, alpha: number, theme?: IMThemeVariables) => any;
/**
 * Get the theme color value for brand and function color names.
 * @param input
 */
export declare function getThemeColorNameColor(input: string, theme: IMThemeVariables): any;
/**
 * Convert a string format color to esri symbol color
 * @param value [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 * @param theme
 * @returns string color
 */
export declare const convertJsAPISymbolColorToStringColor: (value: [number, number, number, number]) => string;
/**
 * Convert a string format color to esri symbol color
 * @param value string color
 * @param theme
 * @returns [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 */
export declare const convertStringColorToJsAPISymbolColor: (value: string | number[], theme: IMThemeVariables) => [number, number, number, number];
