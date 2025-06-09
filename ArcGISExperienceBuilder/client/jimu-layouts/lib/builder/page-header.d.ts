/** @jsx jsx */
import { jsx, PagePart, type IMHeaderJson, type BrowserSizeMode, type ImmutableObject } from 'jimu-core';
import { type PageContextProps } from 'jimu-layouts/layout-runtime';
export interface PageHeaderProps {
    header: IMHeaderJson;
    activePagePart: PagePart;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    pageContext: ImmutableObject<PageContextProps>;
    onHeightChange: (height: number) => void;
}
export declare function PageHeader(props: PageHeaderProps): jsx.JSX.Element;
