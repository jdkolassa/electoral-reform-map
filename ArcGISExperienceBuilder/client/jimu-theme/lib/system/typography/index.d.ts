import type { CSSProperties } from '../../__emotion__';
import type { FontStyle, ReferenceTypeface } from '../reference';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title1' | 'title2' | 'title3' | 'body1' | 'body2' | 'label1' | 'label2' | 'label3';
export declare const TypographyVariants: TypographyVariant[];
export type TypographyStyle = CSSProperties & {
    '@font-face'?: any;
};
export interface TypographyOptions extends Partial<{
    [key in TypographyVariant]: TypographyStyle;
}> {
    customFonts?: Array<{
        name: string;
        url: string;
    }>;
    allVariants?: React.CSSProperties;
}
export interface TypographyStyleOptions extends TypographyStyle {
}
export interface TypographyUtils {
    pxToRem: (px: number | string) => string;
    remToPx: (rem: number | string) => string;
}
export interface Typography extends Record<TypographyVariant, TypographyStyle>, Readonly<FontStyle>, TypographyUtils {
    customFonts?: Array<{
        name: string;
        url: string;
    }>;
}
declare const createTypography: (typeface: ReferenceTypeface, options: TypographyOptions) => Typography;
export default createTypography;
