import type { Theme } from '../create-theme';
import type { ComponentsVarsOverridesJson, ComponentsStyleOverrides, ComponentsOverrides, ComponentOverridesRules } from './overrides';
export interface ThemeComponents<T = Theme> extends ComponentsOverrides<T> {
}
export type { ComponentOverridesRules };
export interface ThemeCompOptions extends ThemeComponents {
}
export interface ThemeVariableCompOptions extends ComponentsVarsOverridesJson {
}
export type ThemeStylesOptions<T = Theme> = ComponentsStyleOverrides<T>;
export type * from './overrides';
