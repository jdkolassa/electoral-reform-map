import { type ReferencePalette, type ReferencePaletteFullColor } from '../reference/palette';
export type ColorSchemeMode = 'light' | 'dark';
export type BrandFunctionColors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export declare const BrandFunctionColorNames: string[];
export declare const isBrandFunctionColor: (color: string) => boolean;
export interface SurfaceColor {
    background: string;
    backgroundText: string;
    backgroundHint: string;
    paper: string;
    paperText: string;
    paperHint: string;
    overlay: string;
    overlayText: string;
    overlayHint: string;
}
export interface ActionSelected {
    default: string;
    hover: string;
    text: string;
}
export interface ActionDisabled {
    default: string;
    text: string;
}
export interface ActionLink {
    default: string;
    hover: string;
    visited: string;
}
export interface ActionColor {
    default: string;
    hover: string;
    pressed: string;
    text: string;
    focus: string;
    selected: ActionSelected;
    disabled: ActionDisabled;
    link: ActionLink;
}
export interface ActionColorOption extends Partial<Omit<ActionColor, 'selected' | 'disabled' | 'link'>> {
    selected?: Partial<ActionSelected>;
    disabled?: Partial<ActionDisabled>;
    link?: Partial<ActionLink>;
}
export interface DividerColor {
    primary: string;
    secondary: string;
    tertiary: string;
    input: string;
    switch: string;
}
export interface SchemeColor {
    light: string;
    main: string;
    dark: string;
    text: string;
}
export interface ColorScheme {
    /**
     * The palette mode, can be light or dark.
     */
    mode: ColorSchemeMode;
    /**
     * The colors used to represent primary interface elements for a user.
     */
    primary: SchemeColor;
    /**
     * The colors used to represent secondary interface elements for a user.
     */
    secondary: SchemeColor;
    /**
     * The colors used to represent interface elements that the user should be made aware of.
     */
    error: SchemeColor;
    /**
     * The colors used to represent potentially dangerous or important messages.
     */
    warning: SchemeColor;
    /**
     * The colors used to present information to the user that is neutral and not necessarily important.
     */
    info: SchemeColor;
    /**
     * The colors used to indicate the successful completion of an action that user triggered.
     */
    success: SchemeColor;
    /**
     * The colors used to present the background and text.
     */
    surface: SurfaceColor;
    /**
     * The colors used to present background and text for various states of the action.
     */
    action: ActionColor;
    /**
     *  The colors used to present dividing lines or border lines.
     */
    divider: DividerColor;
}
export interface ColorSchemeOptions {
    mode?: ColorSchemeMode;
    primary?: Partial<SchemeColor>;
    secondary?: Partial<SchemeColor>;
    error?: Partial<SchemeColor>;
    warning?: Partial<SchemeColor>;
    info?: Partial<SchemeColor>;
    success?: Partial<SchemeColor>;
    surface?: Partial<SurfaceColor>;
    action?: ActionColorOption;
    divider?: Partial<DividerColor>;
}
export declare const getSchemeColor: (palette: ReferencePaletteFullColor, mode: "light" | "dark") => SchemeColor;
export declare function augmentColor(color: Partial<SchemeColor>, mode?: ColorSchemeMode, name?: string): SchemeColor;
export default function createColorScheme(options: ColorSchemeOptions, palette: ReferencePalette): ColorScheme;
