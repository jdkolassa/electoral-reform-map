/** @jsx jsx */
import { React } from 'jimu-core';
import { type ExportedColorProps, type InjectedColorProps, type ColorResult } from '.';
interface _SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    oldHue?: any;
    disableAlpha?: boolean;
    hsv?: any;
    onChange?: (color: ColorResult) => void;
}
export type SketchProps = _SketchProps & ExportedColorProps & InjectedColorProps;
export declare const Sketch: React.ComponentClass<_SketchProps & ExportedColorProps & InjectedColorProps, any>;
export {};
