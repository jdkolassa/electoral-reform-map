import { React, type IMLinkParam } from 'jimu-core';
interface Props {
    datas: any[];
    linkParam: IMLinkParam;
    onClick: any;
    'aria-label': string;
}
export default class LinkSelectorList extends React.PureComponent<Props, unknown> {
    itemOnClick: (newSelectItem: any) => void;
    getListContent(): React.JSX.Element[];
    render(): React.JSX.Element;
}
export {};
