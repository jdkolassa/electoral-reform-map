import { React } from 'jimu-core';
import { type TextFontStyle, type ButtonGroupProps } from 'jimu-ui';
type FontStyles = 'bold' | 'italic' | 'underline' | 'strike';
type WeakTextFontStyle = Pick<TextFontStyle, 'bold' | 'italic' | 'underline' | 'strike'>;
type FontStyleProps = Omit<ButtonGroupProps, 'onChange'> & WeakTextFontStyle & {
    types?: FontStyles[];
    onChange: (key: string, value: boolean) => void;
};
export declare const FontStyle: (props: FontStyleProps) => React.JSX.Element;
export {};
