import { AnimationType, type Animation } from './types';
export declare function getNextAnimationId(): number;
export declare function getEffect(type: AnimationType, option: any): Animation;
export declare function isVisible(elemtent: HTMLElement): boolean;
export declare function isVisibleInContainer(depth: number, element: HTMLElement): boolean;
export declare function isElementVisible(element: HTMLElement, parent?: HTMLElement): boolean;
