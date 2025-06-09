import * as React from 'react';
import { type AnimationType, type AnimationDirection, type AnimationEffectType } from './types';
import type { HoverType } from '../hover';
export interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
    parentId: string;
    /**
     * Animation type, includes:
     * AnimationType.FadeIn
     * AnimationType.FlyIn
     * AnimationType.ZoomIn
     * AnimationType.WipeIn
     * AnimationType.SpinIn
     * AnimationType.FloatIn
     */
    type: AnimationType;
    hoverEffect?: {
        type: HoverType;
        setting: any;
    };
    /**
     * Set animation effects. Inclues:
     * AnimationEffectType.Default
     * AnimationEffectType.Gentle
     * AnimationEffectType.Wobbly
     * AnimationEffectType.Stiff
     * AnimationEffectType.Slow
     * AnimationEffectType.Molasses
     */
    configType?: AnimationEffectType;
    /**
     * Direction of the animation. Only some of the animation types support direction.
     */
    direction?: AnimationDirection;
    children: React.ReactElement | React.ReactNode;
    /**
     * AnimationTriggerType
     */
    trigger?: string;
    /**
     * If it is `true`, the component will be transparent. Combined with manual trigger
     */
    revert?: boolean;
    delay?: number;
    style?: any;
    className?: string;
    /**
     * If provided and its value is different from previous one, animation will play automatically
     */
    playId?: number;
    hoverPlayId?: number;
    isLastChild?: boolean;
    onAnimationStart?: () => void;
    /**
     * Callback function when the animation is end
     */
    onAnimationEnd?: () => void;
}
/**
 * AnimationComponent is supported in Experience Builder to customize how your widgets appear. With provided effects and options, you can build the following experiences:
 *
 * - A window spins in as you load the app.
 * - Widgets fly in as you scroll down the page.
 * - The later view pushes the former one as you navigate a Section.
 * - The descriptions fade in as you hover over a Card widget.
 *
 * ```ts
 * import { Animation, OneByOneAnimation, AnimationContext } from 'jimu-core'
 * ```
 */
export declare const AnimationComponent: React.ForwardRefExoticComponent<AnimationProps & React.RefAttributes<HTMLDivElement>>;
