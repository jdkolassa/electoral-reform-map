import { type ColorScheme, type ColorSchemeMode, type ColorSchemeOptions } from '../color-scheme';
import { type ShadowsOptions, type Shadow } from '../shadow';
import { type Shape, type ShapeOptions } from '../shape';
import { type Spacing, type SpacingOptions } from '../spacing';
import { type Typography, type TypographyOptions } from '../typography';
import { type ThemeSourceOptions, type ThemeRefOptions, type ThemeReference } from '../reference';
import { type ThemeMixin, type ThemeMixinOptions } from '../mixin';
import type { ThemeVariableCompOptions, ThemeCompOptions, ThemeComponents } from '../component';
import { type Transitions, type TransitionsOptions } from '../transition';
export interface ModeBasedColorSchemeOptions {
    mode: ColorSchemeMode;
    light?: Partial<ColorSchemeOptions>;
    dark?: Partial<ColorSchemeOptions>;
}
export interface ThemeSysOptions {
    color?: ModeBasedColorSchemeOptions;
    shape?: ShapeOptions;
    shadow?: ShadowsOptions;
    spacing?: SpacingOptions;
    typography?: TypographyOptions;
    transitions?: TransitionsOptions;
}
export interface ThemeOptions {
    src?: ThemeSourceOptions;
    ref?: ThemeRefOptions;
    sys?: ThemeSysOptions;
    comp?: ThemeCompOptions;
    mixin?: ThemeMixinOptions;
}
/**
 * The theme options in json.
 */
export interface ThemeVariableOptions extends Omit<ThemeOptions, 'comp' | 'mixin'> {
    spacing?: number;
    mixin?: Omit<ThemeMixinOptions, 'sharedTheme'>;
    comp?: ThemeVariableCompOptions;
}
export interface ThemeSystem {
    color: ColorScheme;
    spacing: Spacing;
    shadow?: Shadow;
    shape: Shape;
    typography?: Typography;
    transitions: Transitions;
}
export interface Theme {
    src?: ThemeSourceOptions;
    ref: ThemeReference;
    sys: ThemeSystem;
    mixin?: ThemeMixin;
    comp?: ThemeComponents;
}
declare const createTheme: (options?: ThemeOptions, mixin?: ThemeMixinOptions) => Theme;
export default createTheme;
