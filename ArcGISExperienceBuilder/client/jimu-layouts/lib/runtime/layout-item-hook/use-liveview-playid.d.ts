import { type AnimationType } from 'jimu-core';
/**
 * Generate playId when the whole page's animation is played in live view mode.
 * 1. page is activated
 *
 * @param option
 * @returns
 */
export declare function useLiveviewPlayId(type: AnimationType, hasParentAnimation: boolean): [number, boolean, () => void];
