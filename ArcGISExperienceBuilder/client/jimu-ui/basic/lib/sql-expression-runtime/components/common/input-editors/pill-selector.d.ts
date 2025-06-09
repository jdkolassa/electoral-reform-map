import { React, type DataSource, type IMFieldSchema, type IntlShape, type CodedValue, type ClauseValueOptions, type ClauseValuePair, DataSourceManager, ReactRedux, type SqlExpression } from 'jimu-core';
interface Props {
    value: ClauseValueOptions;
    dataSource: DataSource;
    runtime: boolean;
    isSmallSize?: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    codedValues?: CodedValue[];
    fieldObj?: IMFieldSchema;
    sqlExpression?: SqlExpression;
    style?: React.CSSProperties;
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
interface DataSourceProps {
    dataSourceInfo: any;
    dataSourceBelongInfo: any;
}
interface State {
    list: any[];
    listWithSetValues: any[];
    codedValues: any[];
    isOpen: boolean;
    isListReady: boolean;
}
export declare class _VIPillSelectorInner extends React.PureComponent<Props & DataSourceProps & IntlProps, State> {
    _isMounted: boolean;
    pillButton: any;
    dsManager: DataSourceManager;
    dataSource: DataSource;
    localDsRandomId: string;
    context: any;
    static contextType: React.Context<import("jimu-ui").QueryScopeContextProps>;
    static count: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getDataSource: () => DataSource;
    componentDidUpdate(prevProps: Props & DataSourceProps): void;
    /**
     * Sort value pairs by label.
    */
    sortValuePairs: (valuePairs: any) => any;
    isMultiple: () => boolean;
    i18nMessage: (id: string, values?: any) => string;
    updateList: (fieldObj?: IMFieldSchema) => Promise<void>;
    getListByPageSize: (count: number, page: number) => Promise<{
        list: CodedValue[];
    }>;
    getListWithSetValues: (list: any) => any;
    getDisplayLabel: (value: any) => string;
    onTogglePopper: () => void;
    isPillActive: (value: any) => boolean;
    onPillClick: (item: ClauseValuePair, e: any) => void;
    getSkeletons: () => React.JSX.Element;
    getPills: (list: any) => React.JSX.Element;
    render(): React.JSX.Element;
}
export declare const _VIPillSelector: ReactRedux.ConnectedComponent<typeof _VIPillSelectorInner, {
    style?: React.CSSProperties;
    value: ClauseValueOptions;
    dataSource: DataSource;
    onChange: (valueObj: ClauseValueOptions) => void;
    className?: string;
    ref?: React.LegacyRef<_VIPillSelectorInner>;
    key?: React.Key | null | undefined;
    sqlExpression?: SqlExpression;
    intl: IntlShape;
    fieldObj?: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").FieldSchema> & {
        readonly jimuName: string;
        readonly type: import("jimu-core").JimuFieldType;
        readonly esriType?: import("jimu-core").EsriFieldType;
        readonly name: string;
        readonly alias?: string;
        readonly description?: string;
        readonly format?: import("seamless-immutable").ImmutableObject<import("jimu-core").FieldFormatSchema>;
        readonly originFields?: import("seamless-immutable").ImmutableArray<string>;
    };
    runtime: boolean;
    isSmallSize?: boolean;
    codedValues?: CodedValue[];
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
declare const VIPillSelector: import("@emotion/styled").StyledComponent<Omit<Props & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, {}, {}>;
export default VIPillSelector;
