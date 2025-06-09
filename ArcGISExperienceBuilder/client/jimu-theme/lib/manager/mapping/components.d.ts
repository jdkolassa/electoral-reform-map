import type { SharedThemeElementsVariables, ThemeVariables } from 'jimu-core';
import type { ThemeStylesOptions, ThemeVariableCompOptions, ThemeCompOptions } from '../../system';
import type { MixedThemeStylesOptions } from '../theme-module';
export declare const getMappedComponentStyles: (styles: MixedThemeStylesOptions) => ThemeStylesOptions;
export declare const getMappedComponentVars: (theme: ThemeVariables) => ThemeVariableCompOptions;
export declare const getMappedComponents: (theme: ThemeVariables, inputStyles: MixedThemeStylesOptions, sharedThemeButtonVars?: SharedThemeElementsVariables["button"]) => ThemeCompOptions;
