import { React, type IntlShape } from 'jimu-core';
import type { ColorItem } from './core';
export interface ColorStripProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
    color?: string;
    colors?: ColorItem[];
    onChange?: (value: string) => void;
    sparse?: boolean;
    fill?: boolean;
}
export declare const PRESET_COLORS: {
    label: string;
    value: string;
    color: string;
}[];
interface ExtraProps {
    intl?: IntlShape;
}
export declare const ColorStrip: import("@emotion/styled").StyledComponent<ColorStripProps & ExtraProps, {}, {}>;
export {};
