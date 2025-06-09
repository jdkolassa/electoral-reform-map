import { React, type IntlShape } from 'jimu-core';
import { type SketchStandardProps } from '../../color-picker/sketch-standard';
export interface SketchStandardButtonProps extends SketchStandardProps {
    onAccept?: (color: string) => void;
    onCancel?: () => void;
}
interface ExtraProps {
    intl: IntlShape;
}
export declare const SketchStandardButton: import("@emotion/styled").StyledComponent<Omit<SketchStandardButtonProps & ExtraProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
}, {}, {}>;
export {};
