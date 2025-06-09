import { React } from 'jimu-core';
import { type OverlayDismissReason } from '../overlay-dismiss-manager';
import { type FloatingPanelChildrenProps } from './children';
import { type PositionProviderProps } from './position-provider';
export type { FloatingPanelParts } from './children';
/**
 * The `FloatingPanel` component props.
 */
export interface FloatingPanelProps extends PositionProviderProps, FloatingPanelChildrenProps {
    /**
     * By default, clicking into a nested `Popper` will not trigger the toggle method of the current Popper.
     * If you want to trigger the toggle method of the current Popper, you can set `avoidNestedToggle` to `false`.
     * @default true
     * @ignore
     */
    avoidNestedToggle?: boolean;
    /**
     * Callback fired when panel requests to be closed.
     * @event
     */
    toggle?: (evt?: React.MouseEvent<any> | React.TouchEvent<any> | React.KeyboardEvent<any>, reason?: OverlayDismissReason) => any;
    /**
     * Whether the floating panel is hidden when the reference is hidden.
     * This prop is valid when there is a `reference`.
     * @default false
     */
    referenceHiddenVisibility?: boolean;
}
/**
 * The `FloatingPanel` component allows content to be placed in a draggable floating container.
 * If `reference` is provided, `position` and `defaultPosition` from props will be ignored, and the initial position automatically determined based the `reference`.
 *
 * ```ts
 * import { FloatingPanel } from 'jimu-ui'
 * ```
 */
export declare const FloatingPanel: React.MemoExoticComponent<React.ForwardRefExoticComponent<FloatingPanelProps & React.RefAttributes<HTMLDivElement>>>;
