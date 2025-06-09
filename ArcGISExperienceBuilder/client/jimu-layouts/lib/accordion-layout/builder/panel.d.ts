/** @jsx jsx */
import { jsx } from 'jimu-core';
import type { LayoutItemProps } from '../../types';
interface OwnProps {
    layoutId?: string;
    layoutItemId?: string;
    selected: boolean;
    expanded: boolean;
    isResizing: boolean;
    isInlineEditing: boolean;
    height: string;
    gap: number;
    onExpandedChange: (layoutItemId: string, expanded: boolean) => void;
    onClick: () => void;
    onDoubleClick: () => void;
    onResizeStart: (id: string, initWidth: number, initHeight: number) => void;
    onResizing: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean, speed: number) => void;
    onResizeEnd: (id: string, x: number, y: number, dw: number, dh: number, shiftKey: boolean) => void;
}
export declare function Panel(props: LayoutItemProps & OwnProps): jsx.JSX.Element;
export {};
