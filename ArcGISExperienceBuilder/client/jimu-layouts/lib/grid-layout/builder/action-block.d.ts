/** @jsx jsx */
import { jsx } from 'jimu-core';
import type { PageContextProps } from 'jimu-layouts/layout-runtime';
export interface ActionBlockProps {
    layoutId: string;
    pageContext: PageContextProps;
    onTemplateSelected: (templateBlockJson: any) => void;
    onPageTemplateSelected: (templatePageJson: any) => void;
}
export declare function ActionBlock(props: ActionBlockProps): jsx.JSX.Element;
