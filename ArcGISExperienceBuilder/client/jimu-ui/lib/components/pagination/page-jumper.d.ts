import { React } from 'jimu-core';
import type { ComponentSize, StandardComponentProps } from '../types';
/**
 * The `PageJumper` component props.
 */
export interface PageJumperProps extends StandardComponentProps {
    /**
     * Defines the size of the component.
     * @default default
     */
    size?: ComponentSize;
    /**
     * The value of this component.
     */
    value?: number;
    /**
     * Max page number of per page.
     */
    maxValue?: number;
    /**
     * If `true`, the Pagination will be disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback fires when the value is changed.
     */
    onChange?: (current: number, evt?: React.ChangeEvent<unknown>) => void;
}
/**
 * The `PageJumper` component is used to quickly jump to a page.
 *
 * Please use this component combining with `Pagination`.
 *
 * ```ts
 * import { PageJumper } from 'jimu-ui'
 * ```
 */
export declare const PageJumper: (props: PageJumperProps) => React.JSX.Element;
