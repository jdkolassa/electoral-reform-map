import type { AnimationType, AnimationDirection, AnimationEffectType } from './types';
export interface Props {
    type: AnimationType;
    ref: HTMLDivElement;
    canMonitor: boolean;
    enableMonitor: boolean;
    configType?: AnimationEffectType;
    direction?: AnimationDirection;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
}
export declare function useScrollAnimation(props: Props): any;
