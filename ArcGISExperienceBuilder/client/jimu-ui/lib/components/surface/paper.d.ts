import { React } from 'jimu-core';
import { type SurfaceProps } from './surface';
/**
 * The `Paper` component props.
 */
export interface PaperProps extends Omit<SurfaceProps, 'level'> {
    /**
     * The variant to use.
     * @default outlined
     */
    variant?: 'elevation' | 'outlined';
}
/**
 * The `Paper` component is a container for displaying content on a `paper` surface.
 *
 * ```ts
 * import { Paper } from 'jimu-ui'
 * ```
 */
export declare const Paper: React.ForwardRefExoticComponent<PaperProps & React.RefAttributes<any>>;
