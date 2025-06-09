import type { React } from 'jimu-core';
import type { FilteringStyledOptions, StyledComponent } from '../../__emotion__';
/**
 * A higher-order component that links the registered component style.
 * @param Component
 * @param name
 * @param options
 */
export declare function withStyles<C extends React.ComponentClass<React.ComponentProps<C>> | React.FC<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(Component: C, name?: string, inputOptions?: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>): StyledComponent<React.ComponentProps<C>>;
