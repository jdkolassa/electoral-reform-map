import { React, type IMThemeVariables } from 'jimu-core';
import type { ColorItem } from '../components';
interface ThemeColorSketchProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: string;
    showSharedColors?: boolean;
    onChange: (value: string) => void;
    presetColors?: ColorItem[];
    specificTheme?: IMThemeVariables;
    disableAlpha?: boolean;
    disableReset?: boolean;
    onCustomizeClick?: () => void;
    newThemeFeatures?: boolean;
}
export declare const ThemeColorSketch: import("@emotion/styled").StyledComponent<ThemeColorSketchProps & React.RefAttributes<HTMLDivElement>, {}, {}>;
export {};
