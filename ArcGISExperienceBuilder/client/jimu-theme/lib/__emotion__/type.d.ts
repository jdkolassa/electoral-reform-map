import type { StyledComponent, StyledTags } from '@emotion/styled';
import type { CreateStyledComponent, StyledOptions } from '@emotion/styled/base';
import type { ComponentSelector, CSSObject, DistributiveOmit, FunctionInterpolation, Interpolation, Keyframes, PropsOf, SerializedStyles } from '@emotion/react';
import type CSS from 'csstype';
export type { StyledComponent, FunctionInterpolation, Interpolation, DistributiveOmit, PropsOf, SerializedStyles, CreateStyledComponent, StyledOptions, CSSObject, StyledTags };
/**
 *  Same as StyledOptions but shouldForwardProp must be a type guard
 */
export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
    label?: string;
    shouldForwardProp?: (propName: PropertyKey) => propName is ForwardedProps;
    target?: string;
}
export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {
}
export type InterpolationPrimitive = null | undefined | boolean | number | string | ComponentSelector | Keyframes | SerializedStyles | CSSObject;
export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;
export type NormalCssProperties = CSS.Properties<number | string>;
export type Fontface = CSS.AtRule.FontFace & {
    fallbacks?: CSS.AtRule.FontFace[];
};
/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends NormalCssProperties {
    '@font-face'?: Fontface | Fontface[];
}
export interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
export { type EmotionCache } from '@emotion/cache';
