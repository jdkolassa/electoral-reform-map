import { React } from 'jimu-core';
import { type TransitionDurationOption } from 'jimu-theme';
import { type TransitionProps } from '../transition';
export type CollapseParts = 'root' | 'wrapper';
/**
 * The `Collapse` component props.
 */
export interface CollapseProps extends Omit<TransitionProps, 'children' | 'timeout'> {
    /**
     * Defines the class names added to the wrapper container().
     */
    wrapperClassName?: string;
    /**
     * Defines the role added to the element.
     */
    role?: React.AriaRole;
    /**
     * The transition orientation.
     * @default vertical
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * The width (horizontal) or height (vertical) of the container when collapsed.
     * @default '0px'
     */
    collapsedSize?: string | number;
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     * @default standard
     */
    timeout?: TransitionDurationOption | 'auto';
    /**
     * If `true`, the component will transition in.
     * @default false
     */
    in?: boolean;
    /**
     * Controls whether the `Collapse` component is open or closed.
     * It's recommended use props `in`.
     * @default false
     */
    isOpen?: boolean;
    /**
     * Custom html element to use as this component.
     * @default div
     */
    tag?: React.ElementType;
    /**
     * A single child content element.
     */
    children: React.ReactNode;
}
/**
 * The `Collapse` component is a content area which can be collapsed and expanded.
 *
 * ```ts
 * import { Collapse } from 'jimu-ui'
 * ```
 */
export declare const Collapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<HTMLElement>>;
