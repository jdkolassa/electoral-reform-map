import type { SharedThemeElementsVariables } from 'jimu-core';
export interface ThemeMixin {
    [key: string]: any;
    sharedTheme?: SharedThemeElementsVariables;
}
export interface ThemeMixinOptions extends Partial<ThemeMixin> {
}
export declare const createMixin: (options: any, mixin: any) => any;
