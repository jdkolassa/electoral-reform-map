import { type ColorItem } from '../components';
import { type SketchProps } from './sketch';
/**
 * The SketchStandard component props
 */
export interface SketchStandardProps extends SketchProps {
    presetColors?: ColorItem[];
}
export declare const SketchStandard: import("@emotion/styled").StyledComponent<SketchStandardProps, {}, {}>;
