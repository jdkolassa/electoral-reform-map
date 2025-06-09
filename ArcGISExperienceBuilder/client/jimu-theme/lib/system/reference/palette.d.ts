import { type ThemeCoreSourceOptions } from '../source';
export interface ThemeSourceOptions extends ThemeCoreSourceOptions {
    white?: string;
    black?: string;
}
export declare const ReferencePaletteColorTones: number[];
export declare const ReferencePaletteColorFullTones: number[];
export declare const ReferencePaletteNeutralTones: number[];
export interface ReferencePaletteColor {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}
export interface ReferencePaletteFullColor extends ReferencePaletteColor {
    0: string;
    1000: string;
}
export interface ReferencePaletteNeutralColor extends ReferencePaletteColor {
    1000: string;
    1100: string;
    1200: string;
    1300: string;
}
export interface ReferencePalette {
    white: string;
    black: string;
    primary: ReferencePaletteColor;
    secondary: ReferencePaletteColor;
    neutral: ReferencePaletteNeutralColor;
    error: ReferencePaletteColor;
    warning: ReferencePaletteColor;
    info: ReferencePaletteColor;
    success: ReferencePaletteColor;
    custom1?: ReferencePaletteColor;
    custom2?: ReferencePaletteColor;
    custom3?: ReferencePaletteColor;
    custom4?: ReferencePaletteColor;
    custom5?: ReferencePaletteColor;
}
export type ReferencePaletteOptions = Partial<ReferencePalette>;
export declare const createReferencePaletteColor: (source: string, tones?: number[]) => ReferencePaletteFullColor;
export declare const createReferencePalette: (options: ThemeSourceOptions) => ReferencePalette;
