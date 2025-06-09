/** @jsx jsx */
import { jsx, type IMThemeVariables } from 'jimu-core';
export interface ResizeHandlersProps {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
    builderTheme?: IMThemeVariables;
    rotation?: number;
}
export declare function ResizeHandlers(props: ResizeHandlersProps): jsx.JSX.Element;
