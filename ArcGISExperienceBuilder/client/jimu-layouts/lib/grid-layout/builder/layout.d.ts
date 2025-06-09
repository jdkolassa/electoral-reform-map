/** @jsx jsx */
import { React, ReactRedux, jsx, type LayoutItemConstructorProps, Immutable, type IMSizeModeLayoutJson, type LayoutTransformFunc } from 'jimu-core';
import { type LayoutProps, type StateToLayoutProps, type PageContextProps } from 'jimu-layouts/layout-runtime';
import type { DropHandlers } from '../../builder/types';
import { SideType } from './types';
declare class GridLayout extends React.PureComponent<LayoutProps & StateToLayoutProps> implements DropHandlers {
    fakeLayouts: IMSizeModeLayoutJson;
    tipRef: React.RefObject<HTMLDivElement>;
    layoutTransform: LayoutTransformFunc;
    pageContext: PageContextProps;
    constructor(props: any);
    findExtension(): void;
    handleDragOver: () => any;
    handleDragEnter: () => any;
    handleDragLeave: () => any;
    handleDrop: (draggingItem: LayoutItemConstructorProps, containerRect: DOMRect, itemRect: DOMRect & {
        handlerRect?: DOMRect;
    }) => void;
    handleDropAtSide(draggingItem: LayoutItemConstructorProps, side: SideType): void;
    handleTemplateSelected: (templateGridJson: any) => Promise<void>;
    handlePageTemplateSelected: (templatePageJson: any) => void;
    highlight: (side: SideType) => void;
    clearHighlight: (side: SideType) => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridLayout, {
    layouts: Immutable.ImmutableObjectMixin<import("jimu-core").SizeModeLayoutJson> & {
        readonly [x: string]: string;
    };
    children?: React.ReactNode;
    style?: any;
    visible?: boolean;
    className?: string;
    ref?: React.LegacyRef<GridLayout>;
    key?: React.Key | null | undefined;
    isInSection?: boolean;
    isInWidget?: boolean;
    isRepeat?: boolean;
    isPageItem?: boolean;
    itemDraggable?: boolean;
    itemResizable?: boolean;
    itemSelectable?: boolean;
    droppable?: boolean;
    showDefaultTools?: boolean;
    isItemAccepted?: (item: LayoutItemConstructorProps, isReplacePlaceholder: boolean) => boolean;
    onItemClick?: (e: any, widgetId: string) => void;
    ignoreMinHeight?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default _default;
