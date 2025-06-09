/** @jsx jsx */
import { jsx, type IMLayoutItemJson } from 'jimu-core';
import type { ToolbarConfig } from 'jimu-layouts/layout-runtime';
export interface GridItemToolbarProps {
    layoutId: string;
    layoutItem: IMLayoutItemJson;
    refElement: HTMLElement;
}
export declare const gridRowColTools: ToolbarConfig;
export declare function GridItemToolbar(props: GridItemToolbarProps): jsx.JSX.Element;
