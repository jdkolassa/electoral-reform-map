/** @jsx jsx */
import { React } from 'jimu-core';
/**
 * The Scrollable component props.
 */
export interface ScrollableProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    /**
     * Scrollable horizontally or not.
     * @default false
     */
    horizontal?: boolean;
    /**
     * When `version` changes, update the topping and bottoming state.
     */
    version?: number;
}
export interface ScrollableRefProps {
    scrollable: boolean;
    scroll?: (previous: boolean, duration?: number) => void;
    topping?: boolean;
    bottoming?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
}
/**
 * The `Scrollable` provides users with the ability to scroll through children without displaying the scroll bar.
 *
 * ```ts
 * import { Scrollable } from 'jimu-ui'
 * ```
 */
export declare const Scrollable: React.ForwardRefExoticComponent<ScrollableProps & React.RefAttributes<ScrollableRefProps>>;
