import { TonalPalette } from '@material/material-color-utilities';
export type SourceKeyColors = 'primary' | 'secondary' | 'neutral' | 'error' | 'warning' | 'info' | 'success';
export type SourceCustomColors = 'custom1' | 'custom2' | 'custom3' | 'custom4' | 'custom5';
export type SourceColors = SourceKeyColors | SourceCustomColors;
export declare const SourceKeyColorNames: SourceKeyColors[];
export declare const SourceCustomColorNames: SourceCustomColors[];
export declare const SourceColorNames: SourceColors[];
export declare const DefaultThemeSourceOptions: ThemeCoreSourceOptions;
export interface ThemeSourceOption {
    color: string;
    harmonize?: boolean;
}
export interface ThemeCoreSourceOptions {
    primary: ThemeSourceOption;
    secondary?: ThemeSourceOption;
    neutral?: ThemeSourceOption;
    error?: ThemeSourceOption;
    warning?: ThemeSourceOption;
    info?: ThemeSourceOption;
    success?: ThemeSourceOption;
    custom1?: ThemeSourceOption;
    custom2?: ThemeSourceOption;
    custom3?: ThemeSourceOption;
    custom4?: ThemeSourceOption;
    custom5?: ThemeSourceOption;
}
interface CoreTonalPalette {
    primary: TonalPalette;
    secondary: TonalPalette;
    neutral: TonalPalette;
    error: TonalPalette;
    warning: TonalPalette;
    info: TonalPalette;
    success: TonalPalette;
}
export interface SourceTonalPalette extends CoreTonalPalette {
    custom1?: TonalPalette;
    custom2?: TonalPalette;
    custom3?: TonalPalette;
    custom4?: TonalPalette;
    custom5?: TonalPalette;
}
export declare const createFromSource: (source: ThemeSourceOption) => CoreTonalPalette;
export declare const createSourcePalette: (sourceColors: ThemeCoreSourceOptions) => SourceTonalPalette;
export {};
