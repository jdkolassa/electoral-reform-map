/** @jsx jsx */
import { jsx } from 'jimu-core';
interface Props {
    controllerId: string;
    layoutId: string;
    layoutItemId: string;
    minimized: boolean;
    onClose: (e: any, string: any) => void;
    onToggle: () => void;
    onClick?: (e: any) => void;
}
export declare function Panel(props: Props): jsx.JSX.Element;
export {};
