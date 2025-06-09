/**
 * Identify if a given string is a standard color.
 */
export declare const isStandardColor: (value?: string) => boolean;
export declare const CssVariableTester: RegExp;
/**
 * Identify if a given string is a CSS variable.
 */
export declare const isCSSVariable: (input: string) => boolean;
/**
 * Identify if a given string is a standard color or CSS variable.
 */
export declare const isStandardOrCSSVariableColor: (input?: string) => boolean;
