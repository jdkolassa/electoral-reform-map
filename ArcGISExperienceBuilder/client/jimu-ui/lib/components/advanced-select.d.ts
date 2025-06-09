/** @jsx jsx */
import { React, jsx, type DataSource, type IMFieldSchema, type IntlShape, type CodedValue, DataSourceManager, JimuFieldType, ReactRedux, type SqlExpression } from 'jimu-core';
import { type DropdownButtonProps, type DropdownMenuProps } from './dropdown';
import type { Strategy } from './overlay/popper';
export interface AdvancedSelectItem {
    /**
     * Identity value of the item
     */
    value: string | number;
    /**
     * Label assigned for the item
     */
    label: string;
    /**
     * Whether the item is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Customize the content using the callback function
     */
    render?: (item: CodedValue) => any;
}
export interface AdvancedSelectProps {
    /**
     * See {@link DropdownButtonProps} for details.
     */
    title?: string;
    /**
     * See {@link DropdownButtonProps} for details.
     */
    'aria-label'?: string;
    /**
     * See {@link DropdownButtonProps} for details.
     */
    'a11y-description'?: string;
    /**
     * Selected values.
     */
    selectedValues?: AdvancedSelectItem[];
    /**
     * sqlExpression from outside which limits current query from all available values.
     * Two cases:
     * 1.cascade effect by other askForValue clauses at runtime.
     * 2.excluded values by the previous predefined values in builder.
     */
    sqlExpression?: SqlExpression;
    /**
     * Whether to hide search input.
     * @default false
     */
    hideSearchInput?: boolean;
    /**
     * Whether to hide check-all checkbox.
     * Valid only for staticValues or codedValues data in multiple mode, without searchInput and bottomTools.
     * @default true
     * @ignore
     */
    hideCheckAll?: boolean;
    /**
     * There are two types of values for select options:
     *  1. Static values from `staticValues`,
     *  2. Dynamic values from `dataSource` and `field`, and `useCodedValues` is used to distinguish whether to show codedValues.
     *
     * For Static values:
     * Do need to query from service if it's supported.
     * The contents of each option can be customized by rendering method.
     */
    staticValues?: AdvancedSelectItem[];
    /**
     * Whether to sort staticValues by label.
     * @default true
     */
    sortValuesByLabel?: boolean;
    /**
     * For dynamic values
     * Need to query from service.
     */
    field?: IMFieldSchema;
    /**
     * Selected data source which supports filter.
     */
    dataSource?: DataSource;
    /**
     * Whether to show codedValues by layer setting.
     * @default true
     */
    useCodedValues?: boolean;
    /**
     * whether to support multiple select.
     * @default false
     */
    isMultiple?: boolean;
    /**
     * Whether to hide tools in the bottom.
     * Only valid for multiple select.
     * @default false
     */
    hideBottomTools?: boolean;
    /**
     * Whether to hide empty option.
     * @default false
     */
    isEmptyOptionHidden?: boolean;
    /**
     * Custom tag for empty option.
     * @default `allTag` from nls.
     * @ignore
     */
    allTag?: string;
    /**
     * Callback fired when the item is checked or unchecked.
     */
    onChange?: (valueObj: AdvancedSelectItem[]) => void;
    /**
     * Rerender and close menu when version is changed.
     * @ignore
     */
    version?: number;
    /**
     * Whether the select menu is open.
     */
    isOpen?: boolean;
    /**
     * Callback fired when toggling the select menu.
     */
    toggle?: (isOpen?: boolean) => void;
    /**
     * Defines the size of the dropdown button.
     * @default default
     */
    size?: 'default' | 'sm' | 'lg';
    /**
     * Whether to put dropdown menu to body by ReactDOM.createPortal
     * @default true
     */
    appendToBody?: boolean;
    /**
     * Describes the positioning strategy to use.
     * @default absolute
     */
    strategy?: Strategy;
    /**
     * Control multi-select's z-index,
     * but if appendToBody is true, it'll be invalid
     */
    zIndex?: number;
    /**
     * If `true`, the dropdown will take the full width of its parent container.
     */
    fluid?: boolean;
    /**
     * See {@link DropdownProps} for details.
     */
    autoWidth?: boolean;
    /**
     * Applies to the internal DropdownButton component, except `size` property.
     * See {@link DropdownButtonProps} for details.
     */
    buttonProps?: Omit<DropdownButtonProps, 'size'>;
    /**
     * Applies to the internal DropdownMenu component.
     * See {@link DropdownMenuProps} for details.
     */
    menuProps?: DropdownMenuProps;
    /**
     * Whether to trigger click event in onkeyUp stage for `DropdownButton` and `DropdownItem`.
     * @default false
     * @ignore
     */
    useKeyUpEvent?: boolean;
    /**
     * Indicates the placeholder text.
     */
    placeholder?: string;
    /**
     * Customize the dropdown button using the callback function
     */
    customDropdownButtonContent?: (selectedItems?: AdvancedSelectItem[]) => any;
    /**
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * @ignore
     */
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
interface DataSourceProps {
    dataSourceInfo: any;
    dataSourceBelongInfo: any;
}
interface AdvancedSelectState {
    loaded: boolean;
    isSelectedListShown: boolean;
    isOpen: boolean;
    autoFocus: boolean;
    pageSize: number;
    currentList: any[];
    /**
     * count is from ds.loadCount()
     * recordCount is from ds.load()
     * Alll features are loaded when count = recordCount.
     * Only works for distinct=true case because the dropdown is empty when distinct is false.
     */
    count: number;
    recordCount: number;
    page: number;
    list: any[];
    searchCount: number;
    searchRecordCount: number;
    searchPage: number;
    /**
     * static values, or codedValues.
     */
    staticValues: CodedValue[];
    showCheckAll: boolean;
    checkAllChecked: boolean;
    checkAllIndeterminate: boolean;
}
export declare class _AdvancedSelectInner extends React.PureComponent<AdvancedSelectProps & IntlProps & DataSourceProps, AdvancedSelectState> {
    _isMounted: boolean;
    dsManager: DataSourceManager;
    dataSource: DataSource;
    dataSourceForSearch: DataSource;
    buttonRef: any;
    dropdownBtnRef: any;
    searchRef: any;
    showAllRef: any;
    checkAllRef: any;
    noDataRef: any;
    firstMenuItem: any;
    modifiers: any;
    /**
     * Only for numeric field.
     */
    numericFieldLength: number;
    /**
     * Only for string field.
     */
    isHosted: boolean;
    listRef: HTMLDivElement;
    localDsRandomId: string;
    previousRecordLength: number;
    needToQuery: boolean;
    previousRecordLengthForSearch: number;
    needToQueryForSearch: boolean;
    isRTL: boolean;
    sanitizer: any;
    sanitizer2: any;
    context: any;
    static contextType: React.Context<import("./query-scope-context").QueryScopeContextProps>;
    static count: number;
    static a11yCount: number;
    constructor(props: any);
    componentDidMount(): void;
    isDsInfoChanged: (prevProps: any) => boolean;
    componentDidUpdate(prevProps: AdvancedSelectProps & DataSourceProps, prevStates: AdvancedSelectState): void;
    componentWillUnmount(): void;
    i18nMessage: (id: string, values?: any) => string;
    showCheckAll: (staticValues: any) => boolean;
    getCheckAllStates: (currentList: any, selectedValues: any) => {
        checkAllChecked: boolean;
        checkAllIndeterminate: boolean;
    };
    getPageSize: (includedRealStaticValues: any) => any;
    createDataSources: () => void;
    destroyDataSources: () => void;
    isStaticValuesChanged: (staticValues: any[], prevStaticValues: any[]) => boolean;
    /**
     * get real static values from staticValues, or codedValues from layer.
     */
    getRealStaticValues: () => CodedValue[];
    /**
     * Sort value pairs by label.
     */
    sortValuePairs: (valuePairs: any) => any[];
    showOutputWarningInBuilder: () => boolean;
    showOutputWarning: () => boolean;
    updateList: (page: number, queryCount?: boolean, autoTriggeredByFirstPage?: boolean) => Promise<void>;
    onTogglePopper: (evt: any) => void;
    isItemChecked: (value: any) => boolean;
    onItemClick: (item: AdvancedSelectItem, willActive: boolean) => void;
    onScroll: (e: any) => void;
    loadNextPageData: (autoTriggeredByFirstPage?: boolean) => void;
    updateListWithSearchKey: (queryCount?: boolean) => Promise<void>;
    updateSearchList: (sqlExpression: SqlExpression, page?: number) => Promise<void>;
    getMergedSqlExpressionWithSearchKey: () => SqlExpression;
    /**
     * Fired when search text is changed.
     * @param evt
     */
    onTextChange: (evt: any) => void;
    checkAllChange: (evt: any) => void;
    isDataEmpty: () => boolean;
    getAllTag: () => string;
    getSelectLabel: () => string;
    showSelectedList: (isShown: boolean) => void;
    unCheckAll: () => void;
    getDropdownMenuStyle: () => import("jimu-core").SerializedStyles;
    getOutputWarningContainer: (item: any) => jsx.JSX.Element;
    handelTabEvent: (e: any) => boolean;
    showAllKeyDown: (e: any) => void;
    getFirstFocusableNode: () => any;
    toggleFromFirstNode: (e: any) => void;
    toggleByCustomTabEvent: (e: any) => void;
    noInteractiveNodesInside: () => boolean;
    getFormattedLabel: (label: string) => string;
    getLabelWithoutHTML: (label: any) => any;
    render(): jsx.JSX.Element;
}
/**
 * The `AdvancedSelect` component is used to provide the ability to choose an option from a list.
 *
 * Please use this component in case of the following needs:
 *
 * - Search function.
 * - Selection tools for multiple option.
 * - Display dynamic attribute from a field of dataSource with pagination.
 *
 * ```ts
 * import { AdvancedSelect } from 'jimu-ui'
 * ```
 */
export declare const _AdvancedSelect: ReactRedux.ConnectedComponent<typeof _AdvancedSelectInner, {
    size?: "default" | "sm" | "lg";
    title?: string;
    style?: React.CSSProperties;
    zIndex?: number;
    dataSource?: DataSource;
    placeholder?: string;
    field?: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").FieldSchema> & {
        readonly jimuName: string;
        readonly type: JimuFieldType;
        readonly esriType?: import("jimu-core").EsriFieldType;
        readonly name: string;
        readonly alias?: string;
        readonly description?: string;
        readonly format?: import("seamless-immutable").ImmutableObject<import("jimu-core").FieldFormatSchema>;
        readonly originFields?: import("seamless-immutable").ImmutableArray<string>;
    };
    allTag?: string;
    onChange?: (valueObj: AdvancedSelectItem[]) => void;
    className?: string;
    'aria-label'?: string;
    ref?: React.LegacyRef<_AdvancedSelectInner>;
    key?: React.Key | null | undefined;
    version?: number;
    strategy?: Strategy;
    toggle?: (isOpen?: boolean) => void;
    'a11y-description'?: string;
    selectedValues?: AdvancedSelectItem[];
    sqlExpression?: SqlExpression;
    hideSearchInput?: boolean;
    hideCheckAll?: boolean;
    staticValues?: AdvancedSelectItem[];
    sortValuesByLabel?: boolean;
    useCodedValues?: boolean;
    isMultiple?: boolean;
    hideBottomTools?: boolean;
    isEmptyOptionHidden?: boolean;
    isOpen?: boolean;
    appendToBody?: boolean;
    fluid?: boolean;
    autoWidth?: boolean;
    buttonProps?: Omit<DropdownButtonProps, "size">;
    menuProps?: DropdownMenuProps;
    useKeyUpEvent?: boolean;
    customDropdownButtonContent?: (selectedItems?: AdvancedSelectItem[]) => any;
    intl: IntlShape;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export declare const AdvancedSelect: import("@emotion/styled").StyledComponent<Omit<AdvancedSelectProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, {}, {}>;
export {};
