import type { ImmutableObject } from 'jimu-core';
export interface IconGroup {
    [iconKey: string]: string;
}
export interface IconGroups {
    [groupKey: string]: IconGroup;
}
export interface IconList {
    groups: IconGroups;
}
export type IMIconGroup = ImmutableObject<IconGroup>;
export type IMIconGroups = ImmutableObject<IconGroups>;
export type PublicIconGroupType = 'general' | 'arrows' | 'sns';
export type ConfigurableOption = 'color' | 'size' | 'all' | 'none';
export interface PreviewOptions {
    color?: boolean;
    size?: boolean;
    autoFlip?: boolean;
}
