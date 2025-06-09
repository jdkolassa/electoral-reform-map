import { type ThemeSourceOptions, type ReferencePaletteOptions, type ReferencePalette } from './palette';
import { type ReferenceTypeface, type ReferenceTypefaceOptions } from './typeface';
export interface ThemeRefOptions {
    palette?: ReferencePaletteOptions;
    typeface?: ReferenceTypefaceOptions;
}
export interface ThemeReference {
    palette: ReferencePalette;
    typeface: ReferenceTypeface;
}
export declare const createReference: (source: ThemeSourceOptions, options: ThemeRefOptions) => ThemeReference;
export * from './palette';
export * from './typeface';
