import { type HoverType } from '../hover';
export interface Props {
    effect?: {
        type: HoverType;
        setting: any;
    };
    playId?: number;
}
/**
 * Process animation state of a widget configured on itself
 * @param props
 * @param ref
 */
export declare function useHoverAnimation(props: Props): any;
