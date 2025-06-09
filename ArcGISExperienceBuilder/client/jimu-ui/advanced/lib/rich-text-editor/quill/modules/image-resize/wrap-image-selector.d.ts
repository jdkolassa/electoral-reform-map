import { React } from 'jimu-core';
interface WrapImageSelectorProps {
    display: 'inline' | 'float' | 'block';
    value?: 'left' | 'right';
    onChange?: (display: 'inline' | 'float' | 'block', value?: 'left' | 'right') => void;
}
export declare const WrapImageSelector: (props: WrapImageSelectorProps) => React.JSX.Element;
export {};
