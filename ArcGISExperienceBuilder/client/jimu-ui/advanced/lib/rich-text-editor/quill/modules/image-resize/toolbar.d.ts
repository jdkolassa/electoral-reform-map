import { React } from 'jimu-core';
interface ToolbarComponentProps {
    reference: Element;
    display: 'inline' | 'float' | 'block';
    float?: 'left' | 'right';
    alignment?: 'left' | 'center' | 'right';
    alt?: string;
    onDelete?: () => void;
    onAltChange?: (alt: string) => void;
    onDisplayChange?: (display: 'inline' | 'float' | 'block', option?: any) => void;
}
export declare const ToolbarComponent: (props: ToolbarComponentProps) => React.JSX.Element;
export {};
