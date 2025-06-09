/** @jsx jsx */
import { jsx, type IMLayoutItemJson } from 'jimu-core';
import type { LayoutItemProps } from '../../types';
interface OwnProps {
    itemIndex: number;
    layoutItem: IMLayoutItemJson;
}
export declare function ScreenGroup(props: LayoutItemProps & OwnProps): jsx.JSX.Element;
export {};
