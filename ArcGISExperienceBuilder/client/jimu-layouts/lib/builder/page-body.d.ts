/** @jsx jsx */
import { jsx, PagePart, BrowserSizeMode, type IMPageJson, type ImmutableObject } from 'jimu-core';
import { type PageContextProps } from 'jimu-layouts/layout-runtime';
export interface PageBodyProps {
    pageJson: IMPageJson;
    renderedPageId: string;
    activePagePart: PagePart;
    browserSizeMode: BrowserSizeMode;
    pageContext: ImmutableObject<PageContextProps>;
    visible: boolean;
    headerFooterHeight: number;
}
export declare function PageBody(props: PageBodyProps): jsx.JSX.Element;
