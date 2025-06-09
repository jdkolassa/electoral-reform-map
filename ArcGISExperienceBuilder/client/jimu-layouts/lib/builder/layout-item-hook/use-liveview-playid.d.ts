import { type AnimationType } from 'jimu-core';
/**
 * Generate playId when the whole page's animation is played in live view mode.
 * 1. switch from design mode to live view mode
 * 2. size mode changes
 * 3. page is activated
 *
 * @param option
 * @returns
 */
export declare function useLiveviewPlayId(type: AnimationType, hasParentAnimation: boolean): {
    playId: number;
    revert: boolean;
    onAnimationEnd: () => void;
};
