import { React } from 'jimu-core';
import { FontFamilyValue } from 'jimu-ui';
export declare const fontValue: FontFamilyValue[];
interface Props {
    className?: string;
    style?: React.CSSProperties;
    font?: FontFamilyValue;
    disabled?: boolean;
    'aria-label'?: string;
    onChange?: (value: string) => void;
}
export declare const FontFamily: (props: Props) => React.ReactElement;
export {};
