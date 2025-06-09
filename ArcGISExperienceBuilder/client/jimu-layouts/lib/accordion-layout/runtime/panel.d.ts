/** @jsx jsx */
import { jsx } from 'jimu-core';
import type { LayoutItemProps } from '../../types';
interface OwnProps {
    layoutId?: string;
    layoutItemId?: string;
    expanded: boolean;
    gap: number;
    height: string;
    onExpandedChange: (layoutItemId: string, expanded: boolean) => void;
}
export declare function Panel(props: LayoutItemProps & OwnProps): jsx.JSX.Element;
export {};
