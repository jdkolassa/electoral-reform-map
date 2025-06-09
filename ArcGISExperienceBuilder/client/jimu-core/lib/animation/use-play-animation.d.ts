import type { AnimationType, AnimationDirection, AnimationEffectType } from './types';
export interface Props {
    type: AnimationType;
    revert?: boolean;
    configType?: AnimationEffectType;
    direction?: AnimationDirection;
    delay?: number;
    playId?: number;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
}
/**
 * Process animation state of a widget configured on itself
 * @param props
 * @param ref
 */
export declare function usePlayAnimation(props: Props): any;
