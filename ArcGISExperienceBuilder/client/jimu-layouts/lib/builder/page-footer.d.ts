/** @jsx jsx */
import { jsx, PagePart, type IMFooterJson, type BrowserSizeMode, type ImmutableObject } from 'jimu-core';
import { type PageContextProps } from 'jimu-layouts/layout-runtime';
export interface PageFooterProps {
    footer: IMFooterJson;
    activePagePart: PagePart;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    pageContext: ImmutableObject<PageContextProps>;
    onHeightChange: (height: number) => void;
}
export declare function PageFooter(props: PageFooterProps): jsx.JSX.Element;
