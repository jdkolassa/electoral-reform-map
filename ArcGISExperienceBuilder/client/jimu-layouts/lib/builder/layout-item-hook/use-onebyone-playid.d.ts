import type { AnimationType } from 'jimu-core';
/**
 * Ways to trigger one by one animation directly:
 * 1. preview effect
 * 2. If the container widget has no animation effect:
 *  2.1. switching from design mode to live view mode
 *  2.2. switch to another page in live view mode
 *  2.3. scroll into view in live view mode
 *
 * note: one by one can be triggered indirectly if the container plays animation
 * @param option
 * @returns
 */
export declare function useOneByOnePlayId(option: {
    type: AnimationType;
    isPreview: boolean;
    previewId: number;
    hasParentAnimation: boolean;
}): [number, boolean, () => void];
