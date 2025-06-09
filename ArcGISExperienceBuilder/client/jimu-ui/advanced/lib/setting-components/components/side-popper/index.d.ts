/** @jsx jsx */
import { React, type IMThemeVariables, ReactRedux, type IMSelection, jsx } from 'jimu-core';
import { type PopperCoreProps } from 'jimu-ui';
export interface SidePopperProps extends Omit<PopperCoreProps, 'open' | 'reference' | 'position' | 'toggle' | 'children'> {
    /**
     * If `left`, the side popper is next to left sidebar of builder.
     * If `right`, the side popper is next to right sidebar of builder.
     */
    position: 'left' | 'right';
    /**
     * If `true`, the side popper is visible.
     */
    isOpen: boolean;
    /**
     * Toggle to open/close the side popper.
     */
    toggle: () => void;
    /**
     * Element which triggers side popper.
     *
     * By default, clicking left/right sidebar of builder will close the side popper automatically.
     * Clicking `trigger` won't close the side popper.
     */
    trigger: HTMLElement | HTMLElement[];
    /**
     * An element to focus after the side popper is closed.
     * `backToFocusNode` is for accessibility purposes.
     *
     * If don't pass in `backToFocusNode`, will focus `trigger` after side popper is closed.
     */
    backToFocusNode?: HTMLElement;
    /**
     * If current selected widget is not the widget, will close the side popper.
     */
    widgetId?: string;
    /**
     * Provide a uniform header.
     */
    title?: React.ReactNode;
    /**
     * @ignore
     * @default false
     * Add the FOCUSABLE_CONTAINER_CLASS to the title to make the close button focused in case of 508 problems.
     *
     * Only needs this prop if the components in the content of the SidePopper uses FOCUSABLE_CONTAINER_CLASS.
     */
    addFocusableContainerClass?: boolean;
    /**
     * @ignore
     */
    className?: string;
    /**
     * A ref that points to the used popper instance.
     */
    children?: React.ReactNode;
    /**
     * To provide a label for the side popper for accessibility purposes.
     */
    'aria-label'?: string;
}
interface ExtraProps {
    leftSidebarCollapse: boolean;
    rightSidebarCollapse: boolean;
    dispatch: any;
    isTemplatePage: boolean;
    theme?: IMThemeVariables;
    layoutSelection?: IMSelection;
}
/**
 * The `SidePopper` component is a popper which reference node is left/right side panel of builder.
 *
 * ```ts
 * import { SidePopper } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare class _SidePopper extends React.PureComponent<SidePopperProps & ExtraProps, unknown> {
    closeBtnRef: React.RefObject<HTMLButtonElement>;
    popperRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SidePopperProps & ExtraProps): void;
    componentWillUnmount(): void;
    handleDocumentMousedown: (evt: MouseEvent) => void;
    getReference(position: 'left' | 'right'): HTMLElement;
    getPlacement(position: 'left' | 'right'): "right-start" | "left-start";
    toggle: () => void;
    keepFocusAfterClose: () => void;
    onKeyDown: (e: any) => void;
    render(): jsx.JSX.Element;
}
export declare const SidePopper: ReactRedux.ConnectedComponent<import("@emotion/styled").StyledComponent<SidePopperProps & ExtraProps, {}, {}>, {
    theme?: IMThemeVariables;
    title?: React.ReactNode;
    role?: React.AriaRole;
    widgetId?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    position: "left" | "right";
    zIndex?: number;
    trigger: HTMLElement | HTMLElement[];
    className?: string;
    tabIndex?: number;
    'aria-label'?: string;
    'aria-modal'?: boolean;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    version?: number;
    placement?: import("jimu-ui").Placement;
    strategy?: import("jimu-ui").Strategy;
    arrowOptions?: import("jimu-ui").ArrowStyleOptions | boolean;
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
    toggle: () => void;
    isOpen: boolean;
    backToFocusNode?: HTMLElement;
    addFocusableContainerClass?: boolean;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export {};
