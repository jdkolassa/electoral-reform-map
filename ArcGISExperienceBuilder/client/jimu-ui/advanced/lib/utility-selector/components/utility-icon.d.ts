/** @jsx jsx */
import { jsx, SupportedUtilityType } from 'jimu-core';
import type { SVGComponentProps } from 'jimu-ui';
interface Props {
    type: SupportedUtilityType;
}
export declare function UtilityIcon(props: Props & SVGComponentProps): jsx.JSX.Element;
export declare function selectUtilitySVG(type: SupportedUtilityType): any;
export {};
