/** @jsx jsx */
import { React, type IMThemeVariables } from 'jimu-core';
import { type ColorItem } from '../../components';
interface ThemeColorProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: string;
    showSharedColors?: boolean;
    onChange?: (value: string) => void;
    recentColors?: ColorItem[];
    specificTheme?: IMThemeVariables;
    onCustomizeClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    presetColors?: ColorItem[];
    disableReset?: boolean;
    customizeBtnRef?: React.Ref<HTMLButtonElement>;
    newThemeFeatures?: boolean;
}
export declare const ThemeColor: (props: ThemeColorProps) => React.ReactElement;
export {};
