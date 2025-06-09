/** @jsx jsx */
import { React, jsx, type IMSizeModeLayoutJson, BrowserSizeMode, type LayoutItemConstructorProps, type IMThemeVariables, type IntlShape, ReactRedux } from 'jimu-core';
import { type PageContextProps, type LayoutItemProps, type LayoutContextProps } from 'jimu-layouts/layout-runtime';
interface IntlProps {
    intl: IntlShape;
}
interface OtherProps {
    browserSizeMode: BrowserSizeMode;
    isMainSizeMode: boolean;
    isTemplate: boolean;
    placeholderId: number;
    currentDialogId: string;
}
interface State {
    showModal: boolean;
    isBusy: boolean;
}
export declare class _WidgetPlaceholder extends React.PureComponent<LayoutItemProps & IntlProps & OtherProps, State> {
    ref: HTMLElement;
    btnRef: HTMLElement;
    pageContext: PageContextProps;
    layoutContext: LayoutContextProps;
    fakeLayouts: IMSizeModeLayoutJson;
    constructor(props: any);
    componentDidUpdate(prevProps: Readonly<LayoutItemProps & IntlProps & OtherProps>): void;
    getStyle(builderTheme: IMThemeVariables): import("jimu-core").SerializedStyles;
    toggleModal: (e: any) => void;
    closeModal: () => void;
    toggleDragoverEffect: (isDragover: boolean, draggingItem: LayoutItemConstructorProps) => void;
    onDrop: (draggingItem: LayoutItemConstructorProps) => void;
    setContent: (item: LayoutItemConstructorProps) => void;
    handleSyncChange: (newPlaceholderId: number) => void;
    getPopupStyle(): import("jimu-core").SerializedStyles;
    getModalStyle(): import("jimu-core").SerializedStyles;
    isItemAccepted: (item: LayoutItemConstructorProps) => boolean;
    render(): jsx.JSX.Element;
}
export declare const WidgetPlaceholder: React.FC<import("react-intl").WithIntlProps<{
    layoutId: string;
    layoutItemId: string;
    children?: any;
    style?: React.CSSProperties;
    onClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    aspectRatio?: number;
    className?: string;
    draggable?: boolean;
    onDoubleClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
    ref?: React.LegacyRef<_WidgetPlaceholder>;
    key?: React.Key | null | undefined;
    autoWidth?: boolean;
    intl: IntlShape;
    resizable?: boolean;
    isInSection?: boolean;
    showDefaultTools?: boolean;
    selectable?: boolean;
    forbidContextMenu?: boolean;
    forbidToolbar?: boolean;
    trailOrder?: number;
    forceAspectRatio?: boolean;
    resizeObserver?: ResizeObserver;
    autoHeight?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>> & {
    WrappedComponent: React.ComponentType<{
        layoutId: string;
        layoutItemId: string;
        children?: any;
        style?: React.CSSProperties;
        onClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
        aspectRatio?: number;
        className?: string;
        draggable?: boolean;
        onDoubleClick?: (e: any, layoutInfo: import("jimu-core").LayoutInfo) => void;
        ref?: React.LegacyRef<_WidgetPlaceholder>;
        key?: React.Key | null | undefined;
        autoWidth?: boolean;
        intl: IntlShape;
        resizable?: boolean;
        isInSection?: boolean;
        showDefaultTools?: boolean;
        selectable?: boolean;
        forbidContextMenu?: boolean;
        forbidToolbar?: boolean;
        trailOrder?: number;
        forceAspectRatio?: boolean;
        resizeObserver?: ResizeObserver;
        autoHeight?: boolean;
        context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
        store?: import("redux").Store;
    }>;
};
export {};
