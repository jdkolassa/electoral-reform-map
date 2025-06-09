import { jsx } from 'jimu-core';
interface Props {
    referenceItemId: string;
    direction: 'row' | 'col';
    layoutId: string;
    onResizeEnd?: (id: string, dx: number, dy: number) => void;
}
export declare function Splitter(props: Props): jsx.JSX.Element;
export {};
