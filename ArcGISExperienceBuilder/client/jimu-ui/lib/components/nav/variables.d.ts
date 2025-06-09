import { type IMThemeVariables, type ThemeNavVariants, type ThemeNav } from 'jimu-core';
export declare const getNavLinkSize: (theme: IMThemeVariables) => {
    size: {
        fontSize: any;
        lineHeight: number;
        paddingX: string;
        paddingY: string;
    };
    icon: {
        spacing: string;
    };
};
export declare const getNavLinkVars: (theme: IMThemeVariables) => Partial<ThemeNavVariants>;
export declare const getNavRootVars: (theme: IMThemeVariables) => Partial<ThemeNavVariants>;
export declare const getNavVariables: (theme: IMThemeVariables) => ThemeNav;
