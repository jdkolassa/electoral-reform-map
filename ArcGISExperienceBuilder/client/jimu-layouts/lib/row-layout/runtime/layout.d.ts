/** @jsx jsx */
import { React, ReactRedux, type LayoutTransformFunc, type IMLayoutJson } from 'jimu-core';
import type { LayoutProps, StateToLayoutProps } from '../../types';
type FlexboxLayoutProps = LayoutProps & {
    widgetId: string;
};
declare class RowLayout extends React.PureComponent<FlexboxLayoutProps & StateToLayoutProps> {
    finalLayout: IMLayoutJson;
    layoutTransform: LayoutTransformFunc;
    numOfRows: number;
    handleDebounceResize: any;
    layoutConRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    findExtension(): void;
    collectRowItems(): string[];
    transform(): void;
    createRow(): React.JSX.Element;
    onResize: ({ width, height }: {
        width: any;
        height: any;
    }) => void;
    render(): React.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof RowLayout, {
    layouts: import("seamless-immutable").ImmutableObjectMixin<import("jimu-core").SizeModeLayoutJson> & {
        readonly [x: string]: string;
    };
    widgetId: string;
    children?: React.ReactNode;
    style?: any;
    visible?: boolean;
    className?: string;
    ref?: React.LegacyRef<RowLayout>;
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
    isItemAccepted?: (item: import("jimu-core").LayoutItemConstructorProps, isReplacePlaceholder: boolean) => boolean;
    onItemClick?: (e: any, widgetId: string) => void;
    ignoreMinHeight?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default _default;
