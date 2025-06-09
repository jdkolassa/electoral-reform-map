import { React, type ThemeVariable } from 'jimu-core';
interface Props {
    theme?: ThemeVariable;
}
export declare const defaultFonts: string[];
export declare const loadFontStyleSheet: (font: {
    name: string;
    url: string;
}) => Promise<any>;
export declare const FontLoader: (props: Props) => React.JSX.Element;
export {};
