/** @jsx jsx */
import { jsx } from 'jimu-core';
import type { LayoutItemProps } from '../../types';
export declare function GridLayoutItem(props: LayoutItemProps & {
    delay: number;
    isLastChild: boolean;
    onDragStart: (id: string) => void;
    onDragging: (id: string, dx: number, dy: number) => void;
    onDragEnd: (id: string) => void;
}): jsx.JSX.Element;
