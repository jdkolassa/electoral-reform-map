/** @jsx jsx */
import { React, type IMAppConfig, LinkType, Immutable, type ImmutableArray, jsx, type IMThemeVariables, type UseDataSource, type IMLinkParam, OpenTypes, type LinkParam, type BrowserSizeMode, ReactRedux, type IntlShape } from 'jimu-core';
/**
 * The LinkSelectorContent props
 */
export interface LinkSelectorContentProps {
    /**
     * @ignore
     * Only used by theme.
     */
    className?: string;
    /**
     * The setting result.
     * `IMLinkParam` is an interface.
     *
     * ```ts
     * import { IMLinkParam } from 'jimu-ui/advanced/setting-components'
     * ```
     */
    linkParam?: IMLinkParam;
    /**
     * Callback when setting result is changed.
     */
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    /**
     * Use widget id to get widget context, e.g. whether widget is in repeated data source context.
     */
    widgetId?: string;
    /**
     * @ignore
     */
    isLinkPageSetting?: boolean;
    /**
     * Widget's `useDataSources`, which means data sources that widget is using.
     * If pass `useDataSources`, link can use these data sources to build `Expression` **(see `jimu-core` API documentation)**.
     *
     * ```ts
     * import { UseDataSource } from 'jimu-core'
     * ```
     */
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * Hide some types of link.
     *
     * ```ts
     * import { LinkType } from 'jimu-core'
     * ```
     */
    hiddenLinks?: ImmutableArray<LinkType>;
    /**
     * Link targets can be set.
     * `OpenTypes` is similar with HTML `<a>` target attribute.
     *
     * ```ts
     * import { OpenTypes } from 'jimu-ui/advanced/setting-components'
     * ```
     */
    openTypes?: ImmutableArray<OpenTypes>;
}
interface States {
    originLinkParam: IMLinkParam;
    linkParam: IMLinkParam;
}
interface StateExtraProps {
    /**
     * @ignore
     */
    appConfig: IMAppConfig;
    /**
     * @ignore
     */
    browserSizeMode: BrowserSizeMode;
}
interface ExtraProps {
    /**
     * @ignore
     */
    theme?: IMThemeVariables;
    /**
     * @ignore
     */
    intl?: IntlShape;
}
/**
 * The `LinkSelectorContent` component allows users to configure a link.
 *
 * ```ts
 * import { LinkSelectorContent } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare class _LinkSelectorContent extends React.PureComponent<LinkSelectorContentProps & ExtraProps & StateExtraProps, States> {
    static contextType: React.Context<boolean>;
    constructor(props: any);
    needOpenIn(linkParam: IMLinkParam | LinkParam): boolean;
    render(): jsx.JSX.Element;
    getLinkTypeContent: () => jsx.JSX.Element;
    getHiddenLinks: () => ImmutableArray<LinkType>;
    componentDidMount(): void;
    getLinkContent: (linkType: string) => jsx.JSX.Element;
    linkTypeChange: (e: any) => void;
    radioOpenTypeChange: (openType: OpenTypes) => void;
    linkParamChange: (changedParam: IMLinkParam, isTypeSame?: boolean) => void;
    fixLinkParam: (linkParam: IMLinkParam) => IMLinkParam;
    settingConfirm: () => void;
    isLinkParamOk: (linkParam: IMLinkParam) => boolean;
}
export declare const LinkSelectorContent: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<LinkSelectorContentProps>> & {
    WrappedComponent: React.ComponentType<LinkSelectorContentProps>;
}, {
    widgetId?: string;
    className?: string;
    forwardedRef?: React.Ref<any>;
    useDataSources?: Readonly<Immutable.ImmutableArray.Remaining<UseDataSource>> & Immutable.ImmutableArray.Additions<UseDataSource> & Immutable.ImmutableArray.Overrides<UseDataSource> & Immutable.ImmutableArray.ReadOnlyIndexer<UseDataSource>;
    linkParam?: Immutable.ImmutableObjectMixin<LinkParam> & {
        readonly linkType?: LinkType;
        readonly openType?: import("jimu-core").LinkTarget;
        readonly value?: string;
        readonly expression?: Immutable.ImmutableObject<import("jimu-core").Expression>;
    };
    isLinkPageSetting?: boolean;
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    hiddenLinks?: Readonly<Immutable.ImmutableArray.Remaining<LinkType>> & Immutable.ImmutableArray.Additions<LinkType> & Immutable.ImmutableArray.Overrides<LinkType> & Immutable.ImmutableArray.ReadOnlyIndexer<LinkType>;
    openTypes?: Readonly<Immutable.ImmutableArray.Remaining<OpenTypes>> & Immutable.ImmutableArray.Additions<OpenTypes> & Immutable.ImmutableArray.Overrides<OpenTypes> & Immutable.ImmutableArray.ReadOnlyIndexer<OpenTypes>;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
/**
 * @deprecated
 */
export declare const LinkSetting: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<LinkSelectorContentProps>> & {
    WrappedComponent: React.ComponentType<LinkSelectorContentProps>;
}, {
    widgetId?: string;
    className?: string;
    forwardedRef?: React.Ref<any>;
    useDataSources?: Readonly<Immutable.ImmutableArray.Remaining<UseDataSource>> & Immutable.ImmutableArray.Additions<UseDataSource> & Immutable.ImmutableArray.Overrides<UseDataSource> & Immutable.ImmutableArray.ReadOnlyIndexer<UseDataSource>;
    linkParam?: Immutable.ImmutableObjectMixin<LinkParam> & {
        readonly linkType?: LinkType;
        readonly openType?: import("jimu-core").LinkTarget;
        readonly value?: string;
        readonly expression?: Immutable.ImmutableObject<import("jimu-core").Expression>;
    };
    isLinkPageSetting?: boolean;
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    hiddenLinks?: Readonly<Immutable.ImmutableArray.Remaining<LinkType>> & Immutable.ImmutableArray.Additions<LinkType> & Immutable.ImmutableArray.Overrides<LinkType> & Immutable.ImmutableArray.ReadOnlyIndexer<LinkType>;
    openTypes?: Readonly<Immutable.ImmutableArray.Remaining<OpenTypes>> & Immutable.ImmutableArray.Additions<OpenTypes> & Immutable.ImmutableArray.Overrides<OpenTypes> & Immutable.ImmutableArray.ReadOnlyIndexer<OpenTypes>;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
/**
 * @deprecated
 */
export type LinkSettingProps = LinkSelectorContentProps;
export {};
