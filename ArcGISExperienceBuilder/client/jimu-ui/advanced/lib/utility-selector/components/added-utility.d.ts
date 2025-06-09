/** @jsx jsx */
import { React, jsx, type UtilitiesJson, type UseUtility, type ImmutableObject, type ImmutableArray, SupportedUtilityType } from 'jimu-core';
interface Props {
    keyword: string;
    serviceTypes: SupportedUtilityType[];
    isMultiple: boolean;
    utilities: ImmutableObject<UtilitiesJson>;
    pattern?: RegExp;
    useUtilities?: ImmutableArray<UseUtility>;
    onUtilitiesChange?: (utilities: ImmutableArray<UseUtility>) => void;
}
export declare function AddedUtilityTree(props: Props & Partial<React.HtmlHTMLAttributes<HTMLDivElement>>): jsx.JSX.Element;
export {};
