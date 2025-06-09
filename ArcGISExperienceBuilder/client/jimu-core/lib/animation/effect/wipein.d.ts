import { BaseAnimation } from './base';
import { type AnimationProps, AnimationDirection } from '../types';
export declare class WipeIn extends BaseAnimation {
    direction: AnimationDirection;
    constructor(option?: any);
    initProps(): AnimationProps;
    getClipProp(): "clipTop" | "clipRight" | "clipLeft" | "clipBottom";
    animateProps(): AnimationProps;
}
