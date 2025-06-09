import { type DataSource, React, type ImmutableArray, type IntlShape, type UseDataSource, type IMDataSourceJson } from 'jimu-core';
interface State {
    isNodeSelectable: (dataSource: Partial<DataSource>) => boolean;
    isOpen: boolean;
}
interface Props {
    ds: DataSource | IMDataSourceJson;
    /**
     * All [to-use data sources](../ds-add-data.tsx).
     * Use the array to get whether a data source can be list here and select.
     */
    allToUseDss: Array<DataSource | IMDataSourceJson>;
    intl: IntlShape;
    widgetId: string;
    isMultiple: boolean;
    isBatched: boolean;
    isSearching: boolean;
    useDataSources: ImmutableArray<UseDataSource>;
    disableSelection: boolean;
    disableRemove: boolean;
    onChange: (useDataSources: UseDataSource[]) => void;
    onClickDisabledDsItem?: () => void;
}
export default class DsItemTree extends React.PureComponent<Props, State> {
    constructor(props: any);
    componentDidUpdate(prevProps: Props): void;
    getIsNodeSelectable: () => (ds: Partial<DataSource>) => boolean;
    renderDsItem: (ds: DataSource) => React.JSX.Element;
    renderDsLabel: (label: string, dataSource: DataSource, isRootTree: boolean) => React.JSX.Element;
    getChildDataSources: (ds: DataSource | IMDataSourceJson) => DataSource[];
    getLabel: (ds: DataSource | IMDataSourceJson) => string;
    toggle: () => void;
    render(): React.JSX.Element;
}
export {};
