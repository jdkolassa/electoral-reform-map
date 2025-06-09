import { React } from 'jimu-core';
import { type ScrollListProps as BaseScrollListProps } from './scroll-list';
/**
 * The ScrollList component props.
 */
export type ScrollListProps = Omit<BaseScrollListProps, 'hideArrow'>;
/**
 * The `ScrollList` provides the user with the ability to scroll through internal items.
 *
 * ```ts
 * import { ScrollList } from 'jimu-ui'
 * ```
 */
export declare const ScrollList: (props: ScrollListProps) => React.JSX.Element;
export * from './scrollable';
