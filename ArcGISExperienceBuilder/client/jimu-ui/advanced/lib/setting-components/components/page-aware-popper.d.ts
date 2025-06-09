/** @jsx jsx */
import { type PopperProps } from 'jimu-ui';
import { React, ReactRedux, type BrowserSizeMode, type IMThemeVariables, jsx } from 'jimu-core';
interface StateToPopperProps {
    pageId: string;
    sizemode: BrowserSizeMode;
    dispatch?: any;
}
declare class PageAwarePopper extends React.PureComponent<PopperProps & StateToPopperProps & {
    theme?: IMThemeVariables;
}> {
    componentDidUpdate(prevProps: PopperProps & StateToPopperProps): void;
    getStyle(): import("jimu-core").SerializedStyles;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof PageAwarePopper, {
    theme?: IMThemeVariables;
    role?: React.AriaRole;
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    zIndex?: number;
    offset?: [number, number];
    open: boolean;
    autoFocus?: boolean;
    className?: string;
    tabIndex?: number;
    'aria-modal'?: boolean;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    ref?: React.LegacyRef<PageAwarePopper>;
    key?: React.Key | null | undefined;
    version?: number;
    reference: import("jimu-ui").TargetType;
    placement?: import("jimu-ui").Placement | import("jimu-ui").AutoPlacement;
    strategy?: import("jimu-ui").Strategy;
    arrowOptions?: import("jimu-ui").ArrowStyleOptions | boolean;
    openOverlayOnMount?: boolean;
    unstyled?: boolean;
    disablePortal?: boolean;
    disableActivateOverlay?: boolean;
    disableOverlayManager?: boolean;
    autoUpdate?: boolean;
    inlineOptions?: import("@floating-ui/core").InlineOptions | boolean;
    hideOptions?: boolean | {
        padding?: import("@floating-ui/utils").Padding;
        strategy?: "referenceHidden" | "escaped";
        rootBoundary?: import("@floating-ui/core").RootBoundary;
        elementContext?: import("@floating-ui/core").ElementContext;
        altBoundary?: boolean;
        boundary?: import("@floating-ui/dom").Boundary;
    };
    shiftOptions?: boolean | {
        padding?: import("@floating-ui/utils").Padding;
        mainAxis?: boolean;
        crossAxis?: boolean;
        limiter?: {
            fn: (state: import("@floating-ui/core").MiddlewareState) => import("@floating-ui/utils").Coords;
            options?: any;
        };
        rootBoundary?: import("@floating-ui/core").RootBoundary;
        elementContext?: import("@floating-ui/core").ElementContext;
        altBoundary?: boolean;
        boundary?: import("@floating-ui/dom").Boundary;
    };
    flipOptions?: boolean | {
        padding?: import("@floating-ui/utils").Padding;
        mainAxis?: boolean;
        crossAxis?: boolean;
        rootBoundary?: import("@floating-ui/core").RootBoundary;
        elementContext?: import("@floating-ui/core").ElementContext;
        altBoundary?: boolean;
        fallbackPlacements?: Array<import("jimu-ui").Placement>;
        fallbackStrategy?: "bestFit" | "initialPlacement";
        fallbackAxisSideDirection?: "none" | "start" | "end";
        flipAlignment?: boolean;
        boundary?: import("@floating-ui/dom").Boundary;
    };
    autoPlacementOptions?: boolean | {
        padding?: import("@floating-ui/utils").Padding;
        alignment?: import("@floating-ui/utils").Alignment | null;
        crossAxis?: boolean;
        rootBoundary?: import("@floating-ui/core").RootBoundary;
        elementContext?: import("@floating-ui/core").ElementContext;
        altBoundary?: boolean;
        autoAlignment?: boolean;
        allowedPlacements?: Array<import("jimu-ui").Placement>;
        boundary?: import("@floating-ui/dom").Boundary;
    };
    offsetOptions?: import("jimu-ui").OffsetOptions | [number, number] | boolean;
    sizeOptions?: boolean | {
        padding?: import("@floating-ui/utils").Padding;
        rootBoundary?: import("@floating-ui/core").RootBoundary;
        elementContext?: import("@floating-ui/core").ElementContext;
        altBoundary?: boolean;
        boundary?: import("@floating-ui/dom").Boundary;
        apply?: (args: import("@floating-ui/dom").MiddlewareState & {
            availableWidth: number;
            availableHeight: number;
        }) => void | Promise<void>;
    };
    middleware?: import("@floating-ui/dom").Middleware[];
    keepMount?: boolean;
    avoidNestedToggle?: boolean;
    delayToggle?: number;
    showArrow?: boolean;
    arrowStyle?: import("jimu-ui").ArrowStyle;
    modifiers?: any[];
    toggle?: (evt?: React.MouseEvent<any> | React.TouchEvent<any> | React.KeyboardEvent<any>, reason?: import("../../../../lib/components/overlay/popper/overlay-dismiss-manager").OverlayDismissReason) => any;
    flipPlacement?: boolean;
    popperNodeRef?: React.Ref<HTMLDivElement>;
    listenContextPopperVersion?: boolean;
    referenceHiddenVisibility?: boolean;
    trapFocus?: boolean;
    forceLatestFocusElements?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export default _default;
