import { AnimationType, type AnimationEffectType, type AnimationDirection, type AnimationPlayMode } from './types';
/**
 * Use this hook to extract inherited one by one animation setting
 * @param option
 */
export declare function useParentAnimation(parentId: string): {
    type?: AnimationType;
    configType?: AnimationEffectType;
    direction?: AnimationDirection;
    revert?: boolean;
    playMode?: AnimationPlayMode;
    playId: number;
    onContextAnimationEnd?: () => void;
};
