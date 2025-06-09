import { React } from 'jimu-core';
interface BlockImageSelectorProps {
    display: 'inline' | 'float' | 'block';
    value?: 'left' | 'right' | 'center';
    onChange?: (display: 'inline' | 'float' | 'block', value?: 'left' | 'right' | 'center') => void;
}
export declare const BlockImageSelector: (props: BlockImageSelectorProps) => React.JSX.Element;
export {};
