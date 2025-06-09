/** @jsx jsx */
import { React, jsx } from 'jimu-core';
interface Props {
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    onItemSelect: (pageJson: any) => void;
}
interface State {
    type: 'all' | 'fixedModalWindow' | 'fixedNonModalWindow' | 'anchoredWindow';
}
export declare class WindowTemplateList extends React.PureComponent<Props, State> {
    constructor(props: any);
    onTypeChange: (e: any) => void;
    render(): jsx.JSX.Element;
}
export {};
