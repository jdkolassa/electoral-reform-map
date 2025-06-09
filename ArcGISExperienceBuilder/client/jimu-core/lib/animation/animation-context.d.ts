import * as React from 'react';
import type { AnimationPlayMode, AnimationSetting } from './types';
export declare const AnimationContext: React.Context<AnimationContextProps>;
export interface AnimationContextProps {
    setting: AnimationSetting;
    playId: number;
    delay?: number;
    revert?: boolean;
    oid?: string | string[];
    playMode?: AnimationPlayMode;
    onContextAnimationEnd?: () => void;
}
export declare const IntersectionContext: React.Context<IntersectionContextProps>;
export interface IntersectionContextProps {
    monitor: boolean;
    layoutId?: string;
}
