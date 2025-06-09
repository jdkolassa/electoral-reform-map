/** @jsx jsx */
import { React, jsx, type IMThemeVariables } from 'jimu-core';
interface Props {
    theme: IMThemeVariables;
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    tabId: string;
    onTabSelect: (tabId: string) => void;
    onItemSelect: (pageJson: any) => void;
}
interface State {
    fullScreenType: 'all' | 'fixed' | 'grid';
}
export declare class PageTemplateList extends React.PureComponent<Props, State> {
    tabsRef: any;
    constructor(props: any);
    onTabSelect: (tabId: any) => void;
    onFullScreenTypeChange: (e: any) => void;
    render(): jsx.JSX.Element;
}
export {};
