/** @jsx jsx */
import { type LayoutItemJson, type IMLayoutItemJson, jsx } from 'jimu-core';
import { type LayoutItemProps } from 'jimu-layouts/layout-runtime';
interface OwnProps {
    layoutId: string;
    layoutItem: LayoutItemJson | IMLayoutItemJson;
    gap: number;
    expanded: boolean;
    dw?: number;
    dh?: number;
    onExpandedChange: (layoutItemId: string, expanded: boolean) => void;
    onResizeStart: (id: string, initWidth: number, initHeight: number) => void;
    onResizeEnd: (id: string, x: number, y: number, dw: number, dh: number) => void;
}
export declare function AccordionItem(props: LayoutItemProps & OwnProps): jsx.JSX.Element;
export {};
