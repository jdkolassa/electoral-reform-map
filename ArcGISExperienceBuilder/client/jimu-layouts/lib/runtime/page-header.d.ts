/** @jsx jsx */
import { jsx, type IMHeaderJson, type BrowserSizeMode, type IMThemeVariables } from 'jimu-core';
import { type PageContextProps } from '../builder/page-context';
export interface PageHeaderProps {
    headerJson: IMHeaderJson;
    pageContext: PageContextProps;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    theme: IMThemeVariables;
    onHeightChange: (height: number) => void;
}
export declare function PageHeader(props: PageHeaderProps): jsx.JSX.Element;
