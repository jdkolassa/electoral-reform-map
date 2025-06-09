/** @jsx jsx */
import { jsx } from 'jimu-core';
interface SearchGeneralSettingProps {
    id: string;
    hint?: string;
    allowSearchSourceSelection?: boolean;
    enableAllowSearchSourceSelectionSetting?: boolean;
    onGeneralSettingChange?: (key: string[], value: any) => void;
}
export declare const SearchGeneralSetting: (props: SearchGeneralSettingProps) => jsx.JSX.Element;
export {};
