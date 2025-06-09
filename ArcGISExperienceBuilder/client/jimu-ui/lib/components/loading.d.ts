/** @jsx jsx */
import { React, type IMThemeVariables, type SerializedStyles, jsx } from 'jimu-core';
import { LoadingType } from './types';
export interface LoadingProps {
    /**
     * Loading type.
     * @default LoadingType.Primary
     */
    type?: LoadingType;
    /**
     * Unit is px.
     */
    width?: number;
    /**
     * Unit is px.
     */
    height?: number;
    className?: string;
}
interface ExtraProps {
    /**
     * @ignore
     */
    theme: IMThemeVariables;
}
/**
 * The `Loading` component can show loading state and disable interactions.
 *
 * ```ts
 * import { Loading } from 'jimu-ui'
 * ```
 */
export declare class _Loading extends React.PureComponent<LoadingProps & ExtraProps> {
    static count: number;
    id: string;
    constructor(props: any);
    getClassFromType(type: LoadingType, style: any): string;
    getStyle(width: number, height: number, type: LoadingType): SerializedStyles;
    render(): jsx.JSX.Element;
}
/**
 * The `Loading` component can show loading state and disable interactions.
 *
 * ```ts
 * import { Loading } from 'jimu-ui'
 * ```
 */
export declare const Loading: import("@emotion/styled").StyledComponent<Pick<any, string | number | symbol> & {
    theme?: IMThemeVariables;
}, {}, {}>;
export {};
