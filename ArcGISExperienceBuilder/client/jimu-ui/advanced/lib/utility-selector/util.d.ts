import { SupportedUtilityType } from 'jimu-core';
export declare function getLabelOfUrl(url: string): string;
export declare function isUtilityMatch(item: {
    url: string;
    label: string;
    type: SupportedUtilityType;
}, serviceTypes: SupportedUtilityType[], keyword?: string, pattern?: RegExp): boolean;
export declare function isGPServer(url: string): boolean;
export declare function isValidUtilityUrl(url: string): boolean;
export declare function checkServiceType(url: string, forceLogin?: boolean): Promise<{
    type: SupportedUtilityType;
    info: any;
}>;
