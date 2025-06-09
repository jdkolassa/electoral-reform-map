import type { ImmutableObject } from 'jimu-core';
import type { ThemeSysOptions, ThemeOptions, ColorSchemeMode, ThemeRefOptions, ThemeCompOptions, ColorSchemeOptions, ThemeSourceOptions, RawThemeOptions, ThemeStylesOptions, ThemeVariableCompOptions } from '../../system';
export declare const createColorSchemeOptions: (base: Partial<ColorSchemeOptions>, mixin: Partial<ColorSchemeOptions>, mode?: ColorSchemeMode) => Partial<ColorSchemeOptions>;
export declare const createThemeSrcOptions: (base?: ThemeSourceOptions, mixin?: ImmutableObject<ThemeSourceOptions> | ThemeSourceOptions) => ThemeSourceOptions;
export declare const createThemeRefOptions: (base?: ThemeRefOptions, mixin?: ImmutableObject<ThemeRefOptions> | ThemeRefOptions) => ThemeRefOptions;
export declare const createThemeSysOptions: (base?: ThemeSysOptions, mixin?: ImmutableObject<ThemeSysOptions> | ThemeSysOptions) => ThemeSysOptions;
export declare const createThemeCompOptions: (base: ThemeVariableCompOptions, mixin: ImmutableObject<ThemeVariableCompOptions> | ThemeVariableCompOptions, styles?: ThemeStylesOptions) => ThemeCompOptions;
/**
 * Merge two theme options.
 */
export declare const createThemeOptions: (base: RawThemeOptions, mixin: ImmutableObject<RawThemeOptions> | RawThemeOptions, styles?: ThemeStylesOptions) => ThemeOptions;
