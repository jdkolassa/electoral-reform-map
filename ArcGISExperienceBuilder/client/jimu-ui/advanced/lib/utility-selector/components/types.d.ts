import { SupportedUtilityType, type OrgGeocodeSetting, type OrgPrintSetting } from 'jimu-core';
export interface UtilityTreeItem {
    id: string;
    label: string;
    type: SupportedUtilityType;
    name?: string;
    index?: number;
    url?: string;
    rootId?: string;
    task?: string;
    children?: UtilityTreeItem[];
    setting?: OrgGeocodeSetting | OrgPrintSetting;
}
export declare const predefinedOrgUtilities: ({
    name: string;
    type: SupportedUtilityType;
    dynamic?: undefined;
} | {
    name: string;
    dynamic: boolean;
    type: SupportedUtilityType;
})[];
