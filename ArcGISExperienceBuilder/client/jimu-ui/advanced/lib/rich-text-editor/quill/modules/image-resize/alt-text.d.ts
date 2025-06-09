import { React } from 'jimu-core';
interface AltTextProps {
    alt: string;
    onChange: (alt: string) => void;
    onClose: () => void;
}
export declare const AltText: (props: AltTextProps) => React.JSX.Element;
export {};
