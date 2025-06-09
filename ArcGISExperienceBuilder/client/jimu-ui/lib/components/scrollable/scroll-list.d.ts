import { React } from 'jimu-core';
import { type NavButtonGroupProps } from '../pagination';
export interface ScrollListProps extends NavButtonGroupProps {
    /**
     * Defines the role added to the element.
     * @default tablist
     */
    role?: string;
    /**
     * Display items vertically or not.
     * @default false
     */
    vertical?: boolean;
    /**
     * The duration of the animation when scrolling.
     * @default 300
     */
    duration?: number;
    /**
     * If `true`, hide scroll arrows on both sides.
     * @default false
     */
    hideArrow?: boolean;
    /**
     * If `true`, when scrolling to the start or end point, hide the corresponding arrow.
     * @default true
     */
    autoArrow?: boolean;
    /**
     * A set of react elements that need to be scrolled.
     */
    items: React.ReactElement[];
    /**
     * Whether to use the wheel to scroll.
     * @default false
     */
    useWheel?: boolean;
    /**
     * The tag name of the scroll list.
     * @default div
     */
    listTag?: React.ElementType;
}
export declare const ScrollList: (props: ScrollListProps) => React.JSX.Element;
