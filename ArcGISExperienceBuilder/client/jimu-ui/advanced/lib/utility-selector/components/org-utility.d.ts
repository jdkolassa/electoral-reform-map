/** @jsx jsx */
import { jsx, type UseUtility, type ImmutableArray, type SupportedUtilityType } from 'jimu-core';
import { type UtilityTreeItem } from './types';
interface Props {
    keyword: string;
    serviceTypes: SupportedUtilityType[];
    isMultiple: boolean;
    pattern?: RegExp;
    useUtilities?: ImmutableArray<UseUtility>;
    onChange?: (utilities: ImmutableArray<UseUtility>) => void;
}
export declare function extractService(helperServices: any, serviceTypes: any, keyword: any, pattern: any, translate: any): UtilityTreeItem[];
export declare function addNewUtility(utilityTreeItem: UtilityTreeItem): string;
export declare function OrgUtilityTree(props: Props): jsx.JSX.Element;
export {};
