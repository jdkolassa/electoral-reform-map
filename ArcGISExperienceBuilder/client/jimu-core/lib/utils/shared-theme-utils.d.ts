import type { IMCustomThemeJson } from '../types/app-config';
import type { SharedThemeVariables } from '../types/theme';
interface SharedThemeElementJson {
    text?: string;
    background?: string;
    link?: string;
}
export interface SharedThemeJson {
    logo?: {
        small?: string;
        link?: string;
    };
    fonts?: {
        base?: {
            url?: string;
            family?: string;
        };
        heading?: {
            url?: string;
            family?: string;
        };
    };
    header?: SharedThemeElementJson;
    body?: SharedThemeElementJson;
    button?: SharedThemeElementJson;
}
/**
 * Check whether a theme is shared theme.
 * @param uri
 */
export declare const isSharedTheme: (uri: string) => uri is "themes/shared-theme/";
/**
 * Get mappped theme variables from an shared theme json.
 */
export declare const createSharedThemeVariables: (sharedThemeJson: SharedThemeJson) => SharedThemeVariables;
/**
 * Create the custom theme variables of the shared theme.
 * @param sharedThemeVariables
 */
export declare const createCustomSharedThemeVariables: (sharedThemeVariables: SharedThemeVariables) => IMCustomThemeJson;
export {};
