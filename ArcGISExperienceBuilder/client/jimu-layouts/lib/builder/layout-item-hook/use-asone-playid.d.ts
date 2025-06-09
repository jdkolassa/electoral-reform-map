import type { AnimationType } from 'jimu-core';
/**
 * Ways to trigger as one animation directly:
 * 1. preview effect
 * 2. switching from design mode to live view mode
 * 3. switch to another page in live view mode
 * 4. scroll into view in live view mode
 *
 * note: as one animation can be triggered indirectly if the container plays one by one
 * @param option
 * @returns
 */
export declare function useAsOnePlayId(option: {
    type: AnimationType;
    isPreview: boolean;
    previewId: number;
    hasParentAnimation: boolean;
}): [number, boolean, () => void];
